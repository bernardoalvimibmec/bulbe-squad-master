# 🌞 Project Trust — Bulbe Energia
> **Disciplina:** Projeto Aplicado I — Ibmec 2026.1
> **Professor:** Cristiano de Macedo Neto, M.Sc.
> **Squad:** Master
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
| Demo local | `src/pages/preview.html` |

---

## 2. Demandas do Cliente

> ⚠️ **Rastreabilidade:** As demandas abaixo foram consolidadas pela Squad Master a partir do trabalho de descoberta com a Bulbe Energia e orientam as telas implementadas no protótipo. Evidências complementares estão registradas em `docs/Demandas.md`.

### Declaração de Rastreabilidade

> Declaro que as demandas registradas neste documento foram levantadas pela Squad Master com base em entrevistas, observações e registros do projeto. As evidências disponíveis no repositório estão documentadas em `docs/Demandas.md` e no GitHub Project da squad.

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
| **ID** | D-02 |
| **Título** | Clientes são pegos de surpresa com o período de espera |
| **Origem** | Identificado a partir de relatos recorrentes do time comercial durante o processo de onboarding de novos clientes. Após a assinatura do contrato, os clientes manifestam frustração ao descobrir que o desconto não é aplicado imediatamente. |
| **Evidência** | *"Assinei o contrato achando que o desconto já valeria no mês seguinte. Ninguém me avisou que teria que esperar meses para aparecer na fatura."* |
| **Prioridade MoSCoW** | MUST |
| **Impacto no Negócio** | Aumenta a taxa de cancelamento nos primeiros meses de contrato, período em que o cliente ainda não visualiza valor real no serviço. Também prejudica o NPS e a imagem da Bulbe, pois a falta de transparência sobre prazos operacionais da CEMIG é interpretada como falha na comunicação da empresa. |

**Descrição:**
Após a contratação, existe um período de espera necessário para que a CEMIG realize a migração do cliente para o modelo de compensação de energia da Bulbe. Esse prazo, que varia conforme a distribuidora, não é de controle direto da Bulbe, mas também não é comunicado de forma proativa durante o processo comercial. A ausência dessa informação gera surpresa negativa e sensação de promessa não cumprida logo no início da jornada do cliente.

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
| **Título** | Otimização dos canais e fluxos de comunicação com o cliente |
| **Origem** | Através de diagnóstico realizado pela squad junto ao time de suporte, identificou-se uma lacuna crítica na fluidez do diálogo com o usuário final, resultando em uma experiência de atendimento limitada e reativa. |
| **Evidência** | *"Cancelei meu plano após não obter respostas da empresa. Tentei contato diversas vezes sem sucesso."* |
| **Prioridade MoSCoW** | SHOULD |
| **Impacto no Negócio** | Impacta diretamente na retenção, pois a ausência de retorno gera a percepção de abandono e descaso. Além disso, prejudica o LTV e a reputação da marca no mercado, dificultando a aquisição orgânica por meio de indicações. |

**Descrição:**
O cenário atual apresenta um gargalo no suporte da Bulbe, onde a falta de agilidade e clareza nas respostas impede a resolução eficaz de problemas dos assinantes. No protótipo atual, essa demanda aparece como direcionamento de experiência e ainda não possui uma tela específica de atendimento implementada.

---

### D-05 · O aplicativo não tem acessibilidade e informação suficiente

| Campo | Conteúdo |
|---|---|
| **ID** | D-05 |
| **Título** | O aplicativo não tem acessibilidade e informação suficiente |
| **Origem** | Após questionamento da equipe, foi identificado que uma das maiores dificuldades é fazer com que o cliente use o aplicativo. |
| **Evidência** | *"Não tinha informações suficientes pelo aplicativo para contratar uma empresa" e "Para quem ainda não é cliente o aplicativo não tinha uso"* |
| **Prioridade MoSCoW** | SHOULD |
| **Impacto no Negócio** | Perda de conversão de novos usuários e baixa retenção, pois o app falha em sanar as dores iniciais e não gera interesse na contratação. |

**Descrição:**
A demanda foca na necessidade de transformar o aplicativo em uma ferramenta de captação e suporte, não apenas de uso restrito a quem já é cliente. No código atual, essa necessidade é endereçada pelas telas públicas de introdução, usinas, histórias reais e informações de ativação.

---

### D-06 · Nossos clientes não entendem o funcionamento da empresa

| Campo | Conteúdo |
| :--- | :--- |
| **ID** | D-06 |
| **Título** | Nossos clientes não entendem o funcionamento da empresa |
| **Origem** | Relatos de reuniões indicam que a maioria dos clientes (públicos C e D) não compreende o modelo de negócio da empresa, o que gera desconfiança e impede a assinatura de novos contratos com a Bulbe. |
| **Evidência** | *"Eu até tenho interesse, mas não entendi direito como esse desconto aparece na minha conta... tenho medo de acabar pagando mais em vez de economizar."* |
| **Prioridade MoSCoW** | COULD |
| **Impacto no Negócio** | Impacta diretamente a taxa de conversão no final do funil de vendas, tornando a previsibilidade de receita e a competitividade no mercado. A falta de clareza força a empresa a investir mais em marketing e força comercial para converter cada cliente, aumentando o custo de aquisição (CAC). |

**Descrição:**
A demanda consiste em tornar o funcionamento do serviço mais claro e acessível para os públicos C e D. É necessário simplificar a comunicação, utilizando uma linguagem menos técnica e canais mais diretos para explicar como o desconto é gerado na conta de energia. O foco é reduzir a insegurança durante a jornada de compra e aumentar a confiança do cliente no momento da decisão, facilitando o fechamento de novos contratos.

---

## 3. Personas


### Persona 1 — Luciana

```
┌─────────────────────────────────────────────────────────────┐
│  👤  Luciana, 43 anos                                       │
│      Caixa de supermercado · Norte de Minas                  │
└─────────────────────────────────────────────────────────────┘
```

| Atributo | Descrição |
|---|---|
| **Perfil** | Adulta que busca reduzir custos mensais e ter mais previsibilidade financeira |
| **Escolaridade** | Ensino Superior Incompleto |
| **Familiaridade com tecnologia** | Baixa |
| **Dispositivo principal** | Android |

**Objetivos:**
- Economizar dinheiro, pagando uma conta de energia mais barata.
- Entender o serviço sem precisar lidar com termos técnicos ou etapas confusas.

**Frustrações:**
- Dificuldade em usar aplicativos complicados ou com muitas etapas.
- Medo de golpes ou plataformas que não sejam confiáveis.

**Citação representativa:**
> *"Eu só quero algo que funcione fácil e que me ajude a economizar um dinheiro no final do mês, sem dor de cabeça."*

**Relevância para o Projeto:**
A Luciana representa um público que precisa de clareza, simplicidade e segurança para confiar na solução. Projetar pensando nela ajuda a manter a interface objetiva, visual e acessível para usuários menos experientes.

---

### Persona 2 — Eduardo
```
┌─────────────────────────────────────────────────────────────┐
│  👤  Eduardo, 27 anos                                      |
│      Engenheiro de Software na Google · São Paulo           │
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

### Tabela Resumo

| ID | Persona | Título | Prioridade | Status no Protótipo |
|---|---|---|---|---|
| US-01 | José Carlos | Clareza sobre déficit de geração e variação do desconto | Alta | Implementada |
| US-02 | Eduardo | Transparência sobre o período de espera | Alta | Implementada |
| US-03 | Eduardo | Transparência e Acompanhamento de Faturas | Alta | Implementada |
| US-04 | Pedro | Transparência no Atendimento e Resolução de Dúvidas | Média | Protótipo feito |
| US-05 | José Carlos | Área Pública de Informações e Atração de Clientes | Média | Implementada |
| US-06 | José Carlos | Nossos clientes não entendem o funcionamento da empresa | Baixa | Implementada |


---

### US-01 · Clareza sobre déficit de geração e variação do desconto

> **Como** José Carlos, um consumidor que busca economizar na conta de luz, mas precisa confiar que a economia prometida vai realmente acontecer de forma compreensível e previsível,
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

> **Como** Eduardo, um possível cliente,
> **quero** visualizar de forma clara, antes da contratação, que o desconto da Bulbe começa após o período de espera de homologação e entender o motivo desse prazo,
> **para que** eu possa decidir com segurança se desejo assinar o serviço, sem me sentir enganado ou surpreso depois da adesão.

**Demanda relacionada:** D-02
**Estimativa de esforço:** P

**Critérios de Aceitação:**
- [ ] O site deve informar, antes da confirmação da assinatura, que o benefício não é ativado imediatamente e que existe um período de espera de cerca de 90 dias.
- [ ] A interface deve explicar de forma simples que esse prazo decorre de uma regra/processo da CEMIG, e não de uma escolha arbitrária da Bulbe.

**Notas Técnicas:**
A user story foca exclusivamente na camada de comunicação e transparência no frontend. Não inclui alteração no prazo real do processo nem integração com sistemas da CEMIG. O objetivo é reduzir insegurança e cancelamentos causados por expectativa incorreta sobre o início do benefício.

---

### US-03 · Transparência e Acompanhamento de Faturas

>**Como** Eduardo, um engenheiro de software cauteloso que tem dúvidas sobre confiar o pagamento da conta de luz a uma empresa nova,
>**quero** saber se é possível visualizar o status de processamento do meu contrato e as confirmações de pagamento da CEMIG,
>**para que** eu tenha certeza absoluta de que minhas contas fiquem em dia e elimine minhas dúvidas sobre a Bulbe.

**Demanda relacionada:** D-03
**Estimativa de esforço:** M (Média)

**Critérios de Aceitação:**

- [ ] O app deve disponibilizar uma tela onde o Eduardo visualize a etapa atual do seu contrato (ex: em análise, aguardando compensação, ativo).
- [ ] Deve haver uma seção de "Histórico de Pagamentos" que mostre o comprovante ou a confirmação de quitação da fatura junto à CEMIG.

**Notas técnicas:**
Usar linguagem simples e visual (cards ou timeline) para tornar claro para qualquer cliente. Validar com produto/comercial o fluxo real de atualização de status CEMIG e frequência de sincronização. Incluir estados de fallback para dados ausentes (“Ainda não há histórico de pagamento”, “Confira novamente em alguns minutos”) e tratamento de erros de conexão/API (retry, mensagem clara e botão de re-tentativa).

---

### US-04 · Transparência no Atendimento e Resolução de Dúvidas

>**Como** Pedro, um assinante que já teve experiências ruins com falta de retorno de empresas,
>**quero** ter acesso a um canal de comunicação claro e um histórico de suporte dentro da plataforma,
>**para que** eu não me sinta abandonado pela Bulbe e tenha segurança de que minhas solicitações estão sendo tratadas, evitando o cancelamento por falta de suporte.

**Demanda relacionada:** D-04
**Estimativa de esforço:** M (Média)

**Critérios de Aceitação:**
- [ ] O sistema deve disponibilizar um canal direto de atendimento (chat ou abertura de chamado) facilmente localizável.
- [ ] O usuário deve conseguir visualizar o status atual de sua solicitação e o histórico de interações anteriores.
- [ ] A plataforma deve informar o prazo estimado para resposta, garantindo que o cliente saiba quando será atendido.

**Notas técnicas:**
O foco deve ser a reversão da percepção de "péssimo suporte" citada nos feedbacks. É essencial que o fluxo de comunicação seja transparente, mostrando que a empresa recebeu a demanda. Pode ser necessária integração com ferramenta de CRM/Suporte para espelhar as respostas no painel do usuário. Recomenda-se incluir uma área de "Dúvidas Frequentes" dinâmica para resolver problemas comuns sem necessidade de interação humana imediata.

---

### US-05 · Área Pública de Informações e Atração de Clientes

> **Como** José Carlos técnico de manutenção, morador da região metropolitana,
> **quero** ter acesso a uma área não logada no aplicativo da Bulbe com exemplificações de clientes antigos, com suas experiências reais, descontos aplicados e avaliação da empresa,
> **para que** eu possa conhecer a confiabilidade da empresa, entender como funciona a economia de energia oferecida e sentir segurança para me tornar um cliente.

**Demanda relacionada:** D-05
**Estimativa de esforço:** M

**Critérios de Aceitação:**
- [ ] O aplicativo deve permitir o acesso a uma área de conteúdo informativo sem exigir login ou cadastro prévio.
- [ ] Esta área deve conter uma seção de "Histórias Reais", com experiências específicas de cada cliente.
- [ ] A interface deve ser projetada com foco em simplicidade e usabilidade para dispositivos no geral.

**Notas técnicas:**
Criar uma tela de apresentação que apareça logo que o usuário abrir o app, antes de pedir a senha. O conteúdo deve focar mais em desenhos, ícones e vídeos curtos do que em textos longos, já que o público quer entender tudo rápido. A parte dos depoimentos deve ser fácil de atualizar pela equipe sem precisar lançar uma versão nova do aplicativo na loja toda vez.

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

> ⚠️ **Rastreabilidade:** As funcionalidades abaixo foram atualizadas conforme o código existente em `src/pages`, `src/css` e `src/js`. O projeto é um protótipo frontend estático, sem back-end e sem banco de dados.

### 5.1 Mapa de Funcionalidades

| ID | Funcionalidade | US Relacionada | MoSCoW | Sprint |
|---|---|---|---|---|
| F-01 | Fluxo público de introdução à Bulbe | US-05, US-06 | Must Have | Sprint 1 |
| F-02 | Cards expansíveis explicando como funciona a geração de créditos | US-06 | Must Have | Sprint 1 |
| F-03 | Tela de usinas ativas e créditos gerados | US-01, US-05 | Should Have | Sprint 2 |
| F-04 | Tela de histórias reais de clientes | US-05 | Should Have | Sprint 2 |
| F-05 | Linha do tempo informativa da homologação | US-02 | Must Have | Sprint 2 |
| F-06 | Acompanhamento visual da ativação da conta | US-02, US-03 | Must Have | Sprint 3 |
| F-07 | Simulador de progresso da ativação | US-02, US-03 | Should Have | Sprint 3 |
| F-08 | Tela de fatura e repasse para a CEMIG | US-03 | Must Have | Sprint 3 |

### 5.2 Descrição das Funcionalidades Must Have

#### F-01 · Fluxo público de introdução à Bulbe

**Descrição:**
Fluxo composto pelas telas `preview.html`, `intro-bulbe.html`, `usinas.html`, `experiencia.html` e `info-ativacao.html`. Ele apresenta a proposta da Bulbe, explica o funcionamento dos créditos solares e permite navegar por informações públicas sem login.

**Comportamento esperado:**
1. O usuário acessa `src/pages/preview.html`.
2. A tela lista a sequência do fluxo e permite abrir cada página.
3. O usuário navega por introdução, usinas, histórias reais e informações de ativação.

**Restrições e regras de negócio:**
- O fluxo usa dados fixos no HTML.
- Não há autenticação real.
- As telas devem ser executadas a partir da raiz do repositório para preservar caminhos absolutos usados em alguns arquivos.

---

#### F-02 · Cards expansíveis explicando como funciona a geração de créditos

**Descrição:**
Na tela `intro-bulbe.html`, cards informativos explicam as etapas de geração nas usinas Bulbe, injeção na rede da CEMIG, conversão em créditos e economia mensal.

**Comportamento esperado:**
1. O usuário clica em um card.
2. O JavaScript abre o conteúdo do card selecionado.
3. Os demais cards são fechados para manter a leitura organizada.

**Restrições e regras de negócio:**
- A interação é controlada por `src/js/intro-bulbe.js`.
- O conteúdo é estático e não depende de API.

---

#### F-05 · Linha do tempo informativa da homologação

**Descrição:**
A tela `info-ativacao.html` explica o prazo regulatório e organiza a homologação em etapas: contrato assinado, análise documental, homologação técnica, ativação dos créditos e economia garantida.

**Comportamento esperado:**
1. O usuário acessa a tela de ativação pela navbar pública.
2. A tela apresenta o aviso de prazo regulatório.
3. O usuário visualiza a linha do tempo com estados concluído, atual e pendente.

**Restrições e regras de negócio:**
- O prazo exibido no texto da tela informa que a CEMIG tem até 90 dias para homologar a cota de energia.
- A tela é informativa e não consulta status real da distribuidora.

---

#### F-06 · Acompanhamento visual da ativação da conta

**Descrição:**
A tela `ativacao.html` representa a área de espera do cliente, mostrando barra de progresso, círculo de progresso, status atual, etapa atual e lista de etapas da ativação.

**Comportamento esperado:**
1. O usuário acessa a aba Espera.
2. O sistema mostra o progresso inicial em 50%.
3. A interface destaca cadastro concluído, validação concluída, homologação em andamento e créditos pendentes.

**Restrições e regras de negócio:**
- O progresso é simulado em JavaScript.
- Não há persistência de estado ao recarregar a página.

---

#### F-08 · Tela de fatura e repasse para a CEMIG

**Descrição:**
A tela `fatura-e-repasse.html` exibe uma fatura Bulbe paga, o método de pagamento via Pix, data de pagamento e uma timeline de repasse à CEMIG.

**Comportamento esperado:**
1. O usuário acessa a aba Faturas.
2. A tela mostra pagamento confirmado e valor da fatura.
3. A timeline mostra etapas concluídas, em andamento e pendentes.
4. O botão de histórico dispara um alerta demonstrativo.

**Restrições e regras de negócio:**
- Os dados de fatura são estáticos.
- O botão de histórico não abre uma tela real de extrato.
- O botão de voltar usa `window.history.back()`.

---

## 6. Protótipos

### 6.2 Protótipo de Alta Fidelidade

**Link do protótipo interativo em código:** `src/pages/preview.html`

### 6.3 Decisões de Design

| Decisão | Justificativa |
|---|---|
| Paleta baseada na identidade da Bulbe, com azul principal, verde de sucesso e amarelo/laranja para avisos | Mantém consistência visual com a marca e diferencia status de progresso, sucesso e pendência. |
| Interface com largura máxima de 430px | Simula uma experiência mobile/app, coerente com o fluxo de jornada do cliente. |
| Header e navbar inferior padronizados em `global.css` | Garante consistência entre telas e facilita ajustes globais de largura, altura, padding e ícones. |
| Uso de cards, badges e timelines | Facilita leitura rápida de etapas, estados e informações sensíveis como ativação e repasse. |
| Dados estáticos no HTML | Mantém o escopo como protótipo front-end, sem dependência de back-end ou API. |

---

## 7. Código-Fonte

> ⚠️ **Organização:** A estrutura abaixo reflete os arquivos existentes no repositório.

### 7.1 Estrutura de Diretórios

```
bulbe-squad-master/
│
├── docs/                         # Documentação de apoio do projeto
│   ├── Demandas.md
│   ├── Persona1.md
│   ├── Persona2.md
│   ├── Persona3.md
│   └── Persona4.md
│
├── src/                          # Código-fonte do protótipo
│   ├── assets/                   # Imagens e ícones separados por tela
│   │   ├── ativacao-da-sua-conta/
│   │   ├── experiencia-do-cliente/
│   │   ├── fatura-e-repasse/
│   │   ├── info-ativacao/
│   │   └── introducao-bulbe/
│   │
│   ├── css/                      # Estilos globais e estilos por tela
│   │   ├── ativacao.css
│   │   ├── experiencia.css
│   │   ├── fatura-e-repasse.css
│   │   ├── global.css
│   │   ├── info-ativacao.css
│   │   ├── intro-bulbe.css
│   │   ├── preview.css
│   │   ├── styleguide.css
│   │   └── usinas.css
│   │
│   ├── js/                       # Interações por tela
│   │   ├── ativacao.js
│   │   ├── experiencia.js
│   │   ├── fatura-e-repasse.js
│   │   ├── info-ativacao.js
│   │   ├── intro-bulbe.js
│   │   └── usinas.js
│   │
│   └── pages/                    # Páginas HTML do fluxo
│       ├── ativacao.html
│       ├── experiencia.html
│       ├── fatura-e-repasse.html
│       ├── info-ativacao.html
│       ├── intro-bulbe.html
│       ├── preview.html
│       └── usinas.html
│
└── README.md                     # Este arquivo
```

### 7.2 Convenções de Código

| Convenção | Padrão adotado |
|---|---|
| Commits | Uso recorrente de prefixos como `feat:`, `fix:`, `docs:`, `style:`, `refactor:` |
| Branches | Histórico com branches `feat/...`, `fix/...`, `docs/...` e `feature/...` |
| Estilos | Tokens e componentes visuais compartilhados em `src/css/global.css` |
| Assets | Separados por tela dentro de `src/assets/` |
| JavaScript | Arquivos específicos por tela dentro de `src/js/` |

### 7.3 Como Executar o Projeto Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/bernardoalvimibmec/bulbe-squad-master.git

# 2. Acesse a pasta do projeto
cd bulbe-squad-master
```

O projeto não possui dependências npm nem scripts de build. Para visualizar corretamente as páginas, sirva a raiz do repositório com um servidor estático. Uma opção simples é usar a extensão Live Server no VS Code, abrindo a pasta `bulbe-squad-master` como raiz.

Se houver Python instalado e disponível no PATH, também é possível executar:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000/src/pages/preview.html
```

### 7.4 Histórico de Sprints

| Sprint | Período | Objetivo Principal | Status |
|---|---|---|---|
| Sprint 0 | 2 Semanas | Descoberta, levantamento de demandas e organização inicial do projeto | ✅ Concluída |
| Sprint 1 | 2 Semanas | Estruturação das primeiras telas e fluxo de introdução/ativação | ✅ Concluída |
| Sprint 2 | 2 Semanas | Implementação das telas de usinas, experiências, informações de ativação e fatura | ✅ Concluída |
| Sprint 3 | 2 Semanas | Padronização visual, navegação, largura, responsividade e ajustes finais de JS/CSS | ✅ Concluída |

---

## 8. Referências

> ⚠️ **Referências do projeto:** As fontes abaixo combinam referências bibliográficas usadas no processo acadêmico e documentação técnica relacionada às tecnologias efetivamente presentes no repositório.

### Bibliográficas

AQUILES, Alexandre; FERREIRA, Rodrigo. **Controlando versões com Git e GitHub**. São Paulo: Casa do Código, 2020.

COHN, Mike. **User Stories Applied: For Agile Software Development**. Boston: Addison-Wesley, 2004.

COOPER, Alan et al. **About Face: The Essentials of Interaction Design**. 4. ed. Indianapolis: Wiley, 2014.

NIELSEN, Jakob. **Usabilidade na web: projetando websites com qualidade**. Rio de Janeiro: Campus, 2007.

SUTHERLAND, Jeff; SUTHERLAND, J. J. **Scrum: a arte de fazer o dobro do trabalho na metade do tempo**. Rio de Janeiro: Sextante, 2019.

### Fontes de Mercado e Dados

ABSOLAR — Associação Brasileira de Energia Solar Fotovoltaica. **Infográfico ABSOLAR**. Disponível em: https://www.absolar.org.br. Acesso em: 7 jun. 2026.

ANEEL — Agência Nacional de Energia Elétrica. **Geração Distribuída: dados e estatísticas**. Disponível em: https://www.aneel.gov.br. Acesso em: 7 jun. 2026.

Bulbe Energia. **Site institucional**. Disponível em: https://bulbeenergia.com.br. Acesso em: 7 jun. 2026.

### Documentação Técnica

MDN Web Docs. **HTML: HyperText Markup Language**. Disponível em: https://developer.mozilla.org/pt-BR/docs/Web/HTML. Acesso em: 7 jun. 2026.

MDN Web Docs. **CSS: Cascading Style Sheets**. Disponível em: https://developer.mozilla.org/pt-BR/docs/Web/CSS. Acesso em: 7 jun. 2026.

MDN Web Docs. **JavaScript**. Disponível em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript. Acesso em: 7 jun. 2026.

Google Fonts. **Poppins e Inter**. Disponível em: https://fonts.google.com. Acesso em: 7 jun. 2026.

Meyer, Eric A. **Reset CSS**. Disponível em: https://meyerweb.com/eric/tools/css/reset/. Acesso em: 7 jun. 2026.

---

<br>

> 📌 **Nota de integridade acadêmica:**
> Este documento foi produzido pela Squad Master com base em pesquisa, registros do projeto e desenvolvimento próprio. As informações técnicas sobre telas, arquivos, tecnologias e execução local foram revisadas a partir do código existente neste repositório.

---

*Última atualização: 7 de junho de 2026 · Squad Master · Projeto Aplicado I — Ibmec 2026.1*
