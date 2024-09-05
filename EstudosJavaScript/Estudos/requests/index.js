async function executar() {
  const lista = document.getElementById("postsList");

  const resposta = await fetch("https://jsonplaceholder.typicode.com/posts"); // chamando a API
  const dados = await resposta.json(); // converte o json para um objeto na memória

  console.log(dados);

  dados.forEach(function (post) {
    const postElement = document.createElement("article");

    const postTitle = document.createElement("h2");
    postTitle.textContent = post.title;

    const postAuthor = document.createElement("span");
    postAuthor.textContent = `Author: ${post.userId}`;

    const postContent = document.createElement("p");
    postContent.textContent = post.body;

    postElement.append(
      postTitle,
      postAuthor,
      postContent,
      document.createElement("hr")
    );
    lista.appendChild(postElement);
  });
}

executar();