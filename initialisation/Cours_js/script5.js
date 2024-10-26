// let monMap = new Map([
//     ["nom", "Mark"],
//     ["prenom", "Zuckerberge"]
// ])
// monMap.set("poste", "PDG de Facebook")
// monMap.delete("poste")
// monMap

// // difference entre map et un tableauAssociative
// const utilisateur = new Map()
// utilisateur.set("Mark Zuckerberg", {
//     "email" : "mark@gmail.com",
//     "poste"  : "PDG"
// })
// utilisateur.set("Platon", {
//     "email" : "platon@gmail.com",
//     "poste" : "Phylosophe"
// })
// utilisateur

// function addition(...nombres) {
//     let resultat = 0
//     nombres.forEach(nombre => {
//         resultat += nombre
//     })
//     resultat
// }
// addition(4, 9, 5, 415, 78, 54)


// function addition(...nombres) {
//     let resultat = 0
//     nombres.forEach(nombre => {
//         resultat += nombre
//     })
//     return resultat
// }

let utilisateur = 0, somme = 0
do {
    utilisateur = Number(prompt("Entrer vos nombre et Ok si on continue\nEt annuler si terminer"))
    somme += utilisateur
}while(utilisateur != 0)

// alert(addition(somme))

alert(somme)