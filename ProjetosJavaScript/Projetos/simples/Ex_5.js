let nota = prompt("Digite o valor de uma nota")
let i = 0
let notaF = 0

while (nota !== "-1") {
    i++
    notaF += parseFloat(nota)
    nota = prompt("Digite o valor de uma nota")
}
alert("Você escolheu sair...")
if (i > 0) {  //Evita divisão por zero se nenhuma nota foi inserida
    notaF /= i
    alert(`A média das notas digitadas é: ${notaF}`)
} else {
    alert("Nenhuma nota válida foi digitada.")
}
