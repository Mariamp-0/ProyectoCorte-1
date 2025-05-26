
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

//Dummy

const personajes = [
  new Personaje(
    "Hu Tao",
    "The 77th Director of the Wangsheng Funeral Parlor. She took over the business at a rather young age.",
    "five star",
    "../assets/element/Hu-tao-Splah.jpg",
    "../assets/element/Hutao-portrait.jpg",
    "Fragrance in Thaw",
    "Pyro",
    "Liyue",
    "Polearm",
    "Papilio Charontis",
    "Funeraria Wangsheng",
    "2021-03-02",
    [
      { imagen: "../assets/element/burst-hutao.jpg", tipo: "Burst" },
      { imagen: "../assets/element/normal-hutao.jpg", tipo: "Normal" },
      { imagen: "../assets/element/passive-hutao.jpg", tipo: "Passive" },
      { imagen: "../assets/element/skill-hutao.jpg", tipo: "Skill" }
    ]
  ),
  new Personaje(
    "Alhaitham",
    "The current scribe of the Sumeru Akademiya, a man endowed with extraodinary intelligence and talent. He lives free — free from the searching eyes of ordinary people, anyway.",
    "five star",
    "../assets/element/alhaitham-splash.jpg",
    "../assets/element/alhaitham-portrait.jpg",
    "Admonishing Instruction",
    "Dendro",
    "Sumeru",
    "Sword",
    "Vultur Volans",
    "Akademiya de Sumeru",
    "2023-01-18",
    [
      { imagen: "../assets/element/normal-alhaitham.jpg", tipo: "Normal" },
      { imagen: "../assets/element/skill-alhaitham.jpg", tipo: "Skill" },
      { imagen: "../assets/element/burst-alhaitham.jpg", tipo: "Burst" },
      { imagen: "../assets/element/passive-alhaitham.jpg", tipo: "Passive" }
    ]
  ),
  new Personaje(
    "Raiden Shogun",
    "Her Excellency, the Almighty, Narukami Ogosho, who promised the people of Inazuma an unchanging Eternity.",
    "five star",
    "../assets/element/raiden-splash.jpg",
    "../assets/element/raiden-portrait.jpg",
    "IPlane of Euthymia",
    "Electro",
    "Inazuma",
    "Polearm",
    "Imperatrix Umbrosa",
    "Inazuma City",
    "2021-09-01",
    [
      { imagen: "../assets/element/normal-raiden.jpg", tipo: "Normal" },
      { imagen: "../assets/element/skill-raiden.jpg", tipo: "Skill" },
      { imagen: "../assets/element/burst-raiden.jpg", tipo: "Burst" },
      { imagen: "../assets/element/passive-raiden.jpg", tipo: "Passive" }
    ]
  ),
  
];


//Filtrar el personaje para mostrar su información

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


