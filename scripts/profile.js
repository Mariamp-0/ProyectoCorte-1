//Llamar elementos del DOM

let contenedor = document.getElementsByClassName("contenedor");
let filaSuperior = document.getElementsByClassName("fila-superior");
let filaInferior = document.getElementsByClassName("fila-inferior");


const genshinCharacters = [
{
    name: "Raiden",
    vision: "Electro",
    stars: "5 star",
    imagen: '../favorites/raiden-icon.jpg',
    
}, 

{
    name: "HuTao",
    vision: "Pyro",
    stars: "5 star",
    imagen: '../favorites/icon-hutao.jpg',

}
   
] ;

index = 1

for (const genshinCharacter of genshinCharacters) {


    let personajeDiv = document.createElement('div'); //Padre de los elementos img,nombre,estrellas,vision,url

    let nombrePersonaje = document.createElement('h3');
    nombrePersonaje = genshinCharacter.name ;
    let estrellasPersonaje = document.createElement('p');
    estrellasPersonaje = genshinCharacter.stars;
    let visionPersonaje = document.createElement('p');
    visionPersonaje = genshinCharacter.vision ;
    let imagenPersonaje = document.createElement('img');
    imagenPersonaje.setAttribute("src",genshinCharacter.imagen);
    let botonDetalles = document.


    personajeDiv.id = "personaje" + index ;
    imagenPersonaje.id = "imagen" + index ;
    nombrePersonaje.id = "nombre" + index;
    estrellasPersonaje.id = "estrella" + index;
    visionPersonaje.id = "vision" + index ;

    personajeDiv.className = "personaje" ;
    personajeDiv.appendChild(imagenPersonaje);
    personajeDiv.appendChild(nombrePersonaje);
    personajeDiv.appendChild(estrellasPersonaje);
    personajeDiv.appendChild(visionPersonaje);

    contenedor.appendChild(personajeDiv);

    let imagen = document.createElement('img')
    imagen.setAttribute('src',digimon)
    div.appendChild(imagen)
    // let boton = document.createElement('button')
    // boton.innerText = "Eliminar Digimon"
    // // boton.addEventListener("click",function(e){
    // //     let elemento = e.target.parentElement
    // //     elemento.remove()
    // }) 


    div.append(boton)
    galeria.append(div)
}


for (let index = 0;index < 120; index++) {
    fetch("" + index).then(response => {
        
    })
    let digiApi = JSON.parse(response)
    createDigimon(digiApi.imagenes[0].img)

}






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

const seccionFavoritos = document.querySelector(".favoritos");
seccionFavoritos.innerHTML = ""; //limpiar las filas para evitar repeticiones

const contenedor = document.createElement("div");
contenedor.className = "contenedor";


let usarSuperior = true;
let filaActual = document.createElement("div");
filaActual.className = usarSuperior ? "fila-superior" : "fila-inferior";





for (let i = 0; i < personajesFavoritos.length; i++) {
  const personaje = personajesFavoritos[i];

  const divPersonaje = document.createElement("div");
  divPersonaje.className = "personaje";

  const fondoImg = document.createElement("div");
  fondoImg.className = "fondo-Img";

  const imgContenedor = document.createElement("div");

  imgContenedor.className = "Img-contenedor";

  const imagen = document.createElement("img");
  imagen.src = personaje.imagen;
  imagen.alt = personaje.nombre;
  imgContenedor.appendChild(imagen);


  const nombre = document.createElement("h3");
  nombre.textContent = personaje.nombre;


  const rareza = document.createElement("p");
  rareza.textContent = personaje.rareza;


  const elemento = document.createElement("p");
  elemento.textContent = personaje.elemento;


  const enlace = document.createElement("a");
  enlace.href = personaje.detalleUrl;
  enlace.textContent = "See details";


  fondoImg.appendChild(imgContenedor);
  
  fondoImg.appendChild(nombre);

  fondoImg.appendChild(rareza);

  fondoImg.appendChild(elemento);

  fondoImg.appendChild(enlace)

  divPersonaje.appendChild(fondoImg);


  filaActual.appendChild(divPersonaje);


  const esUltimo = i === personajesFavoritos.length - 1;
  const esTercero = (i + 1) % 3 === 0;



  if (esTercero || esUltimo) {
    contenedor.appendChild(filaActual);
    usarSuperior = !usarSuperior;
    filaActual = document.createElement("div");
    filaActual.className = usarSuperior ? "fila-superior" : "fila-inferior";
  }
}


seccionFavoritos.appendChild(contenedor);