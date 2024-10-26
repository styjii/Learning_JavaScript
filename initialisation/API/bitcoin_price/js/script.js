const url = 'https://blockchain.info/ticker'

function recupererPrix() {
    // cree une requete
    let requete = new XMLHttpRequest() // cree un object

    requete.open('GET', url)    // Premier parametre GET / POST
                                // Deuxieme parametre : url
    requete.responseType = 'json' // Nous attendons du JSON
    requete.send() // Nous envoyons notre requete

    // Dees qu'on recoit une reponse, cette fonction est executee
    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) { // verifier si la requete est terminer
            if (requete.status === 200) { // verifier s'il n'est pas d'erreur
                let reponse = requete.response // on stocke la reponse
                let prixEnEuro = reponse.EUR.last
                document.getElementById('price_label').textContent = prixEnEuro
            } else {
                alert("Un probleme est intervenu, merci de revenir plus tard.")
            }
        }
    }
}
setInterval(recupererPrix, 1000)