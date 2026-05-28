document.addEventListener("DOMContentLoaded", () => {

    // 1. FAZER O BOTÃO DE VOLTAR TRABALHAR
    // Procura o botão com a classe 'voltar' (aquela setinha no topo esquerdo)
    const botaoVoltar = document.querySelector('.voltar');
    
    if (botaoVoltar) {
        botaoVoltar.addEventListener('click', () => {
            // Faz o navegador voltar exatamente para a tela de onde o usuário veio
            window.history.back();
        });
    }

    // 2. FAZER O BOTÃO DE HISTÓRICO DE FATURAS TRABALHAR
    // Procura o botão cinza lá embaixo escrito 'Ver histórico de faturas'
    const botaoHistorico = document.querySelector('.historico');
    
    if (botaoHistorico) {
        botaoHistorico.addEventListener('click', () => {
            // Dispara um alerta nativo padrão do sistema informando o usuário
            alert("📅 Histórico de faturas: Você será redirecionado para o extrato completo dos meses anteriores.");
        });
    }

});