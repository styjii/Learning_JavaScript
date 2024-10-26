const changer = document.getElementById('changer')
const ville = document.getElementById('ville')

const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville.textContent
+ '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric'

async function meteo() {
    const requeste = await fetch(url, {
        method: 'GET'
    })
    if (!requeste.ok){
        alert('Il y a une erreur, veuillez rejoindre plus tard')
    } else{
        let donnees = await requeste.json()
        document.getElementById('ville').textContent = donnees
    }
}
setInterval(meteo, 1000)

changer.addEventListener('click', () => {
    let villeChoisie = prompt("Ecrire votre ville :")
    ville.textContent = villeChoisie
})