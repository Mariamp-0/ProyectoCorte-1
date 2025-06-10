

function Player(username, email, password, favorites) {
  this.username = username;
  this.email = email;
  this.password = password;
  this.favorites = favorites;
}

function Personaje(nombre, rareza, vision, imagen, detalleUrl) {
  this.nombre = nombre;
  this.rareza = rareza;
  this.vision = vision;
  this.imagen = imagen;
  this.detalleUrl = detalleUrl;
}

const loginForm = document.getElementById("loginForm")

function ingresarUsuario(e) {
  e.preventDefault()
  const id = document.getElementById("username").value
  const password = document.getElementById("password").value

  let usuarios = localStorage.getItem("usuarios")
  let usuariosParse = []
  if (usuarios != null) {
    usuariosParse = JSON.parse(usuarios)
  }

  const existeUsuario = usuariosParse.find((usuario) => usuario.username === id || usuario.email === id)

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

  localStorage.setItem("usuarioLogueado", JSON.stringify(existeUsuario))

  window.location.href = "main.html"
}
loginForm.addEventListener("submit", ingresarUsuario)
