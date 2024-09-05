function alterarTexto() {
  const labelText = document.getElementById("aleatorio");
  const numAleatorioComZeros = gerarNumAleatorio();
  labelText.textContent = `Número aleatório: ${numAleatorioComZeros}`;
}

function gerarNumAleatorio() {
  const numAleatorio = Math.floor(Math.random() * 999999) + 1;
  return numAleatorio.toString().padStart(6, "0");
}
alterarTexto();
setInterval(alterarTexto, 10 * 1000);
