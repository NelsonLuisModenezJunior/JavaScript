const usersList = document.getElementById("idUsuarios");
executar();

async function executar() {
  const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
  const dados = await resposta.json();
  console.log(dados);
  exibirUsuarios(dados);
}

function exibirUsuarios(users) {
  usersList.innerHTML = "";
  users.forEach((user) => {
    const userList = document.createElement("li");
    userList.innerHTML = `<h4>${user.id}</h4><p>Nome: ${user.name} | Username: ${user.username} | Email: ${user.email}</p><hr>`;
    usersList.appendChild(userList);
  });
}
