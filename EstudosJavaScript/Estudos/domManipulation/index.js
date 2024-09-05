/*
const titulo = document.querySelector("h1");
const titulo2 = document.querySelectorAll("h1.titulo-principal")
const titulo3 = document.getElementById("titulo")

console.log(titulo);

titulo.addEventListener("click", function () {
titulo.innerHTML = "Olá, mundo! <em>apreendendo DOM</em>"
console.log(titulo.getAttribute("id"))
console.log(titulo.setAttribute("class", "bg-blue"));
titulo.id = "titulo-principal"
titulo.className = "bg-blue"
titulo.classList.remove("bg-blue");
titulo.classList.toggle("bg-blue");
});

function inserirLi() {
  const jogo = prompt(
    "Insira o nome do jogo que você deseja adcionar à lista: "
  );

  const liElement = document.createElement("li");
  liElement.innerText = jogo;
  liElement.id = toKebabCase(jogo);

  const btnRemover = document.createElement("button");
  btnRemover.innerText = "Remover Jogo";

  btnRemover.addEventListener("click", function () {
    removerLi(liElement.id);
  });

  liElement.appendChild(btnRemover);

  const ulElement = document.getElementById("listaDeJogos");

  ulElement.appendChild(liElement);
}

document.getElementById("adicionarJogo").addEventListener("click", inserirLi);
*/

function toKebabCase(str) {
  return str.split(" ").join("-").toLowerCase();
}

function removerLi(id) {
  const liParaRemover = document.getElementById(toKebabCase(id));
  if (liParaRemover) {
    liParaRemover.remove();
  }
}

function adicionarLi(jogo) {
  const liElement = document.createElement("li");
  liElement.id = toKebabCase(jogo.nome);
  liElement.textContent = `Nome: ${jogo.nome} - Ano de lançamento: ${jogo.ano} - Gênero: ${jogo.genero}`;

  const btnRemover = document.createElement("button");
  btnRemover.innerText = "Remover Jogo";
  btnRemover.addEventListener("click", function () {
    removerLi(liElement.id);
  });

  liElement.appendChild(btnRemover);
  document.getElementById("listaDeJogos").appendChild(liElement);
}

const form = document.getElementById("cadastrarJogo");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const inputNome = document.getElementById("nome");
  const inputAno = document.getElementById("ano");
  const inputGenero = document.getElementById("genero");

  const jogo = {
    nome: inputNome.value,
    ano: inputAno.value,
    genero: inputGenero.value,
  };

  adicionarLi(jogo);

  evento.target.reset();
});
