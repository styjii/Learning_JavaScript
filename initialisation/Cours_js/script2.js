// const listeDePays = ["France", "Belgique", "Japon", "Maroc"]
// for(const pays of listeDePays){
//     pays
// }

// listeDePays.forEach(function(pays){
//     pays
// })

function AfficheTableauAssociative(tableau) {
    let chaine = ""
    for(const key in tableau) {
        chaine += key + " : " + tableau[key] + "\n"
    }
    return chaine
}
const monTableauAssociatif = {
    "nom" : "Mark",
    "prenom" : "Zuckerberg",
    "poste" : "PDG de Facebook"
}

console.log(AfficheTableauAssociative(monTableauAssociatif));