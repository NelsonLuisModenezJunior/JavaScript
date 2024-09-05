const estoque2 = [];

function cadastrarItem() {
  const name = prompt("Digite o nome do item: ");
  const quantidade = parseInt(prompt("Digite a quantidade do item: "));

  if (isNaN(quantidade) || quantidade <= 0) {
    alert("Quantidade inválida!");
    return;
  }

  const item = { nome, quantidade };
  estoque2.push(item);
  alert(`${name} foi adicionado ao estoque com ${quantidade} unidades.`);
}

function listarItens() {
  if (estoque2.length === 0) {
    alert("O estoque está vazio!");
    return;
  }

  const itensString = estoque2
    .map(function (item, index) {
      return `${index + 1}. ${item.nome}: ${item.quantidade} unidades.`;
    })
    .join("\n");

  alert(`Itens no estoque: \n${itensString}`);
}

function alterarQuantidade() {
  listarItens();
  const indice =
    parseInt(prompt("Digite o número do item que deseja alterar: ")) - 1;

  if (isNaN(indice) || indice <= 0 || indice > estoque2.length) {
    alert("Número inválido!");
    return;
  }

  const novaQuantidade = parseint(
    prompt(`Digite a nova quantidade para "${estoque2[indice].nome}":`)
  );

  if (isNaN(novaQuantidade) || novaQuantidade < 0) {
    alert("Quantidade inválida, a alteração não foi feita!");
  }

  estoque2[indice].quantidade = novaQuantidade;
  alert(`"${estoque2[indice].nome}" agora possuí ${novaQuantidade} unidades.`);
}

function excluirItem() {
  listarItens();
  const indice =
    parseInt(prompt("Digite o número do item que deseja excluir: ")) - 1;

  if (isNaN(indice) || indice <= 0 || indice > estoque2.length) {
    alert("Número do item inválido!");
  }

  const nomeItemExcluido = estoque2[indice].nome;
  estoque2.splice(indice, 1);
  alert(`"${nomeItemExcluido}" foi excluído do estoque.`);
}

while (escolha !== "5") {
  escolha = prompt(
    "Escolha uma opção:\n1. Cadastrar novo item\n2. Listar itens\n3. Alterar quantidade\n4. Excluir item\n5. Sair"
  );
  switch (escolha) {
    case "1":
      cadastrarItem();
      break;
    case "2":
      listarItens();
      break;
    case "3":
      alterarQuantidade();
      break;
    case "4":
      excluirItem();
      break;
    case "5":
      alert("Saindo do programa de gerenciamento de estoque...");
      break;
    default:
      alert("Opção inválida!. Tente novamente.");
  }
}
