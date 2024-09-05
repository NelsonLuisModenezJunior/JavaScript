//importando o dayjs
import dayjs from "dayjs";

//usando o dayjs para melhor manipular datas
export function calcularDiaRestantesAniversario(dataNascimento) {
  //salva a data de hoje e a do nascimento no formato do dayjs
  const hoje = dayjs();
  const nascimento = dayjs(dataNascimento);

  //Muda o ano de nascimento para o mesmo da data de hoje
  let proximoAniversario = nascimento.year(hoje.year());

  //Se a pessoa já fez seu aniversário no ano atual, aumenta um ano na data
  if (proximoAniversario.isBefore(hoje)) {
    proximoAniversario = proximoAniversario.add(1, "year");
  }

  console.log({ proximoAniversario, hoje });
  //Calcula a diferença e retorna no formato "day"
  const diasRestantes = proximoAniversario.diff(hoje, "day");
  return diasRestantes;
}

export function calcularIdade(dataNascimento) {
  //salva a data de hoje e a do nascimento no formato do dayjs
  const hoje = dayjs();
  const nascimento = dayjs(dataNascimento);
  //Calcula a diferença entre eles e retorna o formato "year"
  const idade = hoje.diff(nascimento, "year");
  return idade;
}
