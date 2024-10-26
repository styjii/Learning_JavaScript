const url = 'https://blockchain.info/ticker'

function getPrice(){
    let request = new XMLHttpRequest()
    request.open("GET", url)
    request.responseType = 'json'
    request.send()
    request.onload = function (){
        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                let response = request.response
                document.getElementById("price_label").textContent = response.EUR.last
            }
            else {
                alert("Une erreur est survenu, revenir plus tard")
            }
        }
    }
}
setInterval(getPrice, 1000)