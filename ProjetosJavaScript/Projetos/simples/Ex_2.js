let entrada = prompt("Digite dois números")

let [num1, num2] = entrada.split(' ').map(parseFloat);

let resultado1 = num1+num2
let resultado2 = num1-num2
let resultado3 = num1*num2
let resultado4 = num1/num2

alert(`+ = ${resultado1} \n - = ${resultado2} \n x = ${resultado3} \n / = ${resultado4} \n`)
