// SELEÇÃO DE ELEMENTOS DO DOM (Critério avaliado pelo professor)
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');

// 1. EVENTO DO MENU LATERAL (Abre e fecha alterando o estilo da largura)
menuBtn.addEventListener('click', () => {
    sidebar.style.width = '250px';
});

closeBtn.addEventListener('click', () => {
    sidebar.style.width = '0';
});

// 2. FUNÇÃO DA NAVBAR INFERIOR (Altera as classes dinamicamente)
function setActiveNav(clickedButton) {
    // Remove a classe 'active' de todos os botões do menu
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // Adiciona a classe 'active' apenas no botão que recebeu o clique
    clickedButton.classList.add('active');
}