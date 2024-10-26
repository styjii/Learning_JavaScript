// class Animal {
//     constructor(numberOfhand, poids) {
//         this.numberOfhand = numberOfhand
//         this.poids = poids
//     }

//     presentation() {
//         return `This animal content ${this.numberOfhand} hand and it has ${this.poids}.`
//     }
// }
// class Oiseau extends Animal {
//     constructor(numberOfhand, old, sizeOfAils) {
//         super(numberOfhand, old)
//         this.sizeOfAils = sizeOfAils
//     }
// }

// var perroquet = new Oiseau(2, '1kg', 'big')

// console.log(perroquet.presentation())

class User {
    constructor(firstName, name, email) {
        this.firstName  = firstName
        this.name       = name
        this.email      = email
    }

    get completName() {
        return this.firstName + ' ' + this.name
    }

    set completName(value) {
        [this.firstName, this.name] = value.split(' ')
    }

    presentation() {
        `Hi, I'm ${this.firstName + ' ' + this.name}. You can contact with this email ${this.email}.`
    }
}

var mark = new User('Mark', 'Zuckerberg', 'mark@facebook.com')
console.log(mark.completName)
mark.completName = 'Bill Gate'
console.log(mark.completName)