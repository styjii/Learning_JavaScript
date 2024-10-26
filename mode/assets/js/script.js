const btn = document.getElementById('mode')
const span = btn.childNodes[1]


function modeSombre() {
    document.body.classList.add("dark")
    span.textContent = "Thème clair"
    localStorage.setItem("theme", "sombre")
}

if (localStorage.getItem("theme") && localStorage.getItem("theme") == "sombre"){
        modeSombre()
}
btn.addEventListener("click", () => {
    if (document.body.classList.contains("dark")){
        document.body.classList.remove("dark")
        span.textContent = "Thème sombre"
        localStorage.setItem("theme", "clair")
    } else{
        modeSombre()
    }
})