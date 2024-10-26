if(localStorage.getItem("prenom")){
    document.body.append("Bonjour ", localStorage.getItem("prenom"))
} else{
    let prenom = prompt("Quelle est votre prenom ?")
    localStorage.setItem("prenom", prenom)
    document.body.append('Bonjour ' + prenom)
}
// localStorage.clear()