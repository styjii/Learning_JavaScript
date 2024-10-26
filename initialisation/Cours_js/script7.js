// Animal (nombreDePattes, poids)
function Animal(nombreDePattes, poids) {
    this.nombreDePattes = nombreDePattes
    this.poids          = poids
}
Animal.prototype.presentation = function() {
    console.log(`Cette annimale possede ${this.nombreDePattes} pattes et fait ${this.poids}.`)
}

// Oiseau (nombreDePattes, poids / longueurDesAiles)
function Oiseau(nombreDePattes, poids, longueurDesAiles) {
    Animal.call(this, nombreDePattes, poids)
    this.longueurDesAiles = longueurDesAiles
}
Oiseau.prototype = Object.create(Animal.prototype)
Oiseau.prototype.constructor = Oiseau

// Mamifere (nombreDePattes, poids / typeDePoils)
function Mamifere(nombreDePattes, poids, typeDePoils) {
    Animal.call(this, nombreDePattes, poids)
    this.typeDePoils = typeDePoils
}
Mamifere.prototype = Object.create(Animal.prototype)
Mamifere.prototype.constructor = Mamifere

var perroquet   = new Oiseau(2, "1kg", "grande")
var vache       = new Mamifere(4, "80kg", "lisse")

console.log(perroquet)
console.log(vache)
perroquet.presentation()