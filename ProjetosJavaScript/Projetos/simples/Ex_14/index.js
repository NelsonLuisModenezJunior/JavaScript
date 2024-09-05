const text = document.getElementById("text")
const button = document.getElementById("button")
const ulElement = document.getElementById("listaDeJogos")

button.addEventListener("click", function () {
    const liElement = document.createElement("li")
    liElement.innerText = text.value

    ulElement.appendChild(liElement)
    text.value = " "
})