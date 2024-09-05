function exibirMensagem() {
  const message = document.querySelector(".message");
  message.classList.remove("hidden");

  setTimeout(function () {
    message.classList.add("hidden");
  }, 5 * 1000);
}

const botaoAdic = document.getElementById("addToCart");
botaoAdic.addEventListener("click", exibirMensagem);
