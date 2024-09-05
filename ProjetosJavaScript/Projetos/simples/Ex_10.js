notas = [];
let nota = 0;
let notaTot = 0;
let mediaPonderada = 0;

do {
  nota = parseFloat(prompt("Digite o valor de uma nota (ou -1 para sair): "));
  if (nota != -1) {
    notas.push(nota);
  }
} while (nota != -1);

notas.forEach((element) => {
  notaTot += element;
});

if (notas.length > 0) {
  mediaPonderada = notaTot / notas.length;
  alert(`A média ponderada das notas digitadas é ${mediaPonderada}`);
} else {
  alert("Nenhuma nota válida foi digitada.");
}
