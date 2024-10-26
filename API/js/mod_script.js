const url = "https://blockchain.info/ticker"

function createScript(script) {
    // create promide
    return new Promise((resolve, reject) => {
        // create une scipt
        const element = document.createElement("script")
        element.src = script
        document.head.append(element)
        // si resolve
        
        // si reject
    })
}

// async promise

// affiche le resultat