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

//Constructor de personajes
function Personaje(nombre, rareza, vision, imagen, detalleUrl) {
  this.nombre = nombre;
  this.rareza = rareza;
  this.vision = vision;
  this.imagen = imagen;
  this.detalleUrl = detalleUrl;
}

//Dummy

const personajesFavoritos = [
  new Personaje("Hu Tao", "5 star", "Pyro", "../assets/favorites/icon-hutao.jpg", "../pages/element.html"),
  new Personaje("Alhaitham", "5 star", "Dendro", "../assets/favorites/alhaitham-icon.jpg", "../pages/element.html"),
  new Personaje("Raiden Shogun", "5 star", "Electro", "../assets/favorites/raiden-icon.jpg", "../pages/element.html")
];

//Renderizado de favoritos

const seccionFavoritos = document.querySelector(".favoritos");
if (seccionFavoritos) {
  seccionFavoritos.innerHTML = '<div class="contenedor"></div>';
  const contenedor = seccionFavoritos.querySelector(".contenedor")
  
  //Agrega tres personajes por fila y crea la tarjeta de personaje
  for (let i = 0; i < personajesFavoritos.length; i += 3) {
    const fila = document.createElement("div");
    fila.className = "fila-superior"; 
    

    const personajesFila = personajesFavoritos.slice(i, i + 3);
    personajesFila.forEach(p => {
      fila.innerHTML += `
        <div class="personaje">
          <div class="fondo-Img">
            <div class="Img-contenedor">
              <img src="${p.imagen}" alt="${p.nombre}">
            </div>
            <h3>${p.nombre}</h3>
            <p>${p.rareza}</p>
            <p>${p.vision}</p>
            <a href="${p.detalleUrl}" class="detalle-link">See details</a>
          </div>
        </div>
      `;
      });
    contenedor.appendChild(fila)
  }

  // Añade eventListener para conectar cada tarjeta con el element.html que muestra su información respectiva
  const enlaces = document.querySelectorAll('.personaje a');

  enlaces.forEach((enlace, index) => {
    enlace.addEventListener('click', function(e) {
      e.preventDefault()
      
      const personaje = personajesFavoritos[index]

      localStorage.setItem('nombrePersonaje', personaje.nombre)

      window.location.href = personaje.detalleUrl;

    })
  });
}

let signOut = document.querySelector(".sign-out")

function cierreSesion(e){
  e.preventDefault()
  localStorage.removeItem("usuarioLogueado")
  window.location.href = "landing.html"
}

signOut.addEventListener("click", cierreSesion)


      


