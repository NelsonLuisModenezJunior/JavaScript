console.log("Script iniciado!");

console.log("Iniciando contagem");

setTimeout(function () {
  console.log("Executado após 3 segundos");
}, 3 * 1000);

console.log("contagem iniciada");
console.log("O script ainda está em execução");
console.log("Script finalizado");

//--------------------------------------------------

let contador = 1;

const intervalId = setInterval(function () {
  console.log(`Executado ${contador} vezes após 2 segundos`);
  contador++;
  if (contador >= 6) {
    clearInterval(intervalId);
  }
}, 2 * 1000);

//--------------------------------------------------

console.log("iniciado");

const minhaPromise = new Promise(function (resolve, reject) {
  const condition = Math.random() > 0.5; // Condição aleatória

  if (condition) {
    reject("Promise rejeitada!");
  } else {
    setTimeout(function () {
      console.log("Executando a promise...");
      resolve("Promise Resolvida!");
    }, 3 * 1000);
  }
});

minhaPromise
  .then(function (resultado) {
    console.log(resultado);
  })
  .catch(function (erro) {
    console.error(erro);
  });

console.log(minhaPromise);

console.log("Finalizado");

//--------------------------------------------------

function somaAssincrona(a, b) {
  return new Promise(function (resolve, reject) {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
      reject("Números inválidos!");
    } else {
      resolve(numA + numB);
    }
  });
}
somaAssincrona(3, 7)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (motivo) {
    console.log(motivo);
  })
  .finally(function () {
    console.log("Promise finalizada!");
  });

console.log("Finalizado");

//--------------------------------------------------

async function somaAsync(a, b) {
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return Promise.reject("Números inválidos!");
  } else {
    return numA + numB;
  }
}
somaAsync(4, 8)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (motivo) {
    console.log(motivo);
  });
console.log("Finalizado");

//--------------------------------------------------

async function somaComPromise(a, b) {
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return Promise.reject("Números inválidos!");
  } else {
    return numA + numB;
  }
}

somaComPromise(3, 8)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (erro) {
    console.log(erro);
  });

async function executar() {
  try {
    const resultado = await somaAsync(3, "9");
    console.log("Executando...");
    console.log(resultado);
  } catch (erro) {
    console.log(erro);
  }
}

executar();
