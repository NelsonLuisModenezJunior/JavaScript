document.addEventListener('DOMContentLoaded', () => {
    const formTarefa = document.getElementById('formTarefa');
    const inputTarefa = document.getElementById('inputTarefa');
    const listaTarefas = document.querySelector('#listaTarefas ul');
  
    // Função para atualizar a lista de tarefas
    function atualizarListaTarefas() {
      fetch('http://localhost:3000/tarefas')
        .then(response => response.json())
        .then(tarefas => {
          listaTarefas.innerHTML = '';
          tarefas.forEach(tarefa => {
            const li = document.createElement('li');
            li.innerHTML = `
              <input type="checkbox" ${tarefa.concluida ? 'checked' : ''}>
              <label class="${tarefa.concluida ? 'concluido' : ''}">${tarefa.texto}</label>
              <button onclick="removerTarefa(${tarefa.id})">Remover</button>
            `;
            listaTarefas.appendChild(li);
          });
        })
        .catch(error => console.error('Erro ao carregar tarefas:', error));
    }
  
    // Função para adicionar uma nova tarefa
    formTarefa.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const tarefa = {
        texto: inputTarefa.value,
        concluida: false
      };
  
      fetch('http://localhost:3000/tarefas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tarefa)
      })
      .then(response => response.json())
      .then(() => {
        inputTarefa.value = '';
        atualizarListaTarefas();
      })
      .catch(error => console.error('Erro ao adicionar tarefa:', error));
    });
  
    // Função para remover uma tarefa
    window.removerTarefa = (id) => {
      fetch(`http://localhost:3000/tarefas/${id}`, {
        method: 'DELETE'
      })
      .then(() => atualizarListaTarefas())
      .catch(error => console.error('Erro ao remover tarefa:', error));
    };
  
    // Inicializa a lista de tarefas ao carregar a página
    atualizarListaTarefas();
  });  