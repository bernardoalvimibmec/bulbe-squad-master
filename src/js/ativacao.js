(function () {
  const VALORES_PROGRESSO = [0, 25, 50, 75, 100];
  const PASSO_PROGRESSO = 25;
  const PROGRESSO_INICIAL = 50;
  const LINHA_TOPO = 11;
  const LINHA_ALTURA_TOTAL = 132;
  const LINHA_PASSO = 43;

  let progressoAtual = PROGRESSO_INICIAL;
  let checkIconSrc = "../assets/ativacao-da-sua-conta/check.svg";

  function limitarPercentual(percentual) {
    const numero = Number(percentual);

    if (!Number.isFinite(numero)) {
      return 0;
    }

    return Math.min(100, Math.max(0, Math.round(numero)));
  }

  function definirBadge(badge, estado) {
    if (!badge) {
      return;
    }

    badge.classList.remove(
      "step-pill-success",
      "step-pill-active",
      "step-pill-pending",
      "bulbe-badge-success",
      "bulbe-badge-progress",
      "bulbe-badge-pending"
    );

    if (estado === "completed") {
      badge.textContent = "Concluído";
      badge.classList.add("step-pill-success", "bulbe-badge-success");
      return;
    }

    if (estado === "active") {
      badge.textContent = "Em andamento";
      badge.classList.add("step-pill-active", "bulbe-badge-progress");
      return;
    }

    badge.textContent = "Pendente";
    badge.classList.add("step-pill-pending", "bulbe-badge-pending");
  }

  function definirMarcador(marker, concluida) {
    if (!marker) {
      return;
    }

    marker.textContent = "";

    if (!concluida) {
      return;
    }

    const img = document.createElement("img");
    img.src = checkIconSrc;
    img.alt = "Concluído";
    marker.appendChild(img);
  }

  function atualizarLinhaDasEtapas(stepsList, etapasConcluidas, totalEtapas) {
    if (!stepsList) {
      return;
    }

    const linhaConcluida =
      etapasConcluidas >= totalEtapas
        ? LINHA_ALTURA_TOTAL
        : etapasConcluidas * LINHA_PASSO;
    const linhaPendente = Math.max(0, LINHA_ALTURA_TOTAL - linhaConcluida);

    stepsList.style.setProperty("--steps-line-completed", `${linhaConcluida}px`);
    stepsList.style.setProperty("--steps-line-pending-top", `${LINHA_TOPO + linhaConcluida}px`);
    stepsList.style.setProperty("--steps-line-pending-height", `${linhaPendente}px`);
  }

  function atualizarBotoesDoSimulador() {
    const botaoAnterior = document.querySelector(".progress-arrow-left");
    const botaoProximo = document.querySelector(".progress-arrow-right");

    if (botaoAnterior) {
      botaoAnterior.disabled = progressoAtual <= 0;
    }

    if (botaoProximo) {
      botaoProximo.disabled = progressoAtual >= 100;
    }
  }

  function atualizarProgressoAtivacao(percentual) {
    const percentualNormalizado = limitarPercentual(percentual);
    const statusPercent = document.querySelector(".status-percent");
    const progressFill = document.querySelector(".progress-fill");
    const progressRing = document.querySelector(".hero-progress-ring");
    const stepsCard = document.querySelector(".steps-card");
    const stepsList = stepsCard ? stepsCard.querySelector(".steps-list") : null;
    const etapas = stepsCard ? Array.from(stepsCard.querySelectorAll(".step")) : [];
    const etapasConcluidas = Math.min(
      etapas.length,
      Math.floor(percentualNormalizado / PASSO_PROGRESSO)
    );

    progressoAtual = percentualNormalizado;

    if (statusPercent) {
      statusPercent.textContent = `${percentualNormalizado}%`;
    }

    if (progressFill) {
      progressFill.style.width = `${percentualNormalizado}%`;
    }

    if (progressRing) {
      progressRing.style.strokeDashoffset = 100 - percentualNormalizado;
    }

    etapas.forEach((etapa, index) => {
      const concluida = index < etapasConcluidas;
      const ativa = !concluida && index === etapasConcluidas;
      const estado = concluida ? "completed" : ativa ? "active" : "pending";
      const marcador = etapa.querySelector(".step-marker");
      const badge = etapa.querySelector(".step-pill");

      etapa.classList.remove("step-completed", "step-active", "step-pending");
      etapa.classList.add(`step-${estado}`);
      definirMarcador(marcador, concluida);
      definirBadge(badge, estado);
    });

    atualizarLinhaDasEtapas(stepsList, etapasConcluidas, etapas.length);
    atualizarBotoesDoSimulador();

    return percentualNormalizado;
  }

  function setProgressoAtivacao(percentual) {
    return atualizarProgressoAtivacao(percentual);
  }

  function moverProgresso(direcao) {
    const indiceAtual = VALORES_PROGRESSO.includes(progressoAtual)
      ? VALORES_PROGRESSO.indexOf(progressoAtual)
      : Math.round(progressoAtual / PASSO_PROGRESSO);
    const proximoIndice = Math.min(
      VALORES_PROGRESSO.length - 1,
      Math.max(0, indiceAtual + direcao)
    );

    setProgressoAtivacao(VALORES_PROGRESSO[proximoIndice]);
  }

  function prepararSimulador() {
    const checkAtual = document.querySelector(".steps-card .step-marker img");
    const botaoAnterior = document.querySelector(".progress-arrow-left");
    const botaoProximo = document.querySelector(".progress-arrow-right");

    if (checkAtual) {
      checkIconSrc = checkAtual.src;
    }

    if (botaoAnterior) {
      botaoAnterior.addEventListener("click", () => moverProgresso(-1));
    }

    if (botaoProximo) {
      botaoProximo.addEventListener("click", () => moverProgresso(1));
    }

    setProgressoAtivacao(PROGRESSO_INICIAL);
  }

  window.atualizarProgressoAtivacao = atualizarProgressoAtivacao;
  window.setProgressoAtivacao = setProgressoAtivacao;

  document.addEventListener("DOMContentLoaded", prepararSimulador);
})();
