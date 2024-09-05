import { calcularDiaRestantesAniversario, calcularIdade } from "./functions.js";

const dataNascimento = prompt(
  "Digite sua data de nascimento padrão (AAAA-MM-DD): "
);

const idade = calcularIdade(dataNascimento);
const diasRestantes = calcularDiaRestantesAniversario(dataNascimento);

alert(
  `Voçê tem ${idade} anos e faltam ${diasRestantes} dias para o seu aniversário!`
);
