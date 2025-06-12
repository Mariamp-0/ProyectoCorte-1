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

let players = []

players.push(new Player("Cata123", "cata@gmail.com", "000", []))
players.push(new Player("Maria456", "maria@gmail.com", "111", []))



function personaje(nombre, titulo, rareza, vision, imagen, detalleUrl) {
  this.nombre = nombre;
  this.rareza = rareza;
  this.titulo = titulo;
  this.vision = vision;
  this.imagen = imagen;
  this.detalleUrl = detalleUrl;
}

const personajes = [
  new personaje("Albedo", "Kreideprinz" ,"5 star", "Pyro", "albedo.png", "../pages/element.html?id=1"),
  new personaje("Kaeya", "Frostwind Swordsman","5 star", "Dendro", "kaeya.jpg", "../pages/element.html?id=2"),
  new personaje("Jean", "Dandelion Knight", "5 star", "Electro", "jean.jpg", "../pages/element.html?id=3"),
  new personaje("Zhongli", "Vago Mundo", "5 star", "Hydro", "zhongli.jpeg", "../pages/element.html?id=4"),
  new personaje("Hu Tao", "Fragrance in Thaw", "5 star", "Dendro", "hu tao.jpeg", "../pages/element.html?id=5"),
  new personaje("Barbara", "Shining Idol", "4 star", "Hydro", "barbara.jpg", "../pages/element.html?id=6"),
  new personaje("Raiden Shogun", "Plane of Euthymia", "5 star", "Electro", "raiden.jpg", "../pages/element.html?id=3"),
  new personaje("Tartaglia", "Childe", "5 star", "Hydro", "tartaglia.jpg", "../pages/element.html?id=4"),
  new personaje("Ayato", "Pillar of Fortitude", "5 star", "Dendro", "ayato.jpg", "../pages/element.html?id=5"),
  new personaje("Diona", "Kätzlein Cocktail","5 star", "Dendro", "diona.jpg", "../pages/element.html?id=2"),
  new personaje("Diluc", "The Dark Side of Dawn","5 star", "Dendro", "diluc.jpg", "../pages/element.html?id=2"),
  new personaje("Cyno", "Judicator of Secrets","5 star", "Dendro", "cyno.jpg", "../pages/element.html?id=2"),
  new personaje("Dori", "Treasure of Dream Garden","5 star", "Dendro", "dori.jpg", "../pages/element.html?id=2"),
  new personaje("Nahida", "Physic of Purity","5 star", "Dendro", "nahida.jpg", "../pages/element.html?id=2"),
  new personaje("Alhaitham", "Admonishing Instruction","5 star", "Dendro", "alhaitham.jpg", "../pages/element.html?id=2")
];


let aProfile = document.getElementById("profile")

aProfile.addEventListener("click", (e) => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  e.preventDefault()
  window.location.href = "profile.html?id=" + id
})


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

    characterImage.src =  "../assets/main/" + personajes[i].imagen
    cardName.textContent = personajes[i].nombre
    cardName.className = "name"
    cardNickname.textContent = personajes[i].titulo
    cardNickname.className = "nickname"
    buttonFavorite.textContent = "Add to favorites"
    buttonFavorite.className = "favorite-card"
    buttonFavorite.id = i
    buttonDetails.textContent = "See details"
    buttonDetails.className = "details-card"
    buttonDetails.id = i


    buttonFavorite.addEventListener("click", (e) => {
      e.preventDefault()
      window.location.href = "favorites.html?id=" + buttonFavorite.id
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

renderizarPersonajes(personajes)


let signOut = document.querySelector(".sign-out")

function cierreSesion(e){
  e.preventDefault()
  localStorage.removeItem("usuarioLogueado")
  window.location.href = "landing.html"
}

signOut.addEventListener("click", cierreSesion)