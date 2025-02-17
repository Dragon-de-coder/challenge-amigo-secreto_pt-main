// Array para armazenar os nomes dos amigos  
let amigos = [];  

// Função para adicionar amigos  
function adicionarAmigo() {  
    // Capturando o valor do campo de entrada  
    const input = document.getElementById('amigo');  
    const nome = input.value.trim();  

    // Validando a entrada  
    if (nome === "") {  
        alert("Por favor, insira um nome.");  
    } else if (amigos.includes(nome)) {  
        alert("Este nome já foi adicionado.");  
    } else {  
        // Atualizando o array de amigos  
        amigos.push(nome);  

        // Atualizando a lista na tela  
        atualizarLista();  

        // Limpando o campo de entrada  
        input.value = "";  
    }  
}  

// Função para atualizar a lista de amigos  
function atualizarLista() {  
    // Obter o elemento da lista  
    const lista = document.getElementById('listaAmigos');  

    // Limpar a lista existente  
    lista.innerHTML = ""; // garante que não haja duplicados ao atualizar  

    // Percorrer o array amigos usando um loop for  
    for (let i = 0; i < amigos.length; i++) {  
        // Criar um novo elemento <li>  
        const li = document.createElement('li');  
        // Definir o conteúdo do <li> como o nome do amigo  
        li.textContent = amigos[i];  
        // Adicionar o <li> à lista  
        lista.appendChild(li);  
    }  
}  

// Função para sortear amigo secreto  
function sortearAmigo() {  
    // Validar que há amigos disponíveis  
    if (amigos.length === 0) {  
        alert("Ainda não há amigos adicionados para sortear.");  
        return; // Sai da função se não houver amigos  
    }  

    // Gerar um índice aleatório  
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);  
    
    // Obter o nome sorteado  
    const amigoSorteado = amigos[indiceAleatorio];  
    
    // Mostrar o resultado  
    const resultadoElement = document.getElementById('resultado');  
    resultadoElement.innerHTML = `Amigo secreto sorteado: <strong>${amigoSorteado}</strong>`;  
    
    // Remover o amigo sorteado do array para que não seja sorteado novamente  
    amigos.splice(indiceAleatorio, 1);   
    
    // Atualizar a lista de amigos  
    atualizarLista();  
}  

// Executa a função sortearAmigo quando o botão for clicado  
document.querySelector('.button-draw').addEventListener('click', sortearAmigo);