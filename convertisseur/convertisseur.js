function convertir() {
  let valeur = parseFloat(document.getElementById("valeur").value);
  let uniteDe = document.getElementById("uniteDe").value;
  let uniteVers = document.getElementById("uniteVers").value;
  let resultat = 0;

  if (isNaN(valeur)) {
    document.getElementById("resultat").innerText = "⚠️ Entrez une valeur valide";
    return;
  }

  // Conversion en mètres d'abord
  switch (uniteDe) {
    case "km":
      valeur = valeur * 1000;
      break;
    case "cm":
      valeur = valeur / 100;
      break;
    case "m":
    default:
      break;
  }

  // Conversion vers l’unité choisie
  switch (uniteVers) {
    case "km":
      resultat = valeur / 1000;
      break;
    case "cm":
      resultat = valeur * 100;
      break;
    case "m":
    default:
      resultat = valeur;
      break;
  }

  document.getElementById("resultat").innerText = `Résultat : ${resultat} ${uniteVers}`;
}