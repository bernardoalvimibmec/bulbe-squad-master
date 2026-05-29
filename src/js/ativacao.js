(function () {
  const VALORES_PROGRESSO = [0, 25, 50, 75, 100];
  const PASSO_PROGRESSO = 25;
  const PROGRESSO_INICIAL = 50;
  const ETAPAS_DO_STATUS = {
    0: "Cadastro",
    25: "Cadastro",
    50: "Valida\u00e7\u00e3o",
    75: "Homologa\u00e7\u00e3o",
    100: "Cr\u00e9ditos Ativos",
  };
  const STATUS_EM_ANALISE = "Em an\u00e1lise";
  const STATUS_CONCLUIDO = "Conclu\u00eddo";
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

  function obterMarcoDoStatus(percentual) {
    if (percentual >= 100) {
      return 100;
    }

    if (percentual >= 75) {
      return 75;
    }

    if (percentual >= 50) {
      return 50;
    }

    if (percentual >= 25) {
      return 25;
    }

    return 0;
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
      badge.textContent = STATUS_CONCLUIDO;
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
    img.alt = STATUS_CONCLUIDO;
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
    const statusCurrentStep = document.querySelector(".status-current-step");
    const statusActivationState = document.querySelector(".status-activation-state");
    const stepsCard = document.querySelector(".steps-card");
    const stepsList = stepsCard ? stepsCard.querySelector(".steps-list") : null;
    const etapas = stepsCard ? Array.from(stepsCard.querySelectorAll(".step")) : [];
    const marcoStatus = obterMarcoDoStatus(percentualNormalizado);
    const ativacaoConcluida = percentualNormalizado >= 100;
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
      const strokeDashoffset = ativacaoConcluida ? 0 : 100 - percentualNormalizado;
      progressRing.style.strokeDashoffset = String(strokeDashoffset);
    }

    if (statusCurrentStep) {
      statusCurrentStep.textContent = ETAPAS_DO_STATUS[marcoStatus];
    }

    if (statusActivationState) {
      statusActivationState.textContent = ativacaoConcluida
        ? STATUS_CONCLUIDO
        : STATUS_EM_ANALISE;
      statusActivationState.classList.toggle("status-state-complete", ativacaoConcluida);
      statusActivationState.classList.toggle("status-state-analysis", !ativacaoConcluida);
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
