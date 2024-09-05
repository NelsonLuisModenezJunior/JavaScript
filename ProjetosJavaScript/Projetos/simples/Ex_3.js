let entrada = prompt("Digite o valor da compra e seu desconto (sem a %) separados por espaço")

let [num1, num2] = entrada.split(' ').map(parseFloat)

let ValorComDesconto = num1-(num1*(num2/100))

alert(`O valor do produto com desconto é: ${ValorComDesconto.toFixed(2)}`)