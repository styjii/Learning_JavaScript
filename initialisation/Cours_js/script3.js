// function bonjour(prenom) {
//     let resultat = "Bonjour " + prenom
//     let maClosure = () => console.log(resultat)
//     return maClosure
// }

// function bonjour_bin(prenom) {
//     let resultat = "Bonjour " + prenom
//     console.log(resultat)
// }
// bonjour_bin("Nirina")

// let moi = bonjour("styjii")
// moi()

function timer() {
    let second = 0
    let maClosure = () => {
        return ++second
    }
    return maClosure
}
let monTimer = timer()
console.log(monTimer());
console.log(monTimer());