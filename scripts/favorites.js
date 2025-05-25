
// Modele una lista de favoritos dentro del objeto de
// usuarios, de modo que cada usuario tenga al menos 3 elementos favoritos fijos
// por ahora y que estos sean mostrados usando el DOM en esta sección.


//Constructor para personajes - Objetos

function personaje(nombre, rareza, elemento, imagen, detalleUrl) {
  this.nombre = nombre ;
  this.rareza = rareza ;
  this.elemento = elemento ;
  this.imagen = imagen ;
  this.detalleUrl = detalleUrl ;
}


//Dummies para favoritos

const personajesFavoritos = [
  new personaje("Hu Tao", "Five star", "Pyro", "../assets/favorites/icon-hutao.jpg", "../pages/element.html"),
  new personaje("Alhaitham", "Five star", "Dendro", "../assets/favorites/alhaitham-icon.jpg", "../pages/element.html"),
  new personaje("Raiden Shogun", "Five star", "Electro", "../assets/favorites/raiden-icon.jpg", "../pages/element.html"),
  new personaje("Tartaglia", "Five star", "Hydro", "../assets/favorites/tartaglia-icon.jpg", "../pages/element.html"),
  new personaje("Nahida", "Five star", "Dendro", "../assets/favorites/nahida-icon.jpg", "../pages/element.html"),
  new personaje("Barbara", "Four star", "Hydro", "../assets/favorites/barbara-icon.jpg", "../pages/element.html"),
  new personaje("Albedo","Five star","Geo","../assets/favorites/albedo-icon.jpg","../pages/element.html"),

] ;

