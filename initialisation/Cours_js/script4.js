let list1 = [
    {
        firstName   : "Noah",
        lastName    : "M.",
        pays        : "Suisse",
        contenant   : "Europe",
        age         : 19,
        langue      : "C",
        repas       : "Vegetarien"
    },
    {
        firstName   : "Anna",
        lastName    : "R.",
        pays        : "Liechtenstein",
        contenant   : "Europe",
        age         : 52,
        langue      : "JavaScript",
        repas       : "Standard"
    },
    {
        firstName   : "Ramona",
        lastName    : "R.",
        pays        : "Paraguay",
        contenant   : "Ameriques",
        age         : 29,
        langue      : "Ruby",
        repas       : "Vegan"
    },
    {
        firstName   : "George",
        lastName    : "B.",
        pays        : "Angleterre",
        contenant   : "Europe",
        age         : 81,
        langue      : "C",
        repas       : "Vegetarien"
    }
]

list1.forEach(choix => {
    let setRepas = new Set(choix.repas)
    setRepas
})