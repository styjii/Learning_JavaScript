function EtreVivants(type, age) {
    this.type = type
    this.age = age
}
EtreVivants.prototype.presentation = function() {
    return `Je suis une ${this.type} et j'ai deja ${this.age} an${this.age > 1 ? "s" : ""}`
}
// Humain (type, age / nom, prenom, travail, appartement)
function Humain(type, nom, prenom, age, travail, appartement, animal) {
    EtreVivants.call(this, type, age)
    this.nom = nom
    this.prenom = prenom
    this.travail = travail
    this.appartement = appartement
    this.animal = animal
}
Humain.prototype = Object.create(EtreVivants.prototype)
Humain.prototype.constructor = Humain

// Animal (type, age / race, vole, lieu)
function Animal(type, race, age, lieu, vole, proprietaire) {
    EtreVivants.call(this, type, age)
    this.race = race
    this.lieu = lieu
    this.vole = vole
    this.proprietaire = proprietaire
}
Animal.prototype = Object.create(EtreVivants.prototype)
Animal.prototype.constructor = Animal


// Appartement (type, classe, annee, lieu)
function Appartement(type, classe, annee, lieu) {
    this.type = type
    this.classe = classe
    this.annee = annee
    this.lieu = lieu
}

var chien = new Animal("chien", "Dog", 2, "Manjakaray", "False", true)
var appartementA = new Appartement("Rubrique", "Normal", "2020", "Manjakaray")
var moi = new Humain("Homme", "RHT", "Styj'ii", 23, "Developpeur Web",  appartementA, chien)

console.log(chien)
console.log(moi)