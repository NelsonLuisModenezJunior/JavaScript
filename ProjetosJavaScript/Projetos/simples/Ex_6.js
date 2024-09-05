function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numeroAleatorio = getRandomInt(1, 100);
let tentativasRestantes = 7;

do {
  let palpite = parseInt(
    prompt(
      `Você tem ${tentativasRestantes} tentativas. Digite um número entre 1 e 100: `
    )
  );

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    alert("Entrada inválida. Digite um número entre 1 e 100.");
    continue;
  }

  if (palpite === numeroAleatorio) {
    alert(
      "Parabéns! Você acertou o número em " +
        (7 - tentativasRestantes) +
        " tentativas."
    );
    break;
  } else if (palpite > numeroAleatorio) {
    alert("O número que você digitou é maior que o número secreto.");
  } else {
    alert("O número que você digitou é menor que o número secreto.");
  }

  tentativasRestantes--;
} while (tentativasRestantes > 0);

if (tentativasRestantes === 0) {
  alert(
    "Você não conseguiu acertar o número em 7 tentativas. O número secreto era: " +
      numeroAleatorio
  );
}
