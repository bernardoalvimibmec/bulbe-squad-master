document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('closeBtn');
  const sidebar = document.getElementById('sidebar');
  const tabs = [document.getElementById('loginTab'), document.getElementById('registerTab')];
  const panels = [document.getElementById('loginPanel'), document.getElementById('registerPanel')];
  const feedback = document.getElementById('authFeedback');

  function setSidebar(open) {
    sidebar.classList.toggle('open', open);
    sidebar.setAttribute('aria-hidden', String(!open));
  }

  menuBtn.addEventListener('click', () => setSidebar(true));
  closeBtn.addEventListener('click', () => setSidebar(false));

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach((item, itemIndex) => {
        const active = itemIndex === index;
        item.classList.toggle('active', active);
        item.setAttribute('aria-selected', String(active));
        panels[itemIndex].hidden = !active;
      });
      feedback.textContent = '';
      feedback.classList.remove('visible');
    });
  });

  document.querySelectorAll('[data-password-target]').forEach((button) => {
    button.addEventListener('click', () => {
      const input = document.getElementById(button.dataset.passwordTarget);
      const showPassword = input.type === 'password';
      input.type = showPassword ? 'text' : 'password';
      button.textContent = showPassword ? 'Ocultar' : 'Mostrar';
      button.setAttribute('aria-label', showPassword ? 'Ocultar senha' : 'Mostrar senha');
    });
  });

  document.querySelectorAll('.auth-form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      feedback.textContent = 'Este fluxo é apenas demonstrativo. A autenticação será conectada ao backend em uma etapa futura.';
      feedback.classList.add('visible');
    });
  });
});
