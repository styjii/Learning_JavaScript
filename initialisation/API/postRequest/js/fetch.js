const url = 'https://lesoublisdelinfo.com/api.php'

// let requete = new XMLHttpRequest()

// // POST
// requete.open("POST", url)
// requete.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
// requete.responseType = 'json'
// requete.send('prenom=John')

// requete.onload = function() {
//     if (requete.readyState === XMLHttpRequest.DONE) {
//         if (requete.status === 200) {
//             let reponse = requete.response
//             console.log(reponse)
//         } else {
//             alert('Un probleme est intervenu, merci de revenir plus tard')
//         }
//     }
// }

async function sendFirstName (firsName){
    const requete = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            prenom: firsName
        })
    })
    if (!requete.ok){
        alert('Un erreur est survenu')
    } else {
        let data = await requete.json()
        console.log(data)
    }
}
sendFirstName('Styj\'ii')