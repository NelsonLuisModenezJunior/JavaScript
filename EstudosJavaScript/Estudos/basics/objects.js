let pessoa = {
    idade: 18,
    nome: "Alex",
    endereco: { rua: "rua qualquer", numero: "99"},
    hello: function () {
        alert(`Hello World! I am ${this.nome}`)
    }
}

console.log(pessoa.nome)
console.log(pessoa.endereco)
console.log(pessoa.endereco.rua)

pessoa.nome = "Júnior"

console.log(pessoa)

pessoa.telefone = "11123456789"

console.log(pessoa)

pessoa.hello()

pessoa.nome = "Gabriel"

pessoa.hello()

let calculadora = {
    x: 5,
    y: 6,
    somar: function() {
        alert(this.x + this.y)
    }
}

calculadora.somar()
calculadora.x = 50
calculadora.y = 46
calculadora.somar()