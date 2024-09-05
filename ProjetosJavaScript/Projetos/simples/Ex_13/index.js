document.addEventListener("DOMContentLoaded", function() {
    const text = document.getElementById("meuParagrafo");
    const button = document.getElementById("meuBotao");

    button.addEventListener("click", function () {
        text.innerHTML = "Texto alterado com sucesso!";
    });
});