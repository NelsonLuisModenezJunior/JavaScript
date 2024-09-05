//WHILE
let numero = prompt("Digite um número")

while (numero > 1) {
    alert("O número digitado é " + numero)
    alert("Diminuindo esse número...")
    numero--
}

let opcao = prompt("Escolha uma opção:\n1 - fazer o teste\n2 - Sair")

while (opcao !== "2") {
    alert("Você escolheu a opção " + opcao)
    opcao = prompt("Escolha uma opção:\n1 - fazer o teste\n2 - Sair")
}
alert("Você escolheu sair...")

//DO WHILE
do {
    alert("Você escolheu a opção " + opcao)
    opcao = prompt("Escolha uma opção:\n1 - fazer o teste\n2 - Sair")
} while(opcao !== "2")

alert("Você escolheu sair...")

//FOR
let num3 = parseFloat(prompt("Escolha um número"))
alert("O número é " + num3)

for (let i = 0; num3 > i; i++) {
    alert(`${num3} é maior do que i - i = ${i}`)
}

for (let i = 0; i < 10; i++) {
    alert(`A variável i vale: ${i}`)
    if (i === 5) {
        console.log("Condicão atendida")
        break
    }
}