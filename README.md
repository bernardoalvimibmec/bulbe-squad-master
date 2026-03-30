# 🌞 Project Trust — Bulbe Energia
> **Disciplina:** Projeto Aplicado I — Ibmec 2026.1  
> **Professor:** Cristiano de Macedo Neto, M.Sc.  
> **Squad:** [Master]  
> **Cliente:** Bulbe Energia · [bulbeenergia.com.br](https://bulbeenergia.com.br)

---

## 📋 Sumário

1. [Introdução](#1-introdução)
2. [Demandas do Cliente](#2-demandas-do-cliente)
3. [Personas](#3-personas)
4. [User Stories](#4-user-stories)
5. [Funcionalidades](#5-funcionalidades)
6. [Protótipos](#6-protótipos)
7. [Código-Fonte](#7-código-fonte)
8. [Referências](#8-referências)

---

## 1. Introdução

### 1.1 Contexto do Projeto

O mercado de energia solar por assinatura no Brasil cresce com o avanço da micro e minigeração distribuída, especialmente na modalidade de geração compartilhada, regulamentada pela Lei nº 14.300/2022. Além disso, a energia solar já ocupa posição de destaque na matriz elétrica brasileira, o que reforça a relevância e o potencial de expansão desse setor.

Nesse contexto, a Bulbe Energia atua com um modelo de assinatura em que a energia é gerada em usinas solares, injetada na rede da CEMIG e convertida em créditos para os assinantes. Seu diferencial está em oferecer uma economia de 15% na conta de luz sem exigir instalação de placas, obras ou investimento inicial, por meio de uma jornada digital e simplificada. Assim, a Bulbe se posiciona como uma alternativa mais acessível ao modelo tradicional de energia solar residencial.

Durante a visita à empresa e as conversas com os responsáveis por Marketing e Projetos, foi identificado que a principal dificuldade da Bulbe está em conquistar a confiança de novos clientes. Embora a proposta de desconto seja atrativa, muitos usuários desconfiam da simplicidade do serviço e sentem falta de informações mais claras sobre o funcionamento da assinatura, o prazo para início do benefício e situações excepcionais do processo. Esse cenário motivou o desenvolvimento do projeto.

### 1.2 Problema de Design

O problema de design identificado pela squad é a falta de clareza, previsibilidade e segurança percebida na jornada de adesão de novos clientes da Bulbe. Embora a proposta comercial seja atrativa, a comunicação atual não explica de forma suficientemente transparente etapas e condições importantes do serviço, o que gera insegurança no momento da decisão. Na prática, o usuário entende a promessa de economia, mas não compreende completamente como o processo funciona, quando o desconto começa a valer e quais garantias possui caso algo não ocorra como esperado.

Essa falha impacta tanto a experiência do cliente quanto o negócio. Para o usuário, gera dúvida sobre como a assinatura realmente funciona. Para a empresa, dificulta a conversão de novos assinantes e pode até contribuir para cancelamentos antes do início efetivo do benefício.

### 1.3 Solução Proposta

A solução proposta pela squad é o desenvolvimento de uma solução de frontend voltada para aumentar a transparência e a confiança na jornada de adesão da Bulbe. A proposta consiste em estruturar uma experiência digital mais explicativa e previsível, com foco em apresentar de forma clara como o serviço funciona, quais etapas existem entre a assinatura e o início da economia e quais responsabilidades cabem à Bulbe e à distribuidora. Em vez de apenas comunicar a promessa de desconto, a interface passará a apoiar a tomada de decisão do usuário com informações essenciais apresentadas de forma simples, visual e acessível.

Dentro do escopo do projeto, estão a reorganização da comunicação da jornada, a criação de componentes informativos e a apresentação mais clara de dúvidas críticas, como prazo de ativação, composição da conta e funcionamento do repasse à CEMIG. Ficam fora do escopo mudanças operacionais da Bulbe, integrações de back-end e alterações no modelo regulatório ou comercial da empresa. Assim, o projeto se concentra especificamente na camada de experiência e interface, usando o frontend como ferramenta para reduzir a desconfiança e melhorar a conversão de novos assinantes.

### 1.4 Integrantes da Squad

| Nome Completo | Matrícula | Curso | Papel na Squad |
|---|---|---|---|
| Bernardo A. Alvim | 202508427141 | Eng. Software | Tech Lead |
| Felipe Nunes | 202501440487 | CDIA | Dev |
| Caio Freitas | 202503206091 | CDIA | Dev |
| Davi Edmundo | 202501274161 | Eng. Software | Dev |
| Luca Bellei | 202501560229 | CDIA | Dev |
| Vinicius | 202501007163 | CDIA | Dev |
### 1.5 Repositório e Entrega

| Item | Link |
|---|---|
| Repositório GitHub | https://github.com/bernardoalvimibmec/bulbe-squad-master |
| GitHub Project (Kanban) | https://github.com/users/bernardoalvimibmec/projects/1/views/1 |
| Deploy / Demo | [URL do deploy, se disponível] |

---

## 2. Demandas do Cliente

> ⚠️ **Instrução para a Squad:** As demandas abaixo devem ser levantadas pela própria squad a partir da visita e entrevistas com a Bulbe Energia. Cada demanda deve ter evidência (trecho de fala do cliente, observação de campo, dado coletado). **Não é permitido copiar demandas de materiais de referência do professor.**

### Declaração de Rastreabilidade

> Declaro que as demandas registradas neste documento foram levantadas pela Squad [Nome] durante a visita ao cliente em [data], com base em entrevistas diretas e observação. As evidências estão documentadas nas Issues do GitHub: [link para as Issues].

---

### D-01 · Falta de clareza sobre o déficit de geração de energia

| Campo | Conteúdo |
|---|---|
| **ID** | D-01 |
| **Título** | Falta de clareza sobre o déficit de geração de energia |
| **Origem** | Durante a visita, identificamos a falta de informação sobre o funcionamento do desconto de 15% nos casos em que o consumo elétrico total dos assinantes excede a geração das usinas da Bulbe. |
| **Evidência** | *"A bulbe prometeu 15% de desconto, mas este mês minha conta da fatura da Cemig veio quase o valor total. O desconto não deveria ser fixo todo mês?"* |
| **Prioridade MoSCoW** | SHOULD |
| **Impacto no Negócio** | Pode reduzir a conversão de novos clientes, ao gerar insegurança sobre a previsibilidade do desconto, e aumentar o churn de assinantes que percebem divergência entre a expectativa criada e o valor efetivamente economizado. Também impacta a satisfação, pois a falta de clareza sobre a regra do benefício pode ser interpretada como falha de transparência da Bulbe. |

**Descrição:**  
O modelo de compensação depende da energia efetivamente injetada na rede pela Bulbe. Caso a geração seja insuficiente, a Cemig supre o déficit. Nessa situação, a Bulbe continuaria disponibilizando o desconto de 15% sobre o consumo total?

---

### D-02 · Clientes são pegos de surpresa com o período de espera

| Campo | Conteúdo |
| :--- | :--- |
| **EU IA** | D-02 |
| **Título** | Clientes são pegos de surpresa com o período de espera |
| **Origem** | Identificado a partir de relatos recorrentes do time comercial durante o processo de onboarding de novos clientes. Após a assinatura do contrato, os clientes manifestam frustração ao descobrir que o desconto não é aplicado imediatamente. |
| **Evidência** | *"Assinei o contrato achando que o desconto já valeria no mês seguinte. Ninguém me avisou que teria que esperar meses para aparecer na fatura."* |
| **Prioridade MoSCoW** | MUST |
| **Impacto no título** | Aumenta a taxa de cancelamento nos primeiros meses de contrato, período em que o cliente ainda não visualiza valor real no serviço. Também prejudica o NPS e a imagem da Bulbe, pois a falta de transparência sobre prazos operacionais da Cemig é interpretada como falha na comunicação da empresa. |

**Descrição:**
Após a contratação, existe um período de espera necessário para que a Cemig realize a migração do cliente para o modelo de compensação de energia da Bulbe. Esse prazo, que varia conforme o distribuidor, não é de controle direto da Bulbe, mas também não é comunicado de forma proativa durante o processo comercial. A ausência dessa informação gera surpresa negativa e sensação de promessa não cumprida logo no início da jornada do cliente.

---
### D-03 · Falta de confiança do cliente com a Bulbe

| Campo | Conteúdo |
| :--- | :--- |
| **ID** | D-03 |
| **Título** | Falta de confiança do cliente com a Bulbe |
| **Origem** | Durante a apresentação da empresa nos foi apresentado o problema da falta de confiança do cliente relacionado com o serviço da Bulbe. |
| **Evidência** | *"Parece que depois que o contrato é assinado, o cliente deixa de ser prioridade até a conta chegar"* |
| **Prioridade MoSCoW** | MUST |
| **Impacto no Negócio** | Gera uma barreira crítica de adesão e retenção, pois o cliente teme ficar inadimplente com a Cemig caso a Bulbe não cumpra o repasse de impostos e taxas. Essa incerteza jurídica e financeira sobre a responsabilidade do débito aumenta o churn e pode gerar crises de imagem severas, com o cliente se sentindo desprotegido frente à concessionária de energia. |

**Descrição:**
O problema central reside na **opacidade do fluxo de repasse financeiro** e na sensação de abandono pós-assinatura. O modelo de negócio da Bulbe prevê que o cliente pague uma fatura única e a empresa repasse os valores devidos (taxas e impostos) à Cemig. A falta de confiança surge da ausência de um protocolo claro: o cliente não sabe o que acontece se a Bulbe atrasar ou não realizar esse repasse. Ele corre o risco de ficar endividado com a Cemig? Sua energia pode ser cortada? 

Essa "caixa-preta" operacional, somada à percepção de que o suporte diminui após a venda, corrói a credibilidade da marca. É necessário garantir transparência total sobre a quitação das obrigações junto à concessionária, oferecendo ao cliente comprovantes ou notificações reais de que seus débitos com a Cemig foram devidamente liquidados pela Bulbe.


---
### D-04 · Baixa comunicação com o cliente

| Campo | Conteúdo |
|---|---|
| **ID** | D-04 |
| **Título** | Otimização dos Canais e Fluxos de Comunicação com o Cliente|
| **Origem** | Através de diagnóstico realizado pela squad junto ao time de suporte, identificou-se uma lacuna crítica na fluidez do diálogo com o usuário final, resultando em uma experiência de atendimento limitada e reativa.|
| **Evidência** | *"Cancelei meu plano após não obter respostas da empresa. Tentei contato diversas vezes sem sucesso."*|
| **Prioridade MoSCoW** | SHOULD  |
| **Impacto no Negócio** | Impacta diretamente na retenção (Churn Rate), pois a ausência de retorno gera a percepção de abandono e descaso. Além disso, prejudica o LTV (Lifetime Value) e a reputação da marca no mercado, dificultando a aquisição orgânica por meio de indicações.|

**Descrição:**  
O cenário atual apresenta um gargalo no suporte da Bulbe, onde a falta de agilidade e clareza nas respostas impede a resolução eficaz de problemas dos assinantes. Para reverter esse quadro, é necessário definir: quais canais serão priorizados (WhatsApp, E-mail, Chat)? Qual o SLA (tempo de resposta) aceitável? E como a empresa garantirá que o cliente se sinta ouvido antes de optar pelo cancelamento?

---
### D-05 · O aplicativo não tem acessibilidade e informação suficiente  

| Campo | Conteúdo |
|---|---|
| **ID** | D-05 |
| **Título** | [O aplicativo não tem acessibilidade e informação suficiente] |
| **Origem** | [Após questionamento da equipe, foi identificado que uma das maiores dificuldades é fazer com que o cliente use o aplicativo.] |
| **Evidência** | *"[Não tinha informações suficientes pelo aplicativo para contratar uma empresa]"* |
| **Prioridade MoSCoW** |  COULD |
| **Impacto no Negócio** | [Impacto] |

**Descrição:**  
[Descrição da demanda.]

---
### D-06 · Nossos clientes não entendem o funcionamento da empresa

| Campo | Conteúdo |
|---|---|
| **ID** | D-06 |
| **Título** | [Nossos clientes não entendem o funcionamento da empresa] |
| **Origem** | [A reunião foi relatada que a maioria dos clientes da lâmpada são o público C e D, e a maioria não entende como realmente funciona a empresa.] |
| **Evidência** | *"[O que são esses créditos de energia?]"* |
| **Prioridade MoSCoW** | COULD|
| **Impacto no Negócio** | [Impacto] |

**Descrição:**  
[Descrição da demanda.]

---

> 🔁 *Repita o bloco acima para cada demanda identificada (recomendado: 4 a 8 demandas).*

---

## 3. Personas

> ⚠️ **Instrução para a Squad:** As personas devem ser construídas com base em dados reais coletados pela squad (entrevistas, questionários, observação). Referência metodológica: Cooper et al. (2014) — *About Face: The Essentials of Interaction Design*.

---

### Persona 1 — Luciana

```
┌─────────────────────────────────────────────────────────────┐
│  👤  [Luciana], [43] anos                                   │
│      [Caixa de supermercado] · [Norte de Minas]                        │
└─────────────────────────────────────────────────────────────┘
```

| Atributo | Descrição |
|---|---|
| **Perfil** | Adulto que busca ganhar dinheiro para sustentar sua família |
| **Escolaridade** | Ensino Superior Incompleto |
| **Familiaridade com tecnologia** | Baixa |
| **Dispositivo principal** | Android |

**Objetivos:**
- Objetivo 1 - Economizar dinheiro, pagando uma conta de energia mais barata
- Objetivo 2 - Conseguir uma renda extra de forma simples e rapida usando o aplicativo

**Frustrações:**
- Frustração 1 - Dificuldade em usar aplicativos complicados ou com muitas etapas
- Frustração 2 - Medo de golpes ou plataformas que não sejam confiaveis

**Citação representativa:**
> *"Eu só quero algo que funcione facil e que me ajude a economizar um dinheiro no final do mes, sem dor de cabeça"
**Relevância para o Projeto:**  
A Luciana representa um publico chave que tem necessidade real e urgente de renda, mas enfrenta barreiras tecnologicas.Projetar pensando nela garante que o produto seja simples, intuitivo e acessivel, aumentando a adoção por usuarios menos experientes e ampliando o alcance da solução.

---

### Persona 2 — [Eduardo]
```
┌─────────────────────────────────────────────────────────────┐
│  👤  [Eduardo], [27] anos                                   │
│      [Engenheiro de Software na Google] · [São Paulo]       │
└─────────────────────────────────────────────────────────────┘
```

| Atributo | Descrição |
|---|---|
| **Perfil** | Profissional jovem, interessado em sustentabilidade e economia, usa tecnologia intensivamente |
| **Escolaridade** | Ensino Superior Completo |
| **Familiaridade com tecnologia** | Alta |
| **Dispositivo principal** | Macbook |

**Objetivos:**
- Deseja se tornar mais sustentável e reduzir gastos com energia.
- Deseja economizar na conta de luz pessoal e do condomínio.

**Frustrações:**
- Falta de confiança na empresa devido à falta de transparência sobre funcionamento do desconto.
- Incertidão sobre o que ocorre se a Bulbe não paga o consumo à CEMIG e risco de dívida.

**Comportamentos digitais:**
- Pesquisa informações sobre o produto no site da empresa.
- Utiliza Instagram e LinkedIn.

**Citação representativa:**
> *"Quero ver passo a passo como funciona a cobrança e de onde vem o desconto, porque não vou assinar algo que não consigo validar com dados."

**Relevância para o Projeto:**
Representa perfil de usuário classe A-B, que engloba a maior parte dos assinantes da Bulbe na região metropolitana de BH e público alvo para região de Nova Lima. Perfil técnico que demanda clareza na comunicação e no processo de adesão, representando uma persona estratégica para aumentar a confiança no serviço.

---

## 4. User Stories

> ⚠️ **Instrução para a Squad:** User Stories devem seguir o formato padrão: *"Como [persona], quero [ação], para que [benefício]"* (Cohn, 2004). Cada história deve ter critérios de aceitação mensuráveis.

### Tabela Resumo

| ID | Persona | Título | Prioridade | Status |
|---|---|---|---|---|
| US-01 | Eduardo | Cobrança e Repasse | Alta | Done |
| US-02 | [Persona] | [Título curto] | | |
| US-03 | [Persona] | [Título curto] | | |

---

### US-01 · Clareza sobre déficit de geração e variação do desconto

> **Como** José Carlos, um consumidor que busca economizar na conta de luz, mas precisa confiar que a economia prometida vai realmente acontecer de forma compreensível e previsíve,  
> **quero** entender de forma clara por que o desconto da Bulbe pode variar quando a geração de energia é menor do que o esperado, incluindo o que é cobrado pela CEMIG e o que depende da energia efetivamente injetada,  
> **para que** eu possa usar o serviço com segurança, sem sentir que o valor da minha conta virou uma surpresa ou que a economia prometida depende de fatores que ninguém me explicou.

**Demanda relacionada:** D-01  
**Estimativa de esforço:** M

**Critérios de Aceitação:**
- [ ] O sistema deve explicar, em linguagem simples, que o desconto não é fixo em todos os meses e depende da energia efetivamente gerada/injetada.
- [ ] O fluxo deve responder objetivamente à dúvida sobre risco de ficar sem energia, deixando claro que baixa geração afeta o benefício financeiro, e não o fornecimento da CEMIG.
- [ ] O usuário deve conseguir entender, sem linguagem técnica excessiva, por que em alguns meses a conta da CEMIG pode vir maior do que o esperado

**Notas técnicas:**  
O conteúdo deve priorizar clareza visual e linguagem acessível, evitando termos regulatórios sem explicação. Ideal incluir um quadro comparativo do tipo “consumo total x energia compensada x saldo cobrado pela CEMIG”, além de FAQ com perguntas reais de clientes. Pode depender de validação com os times técnico, comercial e jurídico para garantir precisão sobre compensação de energia, sazonalidade da geração e comunicação contratual do desconto.

---

### US-02 · Transparência sobre o período de espera

> **Como** Eduardo,
> **quero** quero visualizar de forma clara, antes da contratação, que o desconto da Bulbe começa após o período de espera de aproximadamente 90 dias e entender o motivo desse prazo,  
> **para que** para que eu possa decidir com segurança se desejo assinar o serviço, sem me sentir enganado ou surpreso depois da adesão.

**Demanda relacionada:** D-02  
**Estimativa de esforço:** P

**Critérios de Aceitação:**
- [ ] O site deve informar, antes da confirmação da assinatura, que o benefício não é ativado imediatamente e que existe um período de espera de cerca de 90 dias.
- [ ] A interface deve explicar de forma simples que esse prazo decorre de uma regra/processo da CEMIG, e não de uma escolha arbitrária da Bulbe.

**Notas Técnincas:**
A user story foca exclusivamente na camada de comunicação e transparência no frontend. Não inclui alteração no prazo real do processo nem integração com sistemas da CEMIG. O objetivo é reduzir insegurança e cancelamentos causados por expectativa incorreta sobre o início do benefício.

---

### US-03 · Transparência e Acompanhamento de Faturas

**Como Eduardo,** um engenheiro de software cauteloso que tem dúvidas sobre confiar o pagamento da conta de luz a uma empresa nova,  
**quero** saber se é possível visualizar o status de processamento do meu contrato e as confirmações de pagamento da CEMIG,  
**para que** eu tenha certeza absoluta de que minhas contas fiquem em dia e elimine minhas dúvidas sobre a Bulbe.

**Demanda relacionada:** D-03  
**Estimativa de esforço:** M (Média)  

**Critérios de Aceitação:**

- [ ] O app deve disponibilizar um dashboard ou área logada onde o Eduardo visualize a etapa atual do seu contrato (ex: em análise, aguardando compensação, ativo).
- [ ] Deve haver uma seção de "Histórico de Pagamentos" que mostre o comprovante ou a confirmação de quitação da fatura junto à CEMIG.

**Notas técnicas:**  
Usar linguagem simples e visual (cards ou timeline) para tornar claro para qualquer cliente. Validar com produto/comercial o fluxo real de atualização de status CEMIG e frequência de sincronização. Incluir estados de fallback para dados ausentes (“Ainda não há histórico de pagamento”, “Confira novamente em alguns minutos”) e tratamento de erros de conexão/API (retry, mensagem clara e botão de re-tentativa).

---

US-04 · Transparência no Atendimento e Resolução de Dúvidas
**Como Pedro,** um assinante que já teve experiências ruins com falta de retorno de empresas,
**quero** ter acesso a um canal de comunicação claro e um histórico de suporte dentro da plataforma,
**para que** eu não me sinta abandonado pela Bulbe e tenha segurança de que minhas solicitações estão sendo tratadas, evitando o cancelamento por falta de suporte.

**Demanda relacionada:** D-04

**Estimativa de esforço:** M (Média)

**Critérios de Aceitação:**
- [ ] O sistema deve disponibilizar um canal direto de atendimento (chat ou abertura de chamado) facilmente localizável.
- [ ] O usuário deve conseguir visualizar o status atual de sua solicitação e o histórico de interações anteriores.
- [ ]A plataforma deve informar o prazo estimado para resposta, garantindo que o cliente saiba quando será atendido.

**Notas técnicas:** 
O foco deve ser a reversão da percepção de "péssimo suporte" citada nos feedbacks. É essencial que o fluxo de comunicação seja transparente, mostrando que a empresa recebeu a demanda. Pode ser necessária integração com ferramenta de CRM/Suporte para espelhar as respostas no painel do usuário. Recomenda-se incluir uma área de "Dúvidas Frequentes" dinâmica para resolver problemas comuns sem necessidade de interação humana imediata.

---

### US-05 · [Título]

> **Como** [Persona],  
> **quero** [ação que o usuário deseja realizar],  
> **para que** [benefício ou objetivo que o usuário alcança].

**Demanda relacionada:** D-0X  
**Estimativa de esforço:** [P / M / G] *(Story Points ou T-shirt sizing)*

**Critérios de Aceitação:**
- [ ] [Critério 1: condição verificável e objetiva]
- [ ] [Critério 2]
- [ ] [Critério 3]

**Notas técnicas:**  
[Observações relevantes para a implementação, limitações conhecidas ou dependências.]

---

### US-06 · Nossos clientes não entendem o funcionamento da empresa

> **Como** José Carlos, um cliente com pouco acesso à informação e dificuldade de entender como funciona a bulbe, 
> **quero** uma explicação simples sobre como é o funcionamento real da empresa antes de contratar,  
> **para que** eu me sinta seguro para fechar o plano, pois já caí em vários golpes na internet.

**Demanda relacionada:** D-06  
**Estimativa de esforço:** P

**Critérios de Aceitação:**
- [ ] Para os clientes com dificuldade com internet ou redes sociais o fechamento do plano pode ser via uma reunião on-line.
- [ ] Mostrar alguns exemplos de outros clientes na mesma situação que fecharam o plano e ficaram satisfeitos.
- [ ] Mostrar um exemplo prático de cobrança ou economia.

**Notas técnicas:**  
Garantir que usuários com baixa familiaridade digital ou desconfiança consigam entender, de forma simples e prática, como a empresa funciona, aumentando a confiança antes da contratação.

---

## 5. Funcionalidades

> ⚠️ **Instrução para a Squad:** Liste as funcionalidades que serão implementadas, organizadas por User Story e classificadas via MoSCoW (Clegg & Barker, 1994). Mantenha rastreabilidade com as demandas e histórias anteriores.

### 5.1 Mapa de Funcionalidades

| ID | Funcionalidade | US Relacionada | MoSCoW | Sprint |
|---|---|---|---|---|
| F-01 | [Nome da funcionalidade] | US-01 | Must Have | Sprint 1 |
| F-02 | [Nome da funcionalidade] | US-02 | Should Have | Sprint 2 |
| F-03 | [Nome da funcionalidade] | US-03 | Could Have | Sprint 3 |
| F-04 | [Nome da funcionalidade] | US-04 | Won't Have | — |

### 5.2 Descrição das Funcionalidades Must Have

#### F-01 · [Nome da Funcionalidade]

**Descrição:**  
[Descrição técnica e funcional. O que a funcionalidade faz? Como o usuário interage com ela?]

**Comportamento esperado:**
1. [Passo 1 do fluxo principal]
2. [Passo 2]
3. [Resultado final para o usuário]

**Restrições e regras de negócio:**
- [Regra 1: ex. "O prazo de espera exibido não pode ser inferior a 0 dias."]
- [Regra 2]

---

> 🔁 *Repita para cada funcionalidade Must Have e Should Have.*

---

## 6. Protótipos

> ⚠️ **Instrução para a Squad:** Registre aqui os links e imagens dos protótipos. Recomenda-se o uso do Figma. A progressão deve ser: esboço (wireframe) → baixa fidelidade → alta fidelidade.

### 6.1 Wireframes (Baixa Fidelidade)

| Tela | Link Figma | Descrição |
|---|---|---|
| [Nome da tela] | [URL] | [Breve descrição do que a tela representa] |
| [Nome da tela] | [URL] | [Descrição] |

### 6.2 Protótipo de Alta Fidelidade

**Link do protótipo interativo (Figma):** [URL]

#### Capturas de Tela

> *Insira aqui imagens exportadas do Figma ou screenshots do protótipo.*

**Tela: [Nome]**  
![Descrição da imagem](./prototipos/[nome-do-arquivo].png)

**Tela: [Nome]**  
![Descrição da imagem](./prototipos/[nome-do-arquivo].png)

### 6.3 Decisões de Design

| Decisão | Justificativa |
|---|---|
| [Ex: Paleta de cores baseada na identidade da Bulbe] | [Ex: Manutenção da consistência com a marca do cliente] |
| [Decisão 2] | [Justificativa 2] |
| [Decisão 3] | [Justificativa 3] |

---

## 7. Código-Fonte

> ⚠️ **Instrução para a Squad:** Mantenha a estrutura de pastas abaixo. Todos os arquivos devem ser entregues via GitHub com commits semânticos e rastreabilidade por Issues.

### 7.1 Estrutura de Diretórios

```
[nome-do-repositorio]/
│
├── docs/                        # Documentação do projeto
│   ├── demandas.md              # Detalhamento das demandas (entrega via GitHub)
│   ├── personas.md              # Personas detalhadas
│   └── decisoes-design.md      # Registro de decisões de design (ADRs)
│
├── prototipos/                  # Capturas e exportações do Figma
│   ├── wireframes/
│   └── alta-fidelidade/
│
├── src/                         # Código-fonte da aplicação
│   ├── assets/                  # Imagens, fontes, ícones
│   ├── components/              # Componentes reutilizáveis
│   ├── pages/                   # Páginas / rotas
│   ├── styles/                  # Arquivos de estilo globais
│   ├── data/                    # Mocks de dados (JSON)
│   └── utils/                   # Funções utilitárias
│
├── .gitignore
├── README.md                    # Este arquivo
└── [package.json / index.html]  # Ponto de entrada da aplicação
```

### 7.2 Convenções de Código

| Convenção | Padrão adotado |
|---|---|
| Commits | Semânticos: `feat:`, `fix:`, `docs:`, `style:`, `refactor:` |
| Branches | `feat/[nome]`, `fix/[nome]`, `docs/[nome]` |
| Issues | Vinculadas a User Stories via `#ID` no commit |
| Pull Requests | Revisados por pelo menos 1 membro da squad antes do merge |

### 7.3 Como Executar o Projeto Localmente

```bash
# 1. Clone o repositório
git clone git@github.com:[usuario]/[repositorio].git

# 2. Acesse a pasta do projeto
cd [repositorio]

# 3. [Insira aqui os comandos de instalação de dependências, se houver]
# Ex: npm install

# 4. Inicie o servidor de desenvolvimento
# Ex: npm run dev
# Ou: python -m http.server 8000

# 5. Acesse no navegador
# http://localhost:[porta]
```

### 7.4 Histórico de Sprints

| Sprint | Período | Objetivo Principal | Status |
|---|---|---|---|
| Sprint 0 | [datas] | Descoberta e configuração do ambiente | ✅ Concluída |
| Sprint 1 | [datas] | [Objetivo] | 🔄 Em andamento |
| Sprint 2 | [datas] | [Objetivo] | ⏳ Planejada |
| Sprint 3 | [datas] | [Objetivo] | ⏳ Planejada |

---

## 8. Referências

> ⚠️ **Instrução para a Squad:** Cite **todas** as fontes utilizadas, incluindo fontes acadêmicas, relatórios de mercado e documentação técnica. Use o padrão ABNT NBR 6023:2018. Nunca omita uma fonte para evitar plágio.

### Bibliográficas

AQUILES, Alexandre; FERREIRA, Rodrigo. **Controlando versões com Git e GitHub**. São Paulo: Casa do Código, 2020.

COHN, Mike. **User Stories Applied: For Agile Software Development**. Boston: Addison-Wesley, 2004.

COOPER, Alan et al. **About Face: The Essentials of Interaction Design**. 4. ed. Indianapolis: Wiley, 2014.

NIELSEN, Jakob. **Usabilidade na web: projetando websites com qualidade**. Rio de Janeiro: Campus, 2007.

SUTHERLAND, Jeff; SUTHERLAND, J. J. **Scrum: a arte de fazer o dobro do trabalho na metade do tempo**. Rio de Janeiro: Sextante, 2019.

### Fontes de Mercado e Dados

ABSOLAR — Associação Brasileira de Energia Solar Fotovoltaica. **Infográfico ABSOLAR**. Disponível em: https://www.absolar.org.br. Acesso em: [data de acesso].

ANEEL — Agência Nacional de Energia Elétrica. **Geração Distribuída: dados e estatísticas**. Disponível em: https://www.aneel.gov.br. Acesso em: [data de acesso].

### Documentação Técnica

[Inclua aqui referências à documentação oficial de frameworks, bibliotecas ou ferramentas utilizadas no projeto.]

---

<br>

> 📌 **Nota de integridade acadêmica:**  
> Este documento foi produzido pela Squad [Nome] com base em pesquisa original, entrevistas com o cliente e desenvolvimento próprio. Todos os trechos e dados externos estão devidamente referenciados. O uso de IA generativa para apoio à escrita, quando ocorreu, foi declarado nas Issues correspondentes do GitHub.

---

*Última atualização: [data] · Squad [Nome] · Projeto Aplicado I — Ibmec 2026.1*
