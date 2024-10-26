const url = 'https://lesoublisdeinfo.com/api.php'

async function sendRequest(prenom) {
    const request = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            prenom
        })
    })
    
    if (!request.ok){
        console.error("Un problème est survenue")
    } else {
        let donnees = await request.json()
        console.log(donnees)
    }
}

sendRequest('Pierre')