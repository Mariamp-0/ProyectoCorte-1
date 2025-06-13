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

//Constructor
function Personaje (nombre, descripcion, rareza, imagenSplash, imagenRetrato, titulo, vision, nacion, 
    arma, constelacion, afiliacion, lanzamiento, habilidades,imagenFondo) {
  this.nombre = nombre;
  this.descripcion = descripcion;
  this.rareza = rareza;
  this.imagenSplash = imagenSplash;
  this.imagenRetrato = imagenRetrato;
  this.titulo = titulo;
  this.vision = vision;
  this.nacion = nacion;
  this.arma = arma;
  this.constelacion = constelacion;
  this.afiliacion = afiliacion;
  this.lanzamiento = lanzamiento;
  this.habilidades = habilidades;
  this.imagenFondo = imagenFondo ;
}



//Filtrar el personaje para mostrar su información

function renderizarElemento() {

  const nombreSeleccionado = localStorage.getItem ("nombrePersonaje");
const personaje = personajes.find(p => p.nombre === nombreSeleccionado);

if (personaje) {
  const titulo = document.querySelector(".personaje-general h1");
  const descripcion = document.querySelector(".personaje-general p"); 
  const estrellas = document.querySelector(".personaje-general strong")


  if (titulo) titulo.textContent = personaje.nombre;
  if (descripcion) descripcion.textContent = personaje.descripcion;

  if (estrellas) {

    estrellas.innerHTML = "";
    estrellas.append("Rarity:");

    const rareza = personaje.rareza.toLowerCase();
    const cantidadEstrellas = rareza === "five star" ? 5 : rareza === "four star" ? 4 : 0 //Muestra las estrellas , 4 o 5

    for (let i = 0; i < cantidadEstrellas; i++) {
      const estrella = document.createElement("i");
      estrella.className = "bx bxs-star";
      estrellas.appendChild(estrella);
      
    
    }
  }

  const imgSplash = document.querySelector(".img-personaje");
  if (imgSplash) {
    imgSplash.src = personaje.imagenSplash;
    imgSplash.alt = personaje.nombre;
  }

  const imgRetrato = document.querySelector(".personaje-portrait img");
  if (imgRetrato) {
    imgRetrato.src = personaje.imagenRetrato;
    imgRetrato.alt = `${personaje.nombre} retrato`;
  }

  const columnasIzquierda = document.querySelectorAll(".columna-izquierda h4");

  if (columnasIzquierda.length >= 4) {

    columnasIzquierda[0].textContent = personaje.nombre;
    columnasIzquierda[1].textContent = personaje.titulo;
    columnasIzquierda[2].textContent = personaje.vision;
    columnasIzquierda[3].textContent = personaje.nacion;
  }

  const columnasDerecha = document.querySelectorAll(".columna-derecha h4");

  if (columnasDerecha.length >= 4) {

    columnasDerecha[0].textContent = personaje.arma;
    columnasDerecha[1].textContent = personaje.constelacion;
    columnasDerecha[2].textContent = personaje.afiliacion;
    columnasDerecha[3].textContent = personaje.lanzamiento;
  }

  const habilidadesContenedor = document.querySelector(".abilities-group");

  if (habilidadesContenedor) {
    habilidadesContenedor.innerHTML = "";
    personaje.habilidades.forEach(habilidad => {

      const div = document.createElement("div");

      div.className = "ability";
      div.innerHTML = `
        <img src="${habilidad.imagen}" alt="${habilidad.tipo}">
        <p>${habilidad.tipo}</p>
      `;
      habilidadesContenedor.appendChild(div);

    });
  }
}

}



let signOut = document.querySelector(".sign-out")

function cierreSesion(e){
  e.preventDefault()
  localStorage.removeItem("usuarioLogueado")
  window.location.href = "landing.html"
}

signOut.addEventListener("click", cierreSesion)