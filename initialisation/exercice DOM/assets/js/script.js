// delete de div
document.getElementById("a-supprimer").remove()

// header
const header = document.createElement("header")
const h1 = document.createElement("h1")
h1.textContent = "Bienvenue"
header.append(h1)
document.body.appendChild(header)

// sous_header
const sous_header = document.createElement("div")
const a1 = document.createElement("a")
a1.href = "#"
a1.textContent = "Acceuil"
const a2 = document.createElement("a")
a2.href = "#"
a2.textContent = "Une autre page"
const span = document.createElement("span")
span.textContent = "/"

sous_header.appendChild(a1)
sous_header.appendChild(span)
sous_header.appendChild(a2)
document.body.appendChild(sous_header)

// paragraphe
const paragraphe = document.createElement("p")
paragraphe.textContent = "Ceci est un paragraphe crée avec JavaScript"
document.body.appendChild(paragraphe)

// style de balise
document.body.style.padding = "0"
document.body.style.margin = "0"

header.style.padding = "40px 0"
header.style.backgroundColor = "#e3b04b"

h1.style.margin = "0"
h1.style.textAlign = "center"
h1.style.color = "#fff"
h1.style.fontFamily = "Arial"

sous_header.style.background = "#f1d6ab"
sous_header.style.padding = "20px"
a1.style.fontSize = "1.2em"
a2.style.fontSize = "1.2em"
span.style.fontSize = "1.5em"
span.style.padding = "0 8px"

paragraphe.style.fontSize = "1.2em"
paragraphe.style.padding = "0 50px"