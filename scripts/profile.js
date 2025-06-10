//Verificar si existe sesion
if (localStorage.getItem("usuarioLogueado") === null) {
  window.location.href = "login.html"
}

function Player(username, email, password, favorites){
    this.username = username;
    this.email = email;
    this.password = password;
    this.favorites = favorites;
}

function personaje(nombre,titulo, rareza, vision, imagen, detalleUrl) {
  this.nombre = nombre;
  this.rareza = rareza;
  this.titulo = titulo;
  this.vision = vision;
  this.imagen = imagen;
  this.detalleUrl = detalleUrl;
}

const personajesFavoritos = [
  new personaje("Albedo", "Kreideprinz" ,"5 star", "Pyro", "albedo.png", "../pages/element.html?id=1"),
  new personaje("Kaeya", "Frostwind Swordsman","5 star", "Dendro", "kaeya.jpg", "../pages/element.html?id=2"),
  new personaje("Jean", "Dandelion Knight", "5 star", "Electro", "jean.jpg", "../pages/element.html?id=3"),
  new personaje("Zhongli", "Vago Mundo", "5 star", "Hydro", "zhongli.jpeg", "../pages/element.html?id=4"),
];

let players = []

players.push(new Player("Cata123", "cata@gmail.com", "000", personajesFavoritos))
players.push(new Player("Maria456", "maria@gmail.com", "111", personajesFavoritos))

function renderizarProfile() {

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    let usernameLeft = document.getElementById("usernameLeft")
    let amountFavorites = document.getElementById("amountFavorites")
    let username = document.getElementById("username")
    let email = document.getElementById("email")

    usernameLeft.innerText = players[id].username
    amountFavorites.innerText = players[id].favorites.length
    username.innerText = players[id].username
    email.innerText = players[id].email
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






