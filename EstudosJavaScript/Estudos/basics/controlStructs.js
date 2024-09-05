//AND
true && true === true;
true && false === false;
false && true === false;
false && false === true;

//OR
true || true === true;
true || false === true;
false || true === true;
false || false === false;

//NOT
!true === !false;
false === true;

//IF ELSE
let num1 = prompt("Digite um número");
num1.parseFloat();

if (18 > num1) {
  console.log("abaixo da idade de maioridade penal");
} else {
  console.log("acima da maioridade penal");
}

//SWITCH CASE
let paisOrigem = prompt("Digite o nome de seu país de origem");

switch (paisOrigem) {
  case "Argentina":
    alert("Não é um brasileiro");
    break;
  case "Inglaterra":
    alert("Você provavelmente mora na Inglaterra");
    break;
  case "Brasil":
    alert("Você é um brasileiro!");
    break;
  case "Estados Unidos":
    alert("Será que você vive em NY?");
    break;
  default:
    alert("Entrada invalida!");
}
