function Author(image, name, location, profession, field){
    this.image = image;
    this.name = name;
    this.location = location;
    this.profession = profession;
    this.field = field;
}
let authors = []

authors.push(new Author("../assets/landing/user1.jpeg", "Catalina Núñez", "Cali, Colombia",
"Interaction Media Designer", "Design and Programming"))

authors.push(new Author("../assets/landing/user2.jpeg", "Maria Paula Mejía", "Cali, Colombia",
"Interaction Media Designer", "Design and Programming"))

let aboutUs = document.querySelector(".info-about-us")

for(let i= 0; i < authors.length; i++){
    let authorContent = document.createElement("div")
    let authorImage = document.createElement("img")
    let authorName = document.createElement("p")
    let authorLocation = document.createElement("p")
    let authorProfession = document.createElement("p")
    let authorField = document.createElement("p")

    authorImage.src = authors[i].image
    authorName.textContent = authors[i].name
    authorName.className = "name"
    authorLocation.textContent = authors[i].location
    authorProfession.textContent = authors[i].profession
    authorField.textContent = authors[i].field
    authorContent.className = "about-us-author"

    authorContent.appendChild(authorImage)
    authorContent.appendChild(authorName)
    authorContent.appendChild(authorLocation)
    authorContent.appendChild(authorProfession)
    authorContent.appendChild(authorField)

    aboutUs.appendChild(authorContent)

}


let joinNowButton = document.querySelector(".join-btn")
let loginButton = document.querySelector(".login-boton")

joinNowButton.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "login.html"
})

loginButton.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "login.html"
})

