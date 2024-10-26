const url = 'https://blockchain.info/ticker'

async function recupererPrix (){
    const requete = await fetch(url, {
        method: 'GET'
    })
    if (!requete.ok){
        alert('Une erreur est survenu !')
    } else {
        let donnees = await requete.json()
        document.getElementById('price_label').textContent = donnees.EUR.last
    }
}
setInterval(recupererPrix, 1000)