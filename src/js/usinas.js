document.addEventListener('DOMContentLoaded', () => {
    // Seleção dos elementos
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const sidebar = document.getElementById('sidebar');

    const bellBtn = document.getElementById('bellBtn');
    const profileBtn = document.getElementById('profileBtn');

    const notificationsPanel = document.getElementById('notificationsPanel');
    const profilePanel = document.getElementById('profilePanel');

    // Função para limpar e fechar todos os menus ativos
    function fecharTudo() {
        if (sidebar) sidebar.style.width = '0';
        if (notificationsPanel) notificationsPanel.classList.remove('open');
        if (profilePanel) profilePanel.classList.remove('open');
    }

    // --- CONTROLE DA SIDEBAR ---
    if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Impede o documento de fechar o menu no mesmo clique
            fecharTudo();
            sidebar.style.width = '250px';
        });
    }

    if (closeBtn && sidebar) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.style.width = '0';
        });
    }

    // --- CONTROLE DO SINO DE NOTIFICAÇÕES ---
    if (bellBtn && notificationsPanel) {
        bellBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const jaAberto = notificationsPanel.classList.contains('open');
            fecharTudo();
            if (!jaAberto) notificationsPanel.classList.add('open');
        });
    }

    // --- CONTROLE DO PERFIL ---
    if (profileBtn && profilePanel) {
        profileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const jaAberto = profilePanel.classList.contains('open');
            fecharTudo();
            if (!jaAberto) profilePanel.classList.add('open');
        });
    }

    // --- CLICOU FORA? FECHA TUDO ---
    document.addEventListener('click', () => {
        fecharTudo();
    });

    // Impede o fechamento se o usuário clicar dentro do próprio menu/popups
    [sidebar, notificationsPanel, profilePanel].forEach(painel => {
        if (painel) {
            painel.addEventListener('click', (e) => e.stopPropagation());
        }
    });
});