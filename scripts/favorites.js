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

function Personaje(nombre, rareza, vision, imagen, detalleUrl, borrar, id) {
  this.nombre = nombre;
  this.rareza = rareza;
  this.vision = vision;
  this.imagen = imagen;
  this.detalleUrl = detalleUrl;
  this.borrar = borrar;
  this.id = id;

}

//Información del usuario desde local storage

let usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
let usuarios = JSON.parse(localStorage.getItem("usuarios"))


//Función para renderizar favoritos

function renderizarFavoritos() {
  const seccionFavoritos = document.querySelector(".favoritos");
  if (!seccionFavoritos) return



  seccionFavoritos.innerHTML = '<div class="contenedor"></div>';
  const contenedor = seccionFavoritos.querySelector(".contenedor");


  const favoritos = usuarioLogueado.favorites


//Traer la información desde la API

  const promesas = favoritos.map(p => {

    const url = `https://genshin.jmp.blue/characters/${p.id}`;
    
    return fetch(url)

      .then(res => res.json())

      .then(data => {
        const imagen = `https://genshin.jmp.blue/characters/${p.id}/icon-big`

        return new Personaje(
          data.name,
          data.rarity,
          data.vision,
          imagen,
          "../pages/element.html",
          false,
          p.id )

      })

  })


  Promise.all(promesas).then(personajes => {
    personajes = personajes.filter(p => p !== null);


    if (personajes.length === 0) {
      contenedor.innerHTML = "<p>No se pudo cargar ningún personaje</p>"; //Si la lista del usuario esta vacia
      return;
    }


    for (let i = 0; i < personajes.length; i += 3) {
      const fila = document.createElement("div"); 
      fila.className = "fila-superior";

      
      const filaPersonajes = personajes.slice(i, i + 3); //Tres personajes por fila
      filaPersonajes.forEach(p => {
        fila.innerHTML += `
          <div class="personaje">
            <div class="fondo-Img">
              <div class="Img-contenedor">
                <img src="${p.imagen}" alt="${p.nombre}">
              </div>
              <h3>${p.nombre}</h3>
              <p>${p.rareza} star</p>
              <p>${p.vision}</p>
              <a href="${p.detalleUrl}" class="detalle-link" data-name="${p.nombre}">See details</a>
              <button class="btn_eliminar" data-id="${p.id}">Remove</button>
            </div>
          </div>
        `
      });

      contenedor.appendChild(fila);
    }

  // Añade eventListener para conectar cada tarjeta con el element.html que muestra su información respectiva

    document.querySelectorAll(".detalle-link").forEach(enlace => {
      enlace.addEventListener("click", function (e) {
        e.preventDefault();

        const nombre = e.target.dataset.name;
        localStorage.setItem("nombrePersonaje", nombre);

        window.location.href = "../pages/element.html";
      });
    });

  });

}


let signOut = document.querySelector(".sign-out")

function cierreSesion(e){
  e.preventDefault()
  localStorage.removeItem("usuarioLogueado")
  window.location.href = "landing.html"
}

signOut.addEventListener("click", cierreSesion)

renderizarFavoritos();