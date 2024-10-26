// Etape 1 : seletionner nos elements
const input         = document.getElementById("prix")
const error         = document.querySelector(".error")
const formulaire    = document.getElementById("formulaire")
const instructions   = document.querySelector(".instructions")
let coups           = 0
let nombre_choisi

// Etape 6 : Cree la fonction verifier
const verifier = nombre => {
    let text = ""
    let instruction = document.createElement("div")

    if(nombre < nombre_aleatoire) {
        text = "C'est plus"
        instruction.textContent = `#${coups} ( ${nombre} ) ${text}`
        instruction.classList.add("instruction", "plus")
    } else if(nombre > nombre_aleatoire) {
        text = "C'est moins"
        instruction.textContent = `#${coups} ( ${nombre} ) ${text}`
        instruction.classList.add("instruction", "moins")
    } else {
        text = "Felicitation vous avez trouver le juste prix !"
        instruction.textContent = `#${coups} ( ${nombre} ) ${text}`
        instruction.classList.add("instruction", "fini")
        input.disabled = true
    }

    // ajouter l'element devant les autres
    instructions.prepend(instruction)
}

// Etape 2 : cacher l'erreur
error.style.display = "none"

// Etape 3 : Generer un nombre aleatoire
const nombre_aleatoire = Math.floor(Math.random() * 1000) + 1

// Etape 4 : verifier que l'utilisateur donne bien un nombre
input.addEventListener("keyup", e => {
    if(isNaN(input.value)){
        error.style.display = "block"
    } else {
        error.style.display = "none"
    }
})

// Etape 5 : agir sur l'envoi du formulaire
formulaire.addEventListener("submit", e => {
    e.preventDefault()

    if(isNaN(input.value) || input.value === ""){
        input.style.borderColor = "red"
    } else {
        coups++
        input.style.borderColor = "silver"
        nombre_choisi = input.value
        input.value = ""
        verifier(nombre_choisi)
    }
})