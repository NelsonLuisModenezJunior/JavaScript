let listaDeFrutas = ["Maça", "Banana", "Limão"];
let numeros = [1, 9, 10, false, true, "7"];
let frutas = ["Goiaba", "Acerola", "Manga", "Abacate", "Pêssego"];
const numeros2 = [15, 11, 3, 7, 8, 10, 14, 1];
const pessoas = [
  { id: 100, nome: "Júnior", idade: 18 },
  { id: 101, nome: "Neto", idade: 18 },
  { id: 102, nome: "Pedro", idade: 22 },
  { id: 103, nome: "Alex", idade: 17 },
  { id: 104, nome: "Andrey", idade: 18 },
];
const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(listaDeFrutas);
console.log(numeros);

console.log(listaDeFrutas[0]); //exibe o valor maça

listaDeFrutas[1] = "Laranja";

console.log(listaDeFrutas);

listaDeFrutas.push("Uva"); //adiciona elementos no fim do array
console.log(listaDeFrutas);

listaDeFrutas.pop(); //remove o último elemento do array
console.log(listaDeFrutas);

listaDeFrutas.shift(); //remove o primeiro elemento do array
console.log(listaDeFrutas);

listaDeFrutas.unshift("Pitaya"); //adiciona elementos no começo do array
console.log(listaDeFrutas);

let novoArray = listaDeFrutas.concat(numeros); //combina dois ou mais arrays em um
console.log(novoArray);

let listaEmTexto = novoArray.join("e também"); //junta os elementos em uma string
console.log(novoArray);
console.log(listaEmTexto);

let resultado = listaEmTexto.split(" e "); //divide uma String em uma lista de subStrings e retorna um array
console.log(resultado);

const duasPrimeiras = frutas.slice(0, 2); //retorna uma cópia de um pedaço do array
console.log(frutas);
console.log(duasPrimeiras);

frutas.splice(2, 2, "Açaí"); //altera o conteúdo de um aray, adicionando, removendo ou substituindo elementos
console.log(frutas);

function mostrarElementos(elementoAtual, indiceAtual, arrayCompleto) {
  console.log(`O elemento no índice ${indiceAtual} é ${elementoAtual}`);
}

numeros2.forEach(mostrarElementos()); //executa uma função para cada elemento do array

function paraCada(array, funcaoParaExecutar) {
  for (let i = 0; i < array.lenght; i++) {
    funcaoParaExecutar(array[i], i, array);
  }
}
paraCada(numeros2, mostrarElementos());

const dobroDosNumeros2 = numeros2.map(function (
  elementoAtual,
  indiceAtual,
  arrayOriginal
) {
  console.log(`O elemento no índice: ${indiceAtual} é ${elementoAtual}`);
  return {
    dobro: elementoAtual * 2,
    metade: elementoAtual / 2,
    valorOriginal: elementoAtual,
  };
}); //cria um novo array com os resultados da aplicação de uma mesma função a cada elemento do array original

console.log(dobroDosNumeros2);

const numeros2Pares = numeros2.filter(function (elementoAtual) {
  return elementoAtual % 2 === 0;
}); //cria um novo array com todos os elementos que passam em um teste especificado por uma função

let idadeMaxima = parseFloat(prompt("Escolha uma idade máxima: "));

const pessoasDentroLimite = pessoas.filter(function (pessoa) {
  return pessoa.idade <= idadeMaxima;
});
console.log(pessoasDentroLimite);

let idadePesquisada = parseFloat(prompt("Pesquisar por nome: "));

const idadeEncontrada = pessoas.find(function (pessoa) {
  return pessoa.idade === idadePesquisada;
}); //retorna o primeiro elemento no array que satisfaz uma condição especificada por uma função
console.log(idadeEncontrada);

const pares = (element) => element % 2 === 0;
console.log(numeros3.some(pares)); // é utilizado em arrays para testar se ao menos um dos elementos no array passa em uma condição fornecida por uma função de callback.

const valorTestado = (valorAtual) => valorAtual < 50;
console.log(numeros3.every(valorTestado));

const ordem = (a, b) => a - b;
numeros2.sort(ordem); //ordena valores conforme um padrão ou conforme uma função de comparação
console.log(numeros2);

const valorInicial = 0;
const somaComInicial = numeros3.reduce(
  // o método reduce() é usado para reduzir um array a um único valor, aplicando uma função de callback a cada elemento do array.
  (acumulador, valorAtual) => acumulador + valorAtual,
  valorInicial
);
console.log(somaComInicial);

const sum = numeros3.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);

//Existem ainda muitos outros metodos como o fill, findIndex, includes, flat entre outros...
