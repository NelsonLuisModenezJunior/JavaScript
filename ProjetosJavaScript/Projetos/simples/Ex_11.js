let veiculo = {
    modelo: "Lirabus",
    passageiros: ["Amanda", "Beto", "Carol", "André"],
    limitePassageiros: 32,
    velocidade: 60,
    aumentarVel: function() {
        this.velocidade += 10;
        alert(`velocidade aumentada em 10km, velocidade atual ${this.velocidade}`);
    },
    diminuirVel: function() {
        this.velocidade -= 10;
        alert(`velocidade diminuída em 10km, velocidade atual ${this.velocidade}`);
    },
    adicPassageiro: function(nome) {
        if (this.velocidade === 0) {
            if (this.passageiros.length < this.limitePassageiros) {
                this.passageiros.push(nome);
                alert(`${nome} foi adicionado ao veículo.`);
            } else {
                alert("Limite de passageiros atingido.");
            }
        } else {
            alert("Não é possível adicionar passageiros com o veículo em movimento.");
        }
    }
}

veiculo.diminuirVel(); 
veiculo.adicPassageiro("Eduardo");
veiculo.aumentarVel();
