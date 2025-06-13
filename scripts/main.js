//Verificar si existe sesion
if (localStorage.getItem("usuarioLogueado") === null) {
  window.location.href = "login.html"
}

function changeImage(){
    let infoPerfil = JSON.parse(localStorage.getItem("usuarioLogueado"))
    let image = document.getElementById("imageNavbar")
    image.src = "../assets/profile-images/"+infoPerfil.image+"-small.png"
}

changeImage()

function Player(username, email, password, favorites){
    this.username = username;
    this.email = email;
    this.password = password;
    this.favorites = favorites;
}



function Personaje(id, nombre, titulo, rareza, vision) {
  this.nombre = nombre;
  this.id     = id,
  this.rareza = rareza;
  this.titulo = titulo;
  this.vision = vision;

  this.getImageURL = function(){
    return "https://genshin.jmp.blue/characters/" + this.id + "/card"
  }
}


let aProfile = document.getElementById("profile")

aProfile.addEventListener("click", (e) => {
  e.preventDefault()
  window.location.href = "profile.html"
})

async function obtenerPersonajes(){
  try {
    let respuesta = await fetch("https://genshin.jmp.blue/characters/")
    let personajes = await respuesta.json()
    let personajesParse = []
    for(let i=0; i < 15; i++ ){
      let personaje = await obtenerDetallePersonaje(personajes[i])
      personajesParse.push(new Personaje(personajes[i], personaje.name, personaje.title, personaje.rarity, personaje.vision))
    }

    renderizarPersonajes(personajesParse)
    
  }catch(error) {
    console.error(error)
  }
}

async function obtenerDetallePersonaje(id){
  try {
      let respuestaIndividual = await fetch("https://genshin.jmp.blue/characters/" + id)
      let personaje = await respuestaIndividual.json()
      return personaje
  } catch(error){
    console.error(error)
  }
}

function renderizarPersonajes(personajes){

  let charactersContainer = document.querySelector(".cards-container")

  for(let i= 0; i < personajes.length; i++){
    let card = document.createElement("div")
    let cardImage = document.createElement("div")
    let characterImage = document.createElement("img")
    let cardContent = document.createElement("div")
    let cardName = document.createElement("p")
    let cardNickname = document.createElement("p")
    let cardButtons = document.createElement("div")
    let buttonFavorite = document.createElement("button")
    let buttonDetails = document.createElement("button")
    characterImage.src =  personajes[i].getImageURL()
    cardName.textContent = personajes[i].nombre
    cardName.className = "name"
    cardNickname.textContent = personajes[i].titulo
    cardNickname.className = "nickname"
    buttonFavorite.textContent = "Add to favorites"
    buttonFavorite.className = "favorite-card"
    buttonFavorite.id = personajes[i].id
    buttonDetails.textContent = "See details"
    buttonDetails.className = "details-card"
    buttonDetails.id = personajes[i].id


    buttonFavorite.addEventListener("click", async (e) => {
      e.preventDefault()
      let infoPerfil = JSON.parse(localStorage.getItem("usuarioLogueado"))
      const existePersonaje = infoPerfil.favorites.find((personaje) => personaje.id === buttonFavorite.id)
      if(existePersonaje){
        alert("Personaje agregado anteriormente a favoritos")
      }else{
        let personaje = await obtenerDetallePersonaje(buttonFavorite.id)
        infoPerfil.favorites.push(new Personaje(buttonFavorite.id, personaje.name, personaje.title, personaje.rarity, personaje.vision))
        let usuarios = JSON.parse(localStorage.getItem("usuarios"))
        let indexUsuarioLogueado = usuarios.findIndex((usuario) => usuario.username === infoPerfil.username)
        usuarios[indexUsuarioLogueado].favorites.push(new Personaje(buttonFavorite.id, personaje.name, personaje.title, personaje.rarity, personaje.vision))
        localStorage.setItem("usuarioLogueado", JSON.stringify(infoPerfil))
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        alert("Nuevo personaje añadido a favoritos!")
      }
    })

    buttonDetails.addEventListener("click", (e) => {
      e.preventDefault()
      window.location.href = "element.html?id=" + buttonDetails.id
    })


    card.className = "card"
    cardImage.className = "card-image"
    cardContent.className = "card-content"
    cardButtons.className = "card-buttons"


    cardImage.appendChild(characterImage)
    cardContent.appendChild(cardName)
    cardContent.appendChild(cardNickname)
    cardButtons.appendChild(buttonFavorite)
    cardButtons.appendChild(buttonDetails)

    card.appendChild(cardImage)
    card.appendChild(cardContent)
    card.appendChild(cardButtons)
    charactersContainer.appendChild(card)

  }
}

obtenerPersonajes()


let signOut = document.querySelector(".sign-out")

let searchButton = document.getElementById("busquedaboton")

searchButton.addEventListener("click", async (e) => {
  e.preventDefault()
  let valorBuscado = document.getElementById("busquedainput").value
  let charactersContainer = document.querySelector(".cards-container")
  charactersContainer.innerHTML = ""
  if(valorBuscado===""){
    await obtenerPersonajes()
  }else{
  let personaje = await obtenerDetallePersonaje(valorBuscado)
  let personajes = []
  personajes.push(new Personaje(valorBuscado, personaje.name, personaje.title, personaje.rarity, personaje.vision))
  renderizarPersonajes(personajes)

  }

})


function cierreSesion(e){
  e.preventDefault()
  localStorage.removeItem("usuarioLogueado")
  window.location.href = "landing.html"
}

signOut.addEventListener("click", cierreSesion)