const url = 'https://blockchain.info/ticker'

axios.get(url)
    .then(function(donnees){
        document.getElementById("price_label").textContent = donnees.data.EUR.last
    })
    .catch(function(erreur){
        console.log("Un problème est survenu");
    })
    .then(function(){
        console.log("mise à jour effectuée")
    })

setInterval(recupererPrix, 1000)