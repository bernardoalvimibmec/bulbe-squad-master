const navItems = document.querySelectorAll('.bottom-nav .nav-item');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove a classe active de todos os itens da navegação
        navItems.forEach(nav => nav.classList.remove('active'));
        
        // Adiciona a classe active no item clicado
        item.classList.add('active');
        
        const nomeAba = item.querySelector('span').textContent;
        console.log(`Mudando para a tela: ${nomeAba}`);
    });
});