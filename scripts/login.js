

function Player(username, email, password, favorites){
    this.username = username;
    this.email = email;
    this.password = password;
    this.favorites = favorites;
}

function personaje(nombre, rareza, vision, imagen, detalleUrl) {
  this.nombre = nombre;
  this.rareza = rareza;
  this.vision = vision;
  this.imagen = imagen;
  this.detalleUrl = detalleUrl;
}

const personajesFavoritos = [
  new personaje("Hu Tao", "5 star", "Pyro", "../assets/favorites/icon-hutao.jpg", "../pages/element.html?id=1"),
  new personaje("Alhaitham", "5 star", "Dendro", "../assets/favorites/alhaitham-icon.jpg", "../pages/element.html?id=2"),
  new personaje("Raiden Shogun", "5 star", "Electro", "../assets/favorites/raiden-icon.jpg", "../pages/element.html?id=3"),
  new personaje("Tartaglia", "5 star", "Hydro", "../assets/favorites/tartaglia-icon.jpg", "../pages/element.html?id=4"),
  new personaje("Nahida", "5 star", "Dendro", "../assets/favorites/nahida-icon.jpg", "../pages/element.html?id=5"),
  new personaje("Barbara", "4 star", "Hydro", "../assets/favorites/barbara-icon.jpg", "../pages/element.html?id=6"),
  new personaje("Barbara", "4 star", "Hydro", "../assets/favorites/barbara-icon.jpg", "../pages/element.html?id=6")
];

let players = []

players.push(new Player("Cata123", "cata@gmail.com", "000", personajesFavoritos))
players.push(new Player("Maria456", "maria@gmail.com", "111", personajesFavoritos))

const loginForm = document.getElementById("loginForm")

function ingresarUsuario(e){
    e.preventDefault()
    const id = document.getElementById("username").value
    const password = document.getElementById("password").value

    const existeUsuario = players.find((usuario) => usuario.username === id || usuario.email === id)

    const indexUsuario = players.findIndex((usuario) => usuario.username === id || usuario.email === id)

    if (!existeUsuario) {
        alert("Usuario no existe, por favor registrarlo")
        loginForm.reset()
        return
    }
    if (existeUsuario.password !== password) {
        alert("La contraseña es incorrecta")
        loginForm.reset()
        return
    }

    window.location.href = "main.html?id=" + indexUsuario

}
loginForm.addEventListener("submit", ingresarUsuario)
