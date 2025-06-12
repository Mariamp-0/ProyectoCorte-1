function Player(username, email, password, favorites, image){
    this.username = username;
    this.email = email;
    this.password = password;
    this.favorites = favorites;
    this.image = image
}

function Personaje(nombre, rareza, vision, imagen, detalleUrl) {
  this.nombre = nombre;
  this.rareza = rareza;
  this.vision = vision;
  this.imagen = imagen;
  this.detalleUrl = detalleUrl;
}

const signupForm = document.getElementById("signupForm")

function randomImage(){
  let position = Math.floor(Math.random() * 7)
  return position
}
function registrarUsuario(e){
    e.preventDefault()
    const id = document.getElementById("username").value
    const email= document.getElementById("email").value
    const password= document.getElementById("password").value
    const confirmPassword = document.getElementById("confirmPassword").value

    let usuarios = localStorage.getItem("usuarios")
    let usuariosParse = []
    if (usuarios!= null) {
      usuariosParse = JSON.parse(usuarios)
    }

    const existeUsuario = usuariosParse.find((usuario) => usuario.username === id || usuario.email === email)
    
    if (existeUsuario) {
        alert("El usuario ya está registrado")
        registroForm.reset()
        return
    }

    if(password !== confirmPassword){
        alert("Las contraseñas no coinciden")
        registroForm.reset()
        return
    }

    usuariosParse.push(new Player(id, email, password, [], randomImage()))
    localStorage.setItem("usuarios", JSON.stringify(usuariosParse))
   
    alert("Usuario creado con éxito!!!")
    window.location.href = "login.html"
}

signupForm.addEventListener("submit", registrarUsuario)