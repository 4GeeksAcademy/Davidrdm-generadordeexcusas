// window.onload = function() {};
let buttonGenerator = document.querySelector(".buttonGenerator");
buttonGenerator.addEventListener("click", function() {
  // array with the words
  let article = ["El", "Mi"];
  let adj = ["rojo", "divertido", "locura", "luminoso", "brillante"];
  let noun = ["conductor", "coche", "carretera", "paisaje", "perro"];
  let action = ["tocarme", " robarme", "trabajar", "conducir", " limpiar"];
  let possetion = [
    "Mi garaje",
    "mi trabajo",
    "mi casa",
    "mi jardin",
    "mi calle",
    "mi vecino",
    "mi perro"
  ];
  let where = [
    "en mi calle",
    "en mi jardin",
    "en mi camino",
    "cerca de la estacion de bus",
    " enfrente de la oficina"
  ];

  // declaring random varibles
  let numarticle = Math.floor(Math.random() * article.length);
  let numadj = Math.floor(Math.random() * adj.length);
  let numnoun = Math.floor(Math.random() * noun.length);
  let numaction = Math.floor(Math.random() * action.length);
  let numpossetion = Math.floor(Math.random() * possetion.length);
  let numwhere = Math.floor(Math.random() * where.length);

  let textExcuse = document.querySelector(".textExcuse");

  if (numarticle == 0) {
    if (numnoun == 1) {
      numarticle = 1;
    }
  }
  // creating a sentences (textExcuse)

  textExcuse.innerHTML = `${article[numarticle]} ${adj[numadj]} ${noun[numnoun]} ${action[numaction]} ${possetion[numpossetion]} ${where[numwhere]}`;
});
