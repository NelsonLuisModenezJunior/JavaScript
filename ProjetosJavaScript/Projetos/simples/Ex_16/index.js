const formTarefa = document.getElementById("formTarefa");
formTarefa.addEventListener("submit", adicionarTarefa);

function toKebabCase(str) {
  return str.split(" ").join("-").toLowerCase();
}

function adicionarTarefa(event) {
  event.preventDefault();

  const inputTarefa = document.getElementById("inputTarefa");
  const textoTarefa = inputTarefa.value;

  if (textoTarefa !== "") {
    const listaTarefas = document.getElementById("listaTarefas");
    const novaTarefa = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.id = toKebabCase(textoTarefa);
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      novaTarefa.classList.toggle("concluido");
    });
    const label = document.createElement("label");
    label.htmlFor = toKebabCase(textoTarefa);
    label.textContent = textoTarefa;

    novaTarefa.append(checkbox, label);

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.addEventListener("click", function () {
      novaTarefa.remove();
    });

    novaTarefa.appendChild(botaoExcluir);
    listaTarefas.appendChild(novaTarefa);

    inputTarefa.value = "";
  }
}
