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
  window.location.href = "../landing.html"
}

signOut.addEventListener("click", cierreSesion)

let resetBtn = document.querySelector(".reset-btn")

resetBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let usuarios = JSON.parse(localStorage.getItem("usuarios"))
    let usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"))
    let indexUsuarioLogueado = usuarios.findIndex((usuario) => usuario.username === usuarioLogueado.username)

    let newPassword = document.querySelector(".new-password").value
    usuarioLogueado.password = newPassword
    usuarios[indexUsuarioLogueado].password = newPassword

    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado))

    alert("Contraseña cambiada exitosamente!")
    
})






