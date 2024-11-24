function rechercherMotDePasse(listeMots, motDePasse) {
    // Vérifie si le mot de passe est présent dans la liste de mots
    if (listeMots.includes(motDePasse)) {
        return "Mot de passe trouvé : " + motDePasse;
    } else {
        return "Mot de passe non trouvé";
    }
}

// Exemple d'utilisation
const listeMots = ["zied", "1999", "klibia", "taraji", "est"];
const motDePasse = "klibia";

// Recherche du mot de passe
const resultat = rechercherMotDePasse(listeMots, motDePasse);
console.log(resultat);
