// function somme(nombre) {
//     if(nombre === 1) {
//         return 1
//     }
//     return nombre + somme(nombre - 1)
// }
// console.log(somme(5))

let monTableau = ['un', 'deux', 'trois']
// console.log(monTableau[monTableau.length - 1])
// Ajout d'une element dans un tableau .push && .unshift
monTableau.unshift("zero")
monTableau.push("quatre")
console.log(monTableau)
// supprimer un element dans un tableau .pop && .shift
monTableau.shift()
monTableau.pop()
// console.log(monTableau)
monTableau.splice(0, 0, "moins un")
monTableau

let monTableau2D = [
    ["Mark", "Jeff", "Bill"],
    ["Zuckerberg", "Bezos", "Gates"]
]
monTableau2D.splice(2, 0, ["30", "45", "70"])
monTableau2D

// console.log(monTableau2D[1][0])
// Ajout d'une element dans un tableau 2D .push && .unshift
monTableau2D[0].push("Adam")
monTableau2D[1].push("Smiph")
// console.log(monTableau2D[0])
// console.log(monTableau2D[1])
// supprimer un element dans un tableau 2D .pop && .shift
monTableau2D[0].pop()
// console.log(monTableau2D[0])
// console.log(monTableau2D[1])

let monTableauAssociatif = {
    "nom" : "Mark",
    "prenom" : "Zuckerberg",
    "poste" : "PDG de Facebook"
}
// console.log(monTableauAssociatif["nom"])
// Ajout d'une element dans un tableau associatif .push && .unshift
monTableauAssociatif["nationnalite"] = "Americain"
// console.log(monTableauAssociatif)
// supprimer un element dans un tableau associatif .pop && .shift
delete(monTableauAssociatif.poste)
console.log(monTableauAssociatif)