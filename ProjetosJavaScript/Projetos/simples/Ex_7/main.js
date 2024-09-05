import { CalcDobro, CalcSoma, CalcSubtrair } from "./functions.js";

let num = parseFloat(prompt("Digite um número para ser duplicado"));
CalcDobro(num);

let num1 = parseFloat(prompt("Digite um número"));
let num2 = parseFloat(prompt("Digite outro número"));

let opcao = prompt(
  "Digite qual opção vc quer: \nopção 1 - Somar\nopção 2 - Subtrair"
);

switch (opcao) {
  case "1":
    CalcSoma(num1, num2);
    break;
  case "2":
    CalcSubtrair(num1, num2);
    break;
  default:
    alert("Entrada invalida!");
}


