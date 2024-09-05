let numTabuada = prompt("Digite um número para fazer sua tabuada")
let conta = null

for(let i=0; i<=10; i++) {
    conta = numTabuada*i
    alert(`O número ${numTabuada} vezes ${i} é ${conta}`)
}

//forma aprimorada
let numTabuada2 = prompt("Digite um número para fazer sua tabuada");
let inicio = prompt("Digite o número inicial do intervalo");
let fim = prompt("Digite o número final do intervalo");

if (isNaN(numTabuada) || isNaN(inicio) || isNaN(fim)) {
  alert("Erro: Um ou mais valores inválidos digitados.");
} else {
  for (let i = inicio; i <= fim; i++) {
    let conta = numTabuada * i;
    alert(`O número ${numTabuada} vezes ${i} é ${conta}`);
  }
}
