// Função principal para mudar o background
function mudarBG(cor) {
    // Altera a cor do fundo do body
    document.body.style.backgroundColor = cor;

    // Seleciona o elemento <h1>
    const h1 = document.querySelector("h1");

    // Lógica para alterar a cor do texto com base na cor do fundo
    if (cor.toLowerCase() === "black" || cor === "#000000") {
        h1.style.color = "white"; // Texto branco para fundo preto
    } else if (cor.toLowerCase() === "white" || cor === "#ffffff") {
        h1.style.color = "black"; // Texto preto para fundo branco
    } else {
        h1.style.color = ""; // Reseta para a cor padrão do navegador
    }
}

// Executa ao carregar a página
window.onload = function () {
    // Captura a cor do usuário e chama a função mudarBG
    const corUsuario = prompt("Digite uma cor para o fundo (nome ou hexadecimal):");
    
    // Verifica se o usuário forneceu uma cor válida
    if (corUsuario) {
        mudarBG(corUsuario);
    } else {
        alert("Nenhuma cor foi fornecida. O fundo permanecerá inalterado.");
    }
};
