let choix, premierNombre, deuxiemeNombre, resultat;
// Function addition
function addition(nombreA, nombreB) {
    return nombreA + nombreB
}

// Function multiplication
function multiplication(nombreA, nombreB) {
    return nombreA * nombreB
}

// Function soustraction
function soustraction(nombreA, nombreB) {
    return nombreA - nombreB
}

//Function division
function division(nombreA, nombreB) {
    if(nombreB == 0) {
        throw new Error("Impossible de diviser par 0")
    }
    return nombreA / nombreB
}
do {
    choix = parseInt(prompt("Que souhaitez-vous faire ?\n\n" +
        "1 - Addition\n" +
        "2 - Multiplication\n" +
        "3 - Soustraction\n" +
        "4 - Division"))
} while(choix < 1 || choix > 4 || isNaN(choix))

do {
    premierNombre = parseFloat(prompt("Vos premier nombre :"))
    deuxiemeNombre = parseFloat(prompt("Vos deuxieme nombre :"))
} while (isNaN(deuxiemeNombre) || isNaN(deuxiemeNombre))

try {
    switch(choix) {
        case 1 :
            resultat = addition(premierNombre, deuxiemeNombre)
            break
        case 2 :
            resultat = multiplication(premierNombre, deuxiemeNombre)
            break
        case 3 :
            resultat = soustraction(premierNombre, deuxiemeNombre)
            break
        case 4 :
            resultat = division(premierNombre, deuxiemeNombre)
            break
        default :
            throw new Error("Une erreur est survenue")
    }
    alert("Le resultat est " + resultat)
} catch (error) {
    alert(error)
}