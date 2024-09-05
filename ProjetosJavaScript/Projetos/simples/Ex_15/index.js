const text = document.getElementById("paragrafo");
const button = document.getElementById("adicClique");
let contClique = 0;

button.addEventListener("click", function () {
  contClique++;
  text.innerText = `Quantidade de cliques: ${contClique}`;
});
