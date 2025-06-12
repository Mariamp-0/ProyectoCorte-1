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
function Player(username, email, password, favorites, image){
    this.username = username;
    this.email = email;
    this.password = password;
    this.favorites = favorites;
    this.image = image
}

function Personaje(nombre,titulo, rareza, vision, imagen, detalleUrl) {
  this.nombre = nombre;
  this.rareza = rareza;
  this.titulo = titulo;
  this.vision = vision;
  this.imagen = imagen;
  this.detalleUrl = detalleUrl;
}

function renderizarProfile() {

    let infoPerfil = JSON.parse(localStorage.getItem("usuarioLogueado"))
    let usernameLeft = document.getElementById("usernameLeft")
    let amountFavorites = document.getElementById("amountFavorites")
    let username = document.getElementById("username")
    let email = document.getElementById("email")
    let image = document.getElementById("image")

    image.src = "../assets/profile-images/"+infoPerfil.image+".jpg"
    amountFavorites.innerText = infoPerfil.favorites.length
    username.innerText = infoPerfil.username
    usernameLeft.innerText = "@"+ infoPerfil.username
    email.innerText = infoPerfil.email
}

renderizarProfile()


let signOut = document.querySelector(".sign-out")

function cierreSesion(e){
  e.preventDefault()
  localStorage.removeItem("usuarioLogueado")
  window.location.href = "landing.html"
}

signOut.addEventListener("click", cierreSesion)

let resetBtn = document.querySelector(".reset-btn")

resetBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    let newPassword = document.querySelector(".new-password").value
    players[id].password = newPassword

    alert("Contraseña cambiada exitosamente!")
    
})






