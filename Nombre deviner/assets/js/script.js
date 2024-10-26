const form_container    = document.querySelector(".form-container")
const btn_input         = form_container.btn
const text_input        = form_container.number
const instruction       = document.querySelector(".instructions")
const error             = document.querySelector(".error")
const nombre_deviner    = Math.floor(Math.random() * 100) + 1
// number of the random test
let n = 0

const createParagraphe = (text, color) => {
    instruction.style.display = "block"
    let paragraphe = document.createElement("p")
    paragraphe.textContent = text
    paragraphe.style.backgroundColor = color
    instruction.prepend(paragraphe)
    text_input.value = ""
}

form_container.addEventListener("submit", e => {
    e.preventDefault()
})
btn_input.addEventListener("click", () => {
    if(text_input.value === ""){
        text_input.style.border = "3px solid #ee3e4798"
    } else{
        text_input.style.border = ""
    }
})
text_input.addEventListener("input", e => {
    if((/[^0-9]/).test(e.target.value)){
        error.textContent = "Vous devez entrer un nombre"
    } else{
        error.textContent = ""
    }
})
btn_input.addEventListener("click", () => {
    if(text_input.value !== "" && !(/[^0-9]/).test(text_input.value)){
        n++
        if(nombre_deviner < parseInt(text_input.value)) {
            createParagraphe(`#${n} (${parseInt(text_input.value)}) C'est moins`, "#94a455")
        } else if(nombre_deviner > parseInt(text_input.value)){
            createParagraphe(`#${n} (${parseInt(text_input.value)}) C'est plus`, "#747a5f")
        } else{
            createParagraphe(`#${n} (${parseInt(text_input.value)}) Bravo vous avez trouve le juste prix !`, "#2c513d")
            text_input.disabled = true
        }
    }
})