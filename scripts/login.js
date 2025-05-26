function Player(username, email, password, favorites){
    this.username = username;
    this.email = email;
    this.password = password;
    this.favorites = favorites;
}

function Personaje(nombre, rareza, elemento, imagen, detalleUrl) {
  this.nombre = nombre ;
  this.rareza = rareza ;
  this.elemento = elemento ;
  this.imagen = imagen ;
  this.detalleUrl = detalleUrl ;
}

const personajesFavoritos = [
  new Personaje("Hu Tao", "Five star", "Pyro", "../assets/favorites/icon-hutao.jpg", "../pages/element.html"),
  new Personaje("Alhaitham", "Five star", "Dendro", "../assets/favorites/alhaitham-icon.jpg", "../pages/element.html"),
  new Personaje("Raiden Shogun", "Five star", "Electro", "../assets/favorites/raiden-icon.jpg", "../pages/element.html"),
  new Personaje("Tartaglia", "Five star", "Hydro", "../assets/favorites/tartaglia-icon.jpg", "../pages/element.html"),
  new Personaje("Nahida", "Five star", "Dendro", "../assets/favorites/nahida-icon.jpg", "../pages/element.html"),
  new Personaje("Barbara", "Four star", "Hydro", "../assets/favorites/barbara-icon.jpg", "../pages/element.html"),
  new Personaje("Albedo","Five star","Geo","../assets/favorites/albedo-icon.jpg","../pages/element.html"),

] ;

let players = []

players.push(new Player("Cata123", "cata@gmail.com", "000", personajesFavoritos))
players.push(new Player("Maria456", "maria@gmail.com", "111", personajesFavoritos))
