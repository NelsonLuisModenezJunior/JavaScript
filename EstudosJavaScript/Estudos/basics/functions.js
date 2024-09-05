//Funções
function Hello() {
    console.log("Hello World!")
}
Hello()

//Parâmetros
function Name(arg, age=0) {
    console.log(arg)
    console.log(age)
}
Name("Júnior", 3)

function Subtract(x, y) {
    console.log(`${x} - ${y} = ${x - y}`)
} 
Subtract(10, 6)

//Retorno
function Subtract(x, y) {
    let resultado = x - y
    console.log(`${x} - ${y} = ${resultado}`)
    return resultado
} 
const res = Subtract(10, 6)
console.log(`O resultado foi: ${res}`)

//Função anonima
const subtract = function(x, y) {
    let resultado = x - y
    console.log(`${x} - ${y} = ${resultado}`)
    return resultado
} 
const r = subtract(10, 6)
console.log(`O resultado foi: ${r}`)
console.log(subtract)