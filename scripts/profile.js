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