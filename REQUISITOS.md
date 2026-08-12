# Levantamento de Requisitos - Bulbe

## Identificação

| Campo | Informação |
| --- | --- |
| Projeto | Bulbe - evolução do frontend e elicitação do backend |
| Disciplina / etapa | Projeto Ciência de Dados II (Projeto de Back-end) - Sprint 1: Elicitação |
| Equipe | Squad Master: Bernardo A. Alvim, Felipe Nunes, Caio Freitas, Davi Edmundo, Luca Bellei e Vinicius |
| Data da análise | 12/08/2026 |
| Fontes analisadas | Todo o conteúdo versionado em `src/`, `docs/` e `README.md`; especificação da equipe; material da Aula 03 - Elicitação de Requisitos Técnicos |
| Estado do produto analisado | Protótipo frontend estático, sem backend, banco de dados ou autenticação real |

### Método e convenções

O levantamento aplica a técnica indicada na Aula 03: análise da documentação existente e observação direta do frontend do Projeto I. Cada requisito funcional ou não funcional relaciona uma funcionalidade observada no frontend ao comportamento técnico esperado do futuro backend. Endpoints e arquitetura não são definidos nesta etapa, pois o contrato de API será tratado posteriormente.

Os status usados são:

- **Confirmado pela equipe:** comportamento solicitado explicitamente na especificação recebida.
- **Identificado no projeto:** comportamento sustentado pelo código ou pela documentação versionada.
- **Sugerido pela análise:** necessidade derivada pelo levantamento, ainda não confirmada.
- **Necessita validação:** há evidência ou necessidade, mas a regra ou o fluxo ainda não está definido.

O material do professor exemplifica prioridade **Alta, Média e Baixa**; portanto, este documento usa essa escala. Alta representa capacidades essenciais, segurança ou integridade dos dados; Média representa suporte relevante à jornada; Baixa representa melhoria futura ou item sem impacto imediato no núcleo do backend. A prioridade deverá ser validada com a equipe e o professor antes da criação do backlog.

## 1. Contexto do projeto

A Bulbe oferece energia solar por assinatura sem instalação de placas no imóvel do cliente. A energia das usinas é injetada na rede, a CEMIG registra a compensação e créditos de energia reduzem o valor devido pelo cliente conforme as condições do serviço.

O Projeto I foi motivado pela falta de confiança, clareza e previsibilidade percebida durante a adesão e o uso do serviço. O frontend procura explicar a relação Bulbe-CEMIG-cliente, o período de homologação, a geração de créditos e o fluxo de pagamento e repasse. A jornada representada é **Descoberta -> Entendimento -> Confiança -> Ativação -> Acompanhamento**.

O Projeto II deve transformar os dados atualmente fixos ou simulados em informações persistentes e confiáveis, sem confundir escolhas visuais - cards, barras, badges ou timelines - com o requisito de negócio subjacente.

## 2. Escopo do sistema

### Dentro do escopo

- Área pública com apresentação do serviço, usinas, histórias de clientes e informações gerais de ativação.
- Tela de Login/Cadastro e navegação dos CTAs públicos para esse fluxo.
- Requisitos futuros de autenticação, sessão e associação entre conta digital e cliente Bulbe, após validação das regras de primeiro acesso.
- Consulta de dados reais de usinas, geração e créditos monetários.
- Consulta do estado real da ativação do cliente e das etapas concluídas, atual e pendentes.
- Consulta de fatura, pagamento e progresso do repasse relacionado à CEMIG.
- Obtenção de depoimentos válidos autorizados pela Bulbe.
- Tratamento seguro, íntegro, responsivo e acessível dos dados exibidos.

### Fora do escopo desta etapa

- Implementar backend, banco de dados, API, endpoints, framework ou integração real.
- Definir o modelo físico do banco de dados.
- Alterar processos operacionais, comerciais ou regulatórios da Bulbe ou da CEMIG.
- Recriar o sistema completo de histórico de faturas da Bulbe; cabe ao projeto apenas redirecionar para o sistema externo quando seu endereço e regras forem fornecidos.
- Transformar a tela informativa de homologação em CRUD sem uma necessidade de negócio validada.
- Implementar Consumo, Indicações, perfil, configurações, ajuda ou atendimento apenas porque esses rótulos aparecem como placeholders.
- Considerar `preview.html`, o simulador por setas ou valores estáticos como fontes de verdade do produto.

## 3. Atores

| Ator | Descrição | Evidência |
| --- | --- | --- |
| Visitante | Pessoa não autenticada que conhece a Bulbe, consulta informações públicas, usinas e histórias e inicia Login/Cadastro. | Navbar pública e telas `intro-bulbe.html`, `usinas.html`, `experiencia.html` e `info-ativacao.html`; US-05 e US-06 no README. |
| Cliente Bulbe | Pessoa cuja conta, ativação, fatura, pagamento e repasse devem ser consultados de forma individualizada. | Telas `ativacao.html` e `fatura-e-repasse.html`; US-02 e US-03. |
| Sistemas internos da Bulbe | Fontes ou serviços corporativos que deverão fornecer cadastro do cliente, usinas, ativação, faturamento, pagamento e repasse. A fonte concreta ainda não foi definida. | Especificação da equipe exige dados reais disponibilizados pela Bulbe; o repositório não contém integração. |
| Sistema/fonte de dados da CEMIG | Ator externo potencial associado à homologação, compensação e confirmação do repasse. Não está confirmado se a comunicação futura será direta ou mediada pela Bulbe. | Textos e timelines em `info-ativacao.html`, `ativacao.html` e `fatura-e-repasse.html`. **Necessita validação.** |

Não há evidência suficiente para formalizar um ator Administrador. O README sugere que depoimentos deveriam ser atualizáveis pela equipe, mas não existe interface administrativa, papel ou permissão implementada.

## 4. Requisitos Funcionais

| ID | Funcionalidade do Frontend (Projeto I) | Requisito técnico derivado (backend/sistema) | Ator | Tela/Fluxo | Prioridade | Origem/Evidência | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RF001 | Área pública navegável | O sistema deve permitir a consulta das telas institucionais sem exigir autenticação. | Visitante | Início, Usinas, Histórias, Info Ativação | Média | US-05; navbar pública nas quatro telas. | Identificado no projeto |
| RF002 | CTA e item Entrar | O sistema deve direcionar os CTAs "Quero meus créditos" e o item "Entrar" para a tela de Login/Cadastro. | Visitante | Início, Usinas, navbar pública | Alta | Solicitação explícita da equipe; implementação isolada na branch `codex/feature-login-cadastro`. | Confirmado pela equipe |
| RF003 | Formulário de Login | O sistema deve permitir que uma conta válida inicie uma sessão autenticada usando as credenciais definidas pela Bulbe. | Cliente Bulbe | Login | Alta | Nova tela solicitada; acesso a dados individualizados de ativação e fatura. O mecanismo de credenciais ainda não foi definido. | Necessita validação |
| RF004 | Cadastro / primeiro acesso | O sistema deve permitir iniciar o fluxo de cadastro ou primeiro acesso conforme a política de elegibilidade que vier a ser aprovada. | Visitante / Cliente Bulbe | Cadastro | Alta | Nova tela solicitada; regra de elegibilidade ainda ausente. | Necessita validação |
| RF005 | Item Sair nos menus | O sistema deve permitir que o cliente encerre a sessão autenticada. | Cliente Bulbe | Menu lateral | Alta | Link "Sair" em `intro-bulbe.html` e `usinas.html`, atualmente com `href="#"`. | Identificado no projeto |
| RF006 | Área individual do cliente | O sistema deve restringir a consulta de ativação, fatura, pagamento, repasse e demais dados pessoais ao cliente autenticado autorizado. | Cliente Bulbe | Área do cliente | Alta | Dados individualizados nas telas de ativação e fatura; ainda não há proteção de rota. | Sugerido pela análise |
| RF007 | Associação da conta digital | O sistema deve associar a conta autenticada ao cadastro correto de cliente Bulbe antes de disponibilizar dados individuais. | Cliente Bulbe / Sistemas Bulbe | Primeiro acesso | Alta | A interface futura precisa saber de qual cliente são ativação e fatura; método de associação não definido. | Necessita validação |
| RF008 | Quatro cards fixos de usina | O sistema deve obter e apresentar a listagem de usinas considerada ativa pela Bulbe, com identificação e localização/região aplicáveis. | Visitante / Sistemas Bulbe | Usinas | Alta | Quatro cards fixos em `usinas.html`: Jandaíba, Montes Claros, Sete Lagoas e Pirapora. | Confirmado pela equipe |
| RF009 | Valor em reais por usina | O sistema deve obter e apresentar, para cada usina, o valor real em reais correspondente aos créditos de energia gerados no período aplicável. | Visitante / Sistemas Bulbe | Usinas | Alta | Valores `R$120,00`, `R$3300,00`, `R$720,00` e `R$1340,00` estão hardcoded. | Confirmado pela equipe |
| RF010 | Card Total gerado | O sistema deve calcular e apresentar o total monetário dos créditos gerados pelas usinas incluídas, a partir dos mesmos dados reais e do mesmo período de referência. | Visitante / Sistemas Bulbe | Usinas | Alta | `R$76.237,00` e texto "este mês" estão fixos no HTML. | Confirmado pela equipe |
| RF011 | Botão Ver todas as usinas | O sistema deve permitir consultar a listagem completa de usinas da Bulbe e os dados de geração/crédito definidos para cada uma. | Visitante / Sistemas Bulbe | Usinas | Média | Botão existe sem listener em `usinas.html`/`usinas.js`. | Confirmado pela equipe |
| RF012 | Dois cards estáticos de histórias | O sistema deve obter e apresentar depoimentos válidos disponibilizados pela Bulbe, sem depender de inserção manual no HTML ou JavaScript. | Visitante / Sistemas Bulbe | Histórias | Média | Cards de Ana Beatriz e Carlos Lopes estão integralmente hardcoded. | Confirmado pela equipe |
| RF013 | Campos dos depoimentos | O sistema deve apresentar, quando autorizados e disponíveis, identificação pública do cliente, localidade, avaliação, economia mensal, dias para ativação, percentual de desconto, tempo de conta ativa e depoimento. | Visitante / Sistemas Bulbe | Histórias | Média | Campos observados em ambos os cards de `experiencia.html`; a equipe confirmou parte deles e o restante foi identificado no código. | Identificado no projeto |
| RF014 | Linha do tempo institucional | O sistema deve permitir consultar o conteúdo explicativo das etapas gerais de homologação. | Visitante | Info Ativação | Baixa | Cinco accordions estáticos em `info-ativacao.html`; não há dado individual nem necessidade atual de backend. | Identificado no projeto |
| RF015 | Progresso inicial fixo em 50% | O sistema deve consultar a situação real da ativação do cliente autenticado. | Cliente Bulbe / Sistemas Bulbe | Espera/Ativação | Alta | `PROGRESSO_INICIAL = 50` e simulador em `ativacao.js`. | Confirmado pela equipe |
| RF016 | Etapas com estado completed | O sistema deve identificar e informar quais etapas da ativação do cliente foram efetivamente concluídas. | Cliente Bulbe / Sistemas Bulbe | Espera/Ativação | Alta | Arrays `ESTADOS_DAS_ETAPAS` e badges "Concluído" simulados no frontend. | Confirmado pela equipe |
| RF017 | Etapa atual | O sistema deve identificar e informar a etapa atual da ativação do cliente e seu estado. | Cliente Bulbe / Sistemas Bulbe | Espera/Ativação | Alta | Campo "Etapa atual" e mapeamento Cadastro/Validação/Homologação/Créditos Ativos. | Confirmado pela equipe |
| RF018 | Etapas pendentes | O sistema deve identificar e informar as etapas de ativação que ainda estão pendentes. | Cliente Bulbe / Sistemas Bulbe | Espera/Ativação | Alta | Badges "Pendente" e arrays locais em `ativacao.js`. | Confirmado pela equipe |
| RF019 | Percentual, barra e círculo simulados | O sistema deve fornecer um estado coerente de ativação para que a interface represente percentual, etapa e badges sem usar controles manuais como fonte de verdade. | Cliente Bulbe / Sistemas Bulbe | Espera/Ativação | Alta | Setas alteram localmente 0, 25, 50, 75 e 100; não há persistência. | Confirmado pela equipe |
| RF020 | CTA Receber atualizações | O sistema deve permitir ao cliente solicitar ou configurar o recebimento de atualizações da ativação pelo canal aprovado. | Cliente Bulbe | Espera/Ativação | Média | Botão existe em `ativacao.html`, sem listener; `info-ativacao.html` promete notificação a cada etapa. | Necessita validação |
| RF021 | Cabeçalho da fatura fixo | O sistema deve obter e apresentar os dados da fatura aplicável ao cliente, incluindo valor, competência/referência e identificador exibível. | Cliente Bulbe / Sistemas Bulbe | Faturas | Alta | Valor `R$ 89,90`, "Março 2025" e `LIC 7134-2` fixos. | Confirmado pela equipe |
| RF022 | Pagamento confirmado/Pix/data | O sistema deve obter e apresentar a situação real do pagamento da fatura, a forma de pagamento quando aplicável e a data/hora correspondente. | Cliente Bulbe / Sistemas Bulbe | Faturas | Alta | "Pagamento confirmado", "Pago via pix" e `15/03/2025` fixos. | Confirmado pela equipe |
| RF023 | Timeline de repasse | O sistema deve obter e apresentar o estado real das etapas de repasse relacionadas à CEMIG, incluindo estados, datas, previsões e mensagens somente quando disponíveis e válidos. | Cliente Bulbe / Sistemas Bulbe / fonte CEMIG | Faturas | Alta | Cinco etapas estáticas em `fatura-e-repasse.html`. | Confirmado pela equipe |
| RF024 | Histórico dispara apenas alert | O sistema deve redirecionar o cliente para o sistema externo de histórico de faturas da Bulbe, sem implementar o histórico completo neste projeto. | Cliente Bulbe | Faturas | Média | Especificação da equipe; hoje o botão só executa `alert(...)`. | Confirmado pela equipe |
| RF025 | Painéis e ícones de notificação | O sistema deve permitir ao cliente consultar notificações relevantes associadas à sua conta, caso esse recurso seja mantido no escopo. | Cliente Bulbe | Cabeçalhos/Notificações | Baixa | Usinas mostra texto fixo "Você não tem novas mensagens"; demais sinos não possuem fluxo. | Sugerido pela análise |

### Observações sobre itens não formalizados como RF

- **Consumo:** há somente um item de navbar com `href="#"`; não existe tela, dados ou comportamento suficiente para definir o requisito.
- **Indicações:** o item direciona para `preview.html`, que é uma página de demonstração, não uma funcionalidade de indicação.
- **Perfil, Configurações e Ajuda:** aparecem apenas como links `#` ou painéis demonstrativos.
- **Administrador/CRUD de conteúdo:** não existe no código. Uma futura gestão de depoimentos depende de decisão de produto.
- **Botão Voltar:** `window.history.back()` é uma solução de navegação do frontend, não um requisito de persistência do backend.

## 5. Requisitos Não Funcionais

| ID | Funcionalidade do Frontend (Projeto I) | Requisito técnico derivado | Categoria | Prioridade | Evidência/Justificativa | Status |
| --- | --- | --- | --- | --- | --- | --- |
| RNF001 | Login e dados pessoais | O sistema deve proteger credenciais e dados pessoais em trânsito e em repouso por mecanismos de segurança compatíveis com o risco; detalhes técnicos serão definidos na arquitetura. | Segurança | Alta | Autenticação e dados de cliente serão introduzidos. | Sugerido pela análise |
| RNF002 | Senhas | O sistema não deve armazenar senhas em texto puro; deve usar mecanismo de derivação/hash e salt reconhecido e aprovado para senhas. | Segurança | Alta | Exemplo explícito do material da Aula 03 e necessidade inerente ao Login. | Sugerido pela análise |
| RNF003 | Área individual | O sistema deve aplicar autenticação e autorização no backend, sem confiar apenas em ocultação ou navegação do frontend. | Segurança/Autorização | Alta | `ativacao.html` e `fatura-e-repasse.html` são públicas hoje e contêm dados individualizados simulados. | Sugerido pela análise |
| RNF004 | Depoimentos e dados de cliente | O tratamento e a exposição de dados pessoais devem respeitar finalidade, minimização, consentimento/base legal e demais obrigações aplicáveis da LGPD. | Privacidade/LGPD | Alta | Nomes, localidades, pagamentos e identificadores aparecem na interface. | Sugerido pela análise |
| RNF005 | Estados de ativação, pagamento e repasse | Os dados apresentados devem preservar integridade e consistência entre fonte, cliente, competência, etapa e horário de atualização. | Integridade/Confiabilidade | Alta | O propósito do produto é aumentar confiança; estados incorretos geram risco financeiro e reputacional. | Confirmado pela equipe |
| RNF006 | Dados externos | O sistema deve informar indisponibilidade, ausência de dados ou falha de atualização sem apresentar valores simulados como reais, e deve oferecer recuperação/retry quando aplicável. | Tratamento de erros | Alta | README/US-03 pede fallback e retry; frontend atual não possui estados de erro. | Identificado no projeto |
| RNF007 | Dados dinâmicos | O sistema deve registrar ou disponibilizar a referência temporal da informação quando a atualidade for relevante; frequência e tolerância de defasagem devem ser validadas. | Atualização de dados | Média | Geração "este mês", datas de pagamento, previsões e etapas dependem de tempo. | Necessita validação |
| RNF008 | Interfaces existentes | A evolução deve preservar comportamento responsivo nas larguras suportadas pelo frontend e em dispositivos móveis. | Responsividade | Média | `viewport`, shells de 430 px e media queries nos CSS. | Identificado no projeto |
| RNF009 | Jornada para público com baixa familiaridade digital | As interfaces e mensagens de erro devem ser compreensíveis, navegáveis por teclado e compatíveis com tecnologias assistivas em critérios a definir. | Acessibilidade/Usabilidade | Média | Personas, D-05 e uso parcial de ARIA; `experiencia.html` atualmente bloqueia zoom. | Identificado no projeto |
| RNF010 | Comunicação frontend-backend | A troca de dados entre frontend e backend deve usar contrato versionado, validação de entradas/saídas e tratamento consistente de respostas; endpoints serão definidos em etapa posterior. | Interoperabilidade/Manutenibilidade | Média | Modelo cliente-servidor e API apresentados na Aula 03; nenhuma API existe hoje. | Sugerido pela análise |
| RNF011 | Fluxos essenciais | Metas mensuráveis de tempo de resposta, disponibilidade e capacidade devem ser definidas antes da implementação; nenhum número é assumido neste documento. | Desempenho/Disponibilidade | Média | Material do professor orienta requisitos mensuráveis, mas o projeto não fornece valores. | Necessita validação |
| RNF012 | Navegação web | O sistema deve manter compatibilidade com os navegadores e versões aprovados pela equipe, a serem definidos, sem depender de caminhos absolutos locais. | Compatibilidade | Baixa | `experiencia.html` usa caminhos iniciados em `/src/`; matriz de navegadores inexistente. | Necessita validação |

## 6. Regras de Negócio

| ID | Regra | Relacionada a | Evidência | Status |
| --- | --- | --- | --- | --- |
| RN001 | Todo CTA público com intenção "Quero meus créditos" e o item "Entrar" devem iniciar o fluxo de Login/Cadastro. | RF002 | Solicitação explícita da equipe. | Confirmado pela equipe |
| RN002 | O valor exibido para uma usina deve corresponder à geração/créditos daquela mesma usina e ao período informado. | RF008, RF009 | Especificação da equipe. | Confirmado pela equipe |
| RN003 | O Total gerado deve ser derivado das usinas incluídas, do mesmo período e dos mesmos critérios de conversão, sem valor fixo no frontend. | RF010 | Especificação da equipe. | Confirmado pela equipe |
| RN004 | Período, unidade, arredondamento e fórmula de conversão entre kWh/créditos e reais devem ser definidos pela Bulbe antes do cálculo monetário. | RF009, RF010 | Não há regra no repositório. | Necessita validação |
| RN005 | Depoimento somente pode ser publicado com conteúdo válido e tratamento de identidade compatível com autorização, consentimento ou anonimização definidos pela Bulbe. | RF012, RF013; RNF004 | Dados pessoais completos aparecem nos cards. | Necessita validação |
| RN006 | Uma etapa de ativação só pode ser marcada como concluída quando a fonte oficial indicar que o processo correspondente foi concluído. | RF015-RF019 | Solicitação explícita; frontend permite simulação manual. | Confirmado pela equipe |
| RN007 | As etapas devem respeitar a ordem e os estados oficiais do processo de ativação; o mapeamento atual de 0/25/50/75/100 não é uma regra confirmada. | RF016-RF019 | `ativacao.js` usa marcos arbitrários e repete Homologação em 50 e 75. | Necessita validação |
| RN008 | A comunicação pública informa até 90 dias para homologação pela CEMIG, mas o prazo, início da contagem e exceções devem ser validados antes de serem tratados como regra operacional. | RF014-RF019 | `info-ativacao.html` e README/US-02. | Necessita validação |
| RN009 | Um pagamento só pode ser apresentado como confirmado quando houver registro efetivo do pagamento aplicável àquela fatura e cliente. | RF021, RF022 | Solicitação explícita da equipe. | Confirmado pela equipe |
| RN010 | Uma etapa de repasse só pode ser apresentada como concluída quando houver informação correspondente da fonte oficial. | RF023 | Solicitação explícita da equipe. | Confirmado pela equipe |
| RN011 | O histórico completo de faturas pertence a sistema externo; o projeto apenas efetua o redirecionamento aprovado. | RF024 | Escopo definido pela equipe. | Confirmado pela equipe |
| RN012 | O cliente autenticado só pode consultar dados associados ao seu próprio cadastro ou a contas para as quais possua autorização. | RF006, RF007; RNF003 | Necessidade de segregação dos dados individualizados. | Sugerido pela análise |
| RN013 | A elegibilidade para primeiro acesso, os dados de validação e a possibilidade de cadastro aberto não podem ser definidos pelo frontend. | RF004, RF007 | Questão explicitamente deixada em aberto pela equipe. | Necessita validação |

## 7. Dados e entidades identificados

Este levantamento não define tabelas, chaves ou modelo físico.

| Entidade | Principais dados aparentes | Utilizada em | Evidência | Necessita validação? |
| --- | --- | --- | --- | --- |
| Usuário/Conta digital | identificador, e-mail, estado da conta, vínculo com cliente | Login, primeiro acesso, sessão | Nova tela solicitada | Sim: identidade e ciclo de vida |
| Cliente | identificador Bulbe, nome/dados mínimos, unidades consumidoras ou vínculos autorizados | Ativação, faturas, pagamentos | Dados precisam ser individualizados | Sim: identificador oficial e cardinalidade |
| Credencial/Sessão | credencial protegida, início, expiração, revogação | Login, logout, autorização | Fluxo futuro de autenticação | Sim: política de sessão |
| Usina | identificador, nome, região/localização, estado ativo | Usinas | Quatro cards fixos | Sim: catálogo e campos oficiais |
| Geração | usina, período, quantidade/unidade, data de atualização | Usinas/Total gerado | Valores de geração/créditos devem vir da Bulbe | Sim: granularidade e unidade |
| Crédito de energia | origem/usina, período, quantidade, valor monetário, regra de conversão | Usinas, consumo/fatura potencial | Valores em reais e descrição "em crédito" | Sim: relação com geração e cliente |
| Ativação | cliente, situação geral, início, atualização, previsão | Espera/Ativação | Progresso local de 0 a 100 | Sim: estados oficiais e fonte |
| Etapa de ativação | tipo, ordem, estado, datas e mensagem | Espera/Ativação | Cadastro, Validação, Homologação, Créditos ativos | Sim: catálogo e transições |
| Fatura | cliente, identificador, competência, valor, situação | Faturas | `LIC 7134-2`, março/2025, R$ 89,90 | Sim: origem e campos oficiais |
| Pagamento | fatura, situação, forma, data/hora, referência | Faturas | Pagamento confirmado via Pix | Sim: estados e confirmação |
| Repasse | fatura/pagamento, situação geral, valores, previsão, confirmação CEMIG | Faturas | Timeline de repasse | Sim: relação e fonte oficial |
| Etapa de repasse | tipo, ordem, estado, data/hora, previsão, mensagem | Faturas | Cinco etapas fixas | Sim: catálogo oficial |
| Depoimento/Experiência | identidade pública, localidade, avaliação, economia, ativação, desconto, tempo ativo, texto, autorização | Histórias | Dois cards estáticos | Sim: consentimento e publicação |
| Notificação | destinatário, evento, canal, conteúdo, data, leitura/entrega | Ativação, cabeçalhos | Sinos, painel e CTA de atualizações | Sim: funcionalidade e canais |

Entidades **Consumo** e **Indicação** são candidatas, não confirmadas: seus nomes aparecem somente na navegação e não há dados ou comportamento que sustentem um modelo nesta etapa.

## 8. Integrações externas identificadas

| Dependência potencial | Dados/serviços esperados | Situação atual | Limite/observação |
| --- | --- | --- | --- |
| Cadastro/autenticação da Bulbe | elegibilidade, vínculo cliente-conta, autenticação e sessão | Inexistente | Fonte e política ainda a definir; não se presume que seja uma API. |
| Dados de usinas da Bulbe | catálogo, estado, região, geração, créditos e período | HTML estático | Fonte externa de dados ainda a ser definida. |
| Processo de ativação/homologação | ativação do cliente, etapas, estados, datas e previsões | Simulador JavaScript | Pode vir de sistema interno ou integração; origem ainda a definir. |
| Faturamento e pagamentos da Bulbe | fatura, valor, competência, pagamento, método e data | HTML estático | Fonte externa de dados ainda a ser definida. |
| CEMIG ou serviço intermediário | homologação, recebimento de repasse e confirmação de créditos | Apenas narrativa no frontend | Validar se haverá acesso direto ou se a Bulbe consolidará os dados. |
| Sistema externo de histórico de faturas | URL/identificação e autorização para consulta | Botão mostra apenas alerta | A implementação do histórico está fora do escopo. |
| Serviço de notificações (potencial) | preferências, eventos e entrega por canal | Botões sem fluxo | Só integrar após validar canais e consentimento. |

## 9. Dados atualmente mockados/hardcoded

| Tela | Dado/controle atual | Como funciona hoje | Comportamento futuro necessário |
| --- | --- | --- | --- |
| Preview | Sequência de seis telas | Página estática de demonstração | Manter apenas como apoio de desenvolvimento; não é parte da regra do produto. |
| Início | Explicações, percentuais e CTA | Conteúdo fixo; CTA é botão sem navegação na `main` | Conteúdo pode permanecer institucional; CTA deve abrir Login/Cadastro. Validar discrepância entre 15% e "até 25%". |
| Início/Usinas | Menu, perfil, configurações, ajuda e sair | Links `#` e painéis locais | Não tratar como funcionalidade até definir escopo; logout deverá encerrar sessão se mantido. |
| Usinas | Jandaíba, Montes Claros, Sete Lagoas e Pirapora; regiões | Quatro cards escritos no HTML | Obter catálogo real da fonte Bulbe. |
| Usinas | R$ 120,00; R$ 3.300,00; R$ 720,00; R$ 1.340,00 | Valores fixos e sem período individual | Obter geração/crédito real por usina e período. |
| Usinas | Total R$ 76.237,00 "este mês" | Valor fixo que não corresponde à soma visível dos quatro cards | Calcular com dados reais, período e critérios comuns. |
| Usinas | Ver todas as usinas | Botão sem listener | Consultar/exibir listagem completa real. |
| Usinas | "Você não tem novas mensagens" e "Olá, Usuário!" | Painéis controlados apenas por classes JS | Consultar dados do cliente se notificações/perfil entrarem no escopo. |
| Histórias | Ana Beatriz e Carlos Lopes | Dois cards integralmente escritos no HTML | Obter depoimentos válidos e autorizados. |
| Histórias | Nome, cidade, estrelas, economia, 52/68 dias, 15%, 8/6 meses e textos | Todos os campos são fixos | Obter campos reais, aplicar consentimento/minimização e estados para ausência de dados. |
| Info Ativação | Cinco etapas e marcadores concluído/atual/pendente | Timeline institucional fixa; accordions locais | Pode permanecer estática; não usar seus marcadores como estado de um cliente. |
| Info Ativação | "até 90 dias" e promessa de notificação | Texto fixo | Validar prazo e canais; somente notificações exigiriam backend. |
| Espera/Ativação | 50%, Homologação e Em análise | Estado inicial constante no JS | Consultar a ativação real do cliente. |
| Espera/Ativação | Setas 0/25/50/75/100 | Alteram DOM e badges manualmente; recarga volta a 50% | Remover como fonte de verdade em produção e alimentar UI por dados oficiais. |
| Espera/Ativação | Cadastro, Validação, Homologação e Créditos ativos | Arrays locais definem concluído/atual/pendente | Obter etapas e estados oficiais. |
| Espera/Ativação | Receber atualizações | Botão sem comportamento | Definir preferência, canal, consentimento e entrega, ou remover. |
| Faturas | R$ 89,90; Março 2025; LIC 7134-2 | Cabeçalho fixo | Consultar a fatura correta do cliente. |
| Faturas | Pagamento confirmado, Pix, 15/03/2025 | Texto fixo | Consultar situação, forma e data reais. |
| Faturas | Cinco etapas, datas e previsões de repasse | Timeline fixa no HTML | Consultar estado real e exibir somente eventos confirmados. |
| Faturas | Ver históricos de faturas | `alert(...)` demonstrativo; não redireciona | Redirecionar ao sistema externo aprovado. |
| Consumo | Item de navegação | `href="#"`; nenhuma tela | Necessidade e escopo a validar. |
| Indicações | Item de navegação | Abre `preview.html`; nenhuma funcionalidade | Necessidade e escopo a validar. |

Não foram encontrados `localStorage`, `sessionStorage`, arquivos JSON, chamadas `fetch`/XHR, cliente de API ou persistência. Todo estado mutável atual existe apenas no DOM/memória da página.

## 10. Matriz Tela x Necessidade de Backend

| Tela/fluxo | Necessita backend? | Dados/serviços necessários | Motivo |
| --- | --- | --- | --- |
| Preview | Não | Nenhum | Índice demonstrativo das telas. |
| Início/Apresentação | Não para o conteúdo; sim para o destino autenticado | Login/Cadastro | Conteúdo e accordions são institucionais; CTA inicia acesso. |
| Login/Cadastro | Sim, futuramente | identidade, credenciais, elegibilidade, vínculo e sessão | A branch de tela não implementa autenticação real. |
| Usinas | Sim | catálogo, geração, créditos, período e cálculo total | Todos os dados são fixos e a listagem completa não funciona. |
| Histórias | Sim para atualização dinâmica | depoimentos, métricas e autorização de publicação | Os dois cards são estáticos. Um conteúdo institucional fixo não exigiria backend, mas não atende ao requisito confirmado de dados válidos da Bulbe. |
| Info Ativação | Não, no escopo atual | conteúdo institucional | Accordions e timeline apenas explicam o processo. CMS ou notificações seriam escopos adicionais. |
| Espera/Ativação | Sim | ativação individual, etapas, estados, datas/previsões e atualização | Estado atual é um simulador local. |
| Faturas/Repasse | Sim | fatura, pagamento, eventos de repasse e confirmação | Todos os dados são fixos. |
| Histórico de faturas | Apenas redirecionamento | URL/contexto/autorização do sistema externo | Sistema completo pertence à Bulbe e está fora do escopo. |
| Consumo | Indeterminado | Nenhum requisito confirmado | Só existe o rótulo na navbar. |
| Indicações | Indeterminado | Nenhum requisito confirmado | Só existe o rótulo e um link para preview. |
| Perfil/Configurações/Ajuda | Indeterminado | Nenhum requisito confirmado | Links e painéis são placeholders. |
| Notificações | Sim, se aprovada | eventos, preferências, entrega e leitura | Elementos visuais existem, mas o fluxo não foi definido. |

## 11. Rastreabilidade

| Requisito | Tela | Elemento do frontend | Arquivo relevante |
| --- | --- | --- | --- |
| RF001-RF002 | Área pública | Navbar e CTAs | `src/pages/intro-bulbe.html`, `usinas.html`, `experiencia.html`, `info-ativacao.html` |
| RF003-RF007 | Autenticação | Entrar, Cadastro/primeiro acesso, Sair e dados individuais | Especificação da equipe; branch `codex/feature-login-cadastro`; menus nas páginas públicas |
| RF008-RF011 | Usinas | Cards, valores, Total gerado e botão Ver todas | `src/pages/usinas.html`, `src/js/usinas.js` |
| RF012-RF013 | Histórias | Dois cards de clientes e métricas | `src/pages/experiencia.html`, `src/js/experiencia.js` |
| RF014 | Info Ativação | Cinco etapas/accordions e prazo | `src/pages/info-ativacao.html` |
| RF015-RF020 | Espera/Ativação | Percentual, etapa, badges, setas e CTA de atualizações | `src/pages/ativacao.html`, `src/js/ativacao.js` |
| RF021-RF024 | Faturas | Cabeçalho, pagamento, timeline e histórico | `src/pages/fatura-e-repasse.html`, `src/js/fatura-e-repasse.js` |
| RF025 | Notificações | Sinos e painel de mensagens | Cabeçalhos das páginas; `src/pages/usinas.html` |
| RNF001-RNF004 | Acesso/dados pessoais | Login futuro e dados individualizados | Especificação; ativação, fatura e histórias |
| RNF005-RNF007 | Dados dinâmicos | Estados, datas, valores e fallbacks | `README.md` US-03 e todas as telas dinâmicas |
| RNF008-RNF009 | Interface | CSS responsivo, viewport e ARIA parcial | `src/css/*.css`, `src/pages/*.html`, D-05/personas |
| RNF010-RNF012 | Arquitetura futura/compatibilidade | Ausência de API e caminhos locais | Aula 03, busca integral em `src/` |

## 12. Pontos que necessitam validação

1. Qual é a política de primeiro acesso: cadastro aberto ou exclusivo para clientes já cadastrados na Bulbe?
2. Quais dados confirmarão a identidade e como a conta digital será associada ao cliente e às suas unidades consumidoras?
3. Haverá recuperação de acesso, verificação de e-mail, bloqueio e/ou autenticação adicional? Quais regras se aplicam?
4. Quais sistemas serão as fontes oficiais de clientes, usinas, geração, créditos, ativação, faturas, pagamentos e repasses?
5. O backend consultará a CEMIG diretamente ou receberá dados consolidados dos sistemas da Bulbe?
6. Qual é o catálogo completo de usinas e quais dados podem ser públicos?
7. Qual período deve ser usado no valor por usina e no Total gerado?
8. Qual unidade de origem, regra de conversão kWh/crédito para reais, arredondamento e moeda devem ser usados?
9. O Total gerado abrange todas as usinas, apenas as ativas ou somente as visíveis/selecionadas?
10. Qual é a frequência de atualização e qual defasagem pode ser comunicada para cada conjunto de dados?
11. Existe autorização/base legal para publicar depoimentos, nomes, localidades, avaliações e valores de economia? Haverá anonimização?
12. O percentual de economia institucional é 15% ou "até 25%"? O repositório contém ambos.
13. Quais são os estados oficiais, a ordem, os critérios de transição e as datas da ativação?
14. Como se inicia e termina a contagem do prazo de até 90 dias e quais exceções devem ser comunicadas?
15. Qual evento e sistema confirmam pagamento; quais formas e estados possíveis existem?
16. Quais são exatamente as etapas e os estados do repasse à CEMIG, e qual fonte confirma cada conclusão?
17. Qual é a URL e o mecanismo de autorização/contexto para o histórico externo de faturas?
18. O CTA "Receber atualizações" e os sinos permanecerão? Quais canais, preferências, eventos e consentimentos serão suportados?
19. Consumo, Indicações, Perfil, Configurações, Ajuda e atendimento entrarão no escopo do Projeto II?
20. Quais metas mensuráveis de desempenho, disponibilidade, acessibilidade, navegadores suportados, retenção e auditoria serão exigidas?
21. Qual prioridade final será atribuída a cada item após validação com a equipe e o professor?

## 13. Requisitos adicionais identificados durante a análise

Os itens abaixo não foram fornecidos como requisitos confirmados. Eles aparecem nas tabelas com status **Sugerido pela análise** ou **Necessita validação**.

| Requisito sugerido | Evidência | Motivo | Validação necessária |
| --- | --- | --- | --- |
| Autorização no backend e segregação por cliente (RF006/RN012/RNF003) | Páginas individuais hoje são acessíveis por URL | Impedir exposição ou troca de dados entre clientes | Modelo de identidade, papéis e vínculos |
| Associação entre conta digital e cliente Bulbe (RF007) | Login precisa localizar ativação/faturas corretas | Autenticar não basta para identificar o registro de negócio | Chave de associação e fluxo de confirmação |
| Consulta de notificações (RF025) | Sinos, painel fixo e CTA sem ação | Elementos prometem comportamento futuro | Decidir se fica no escopo e quais canais |
| Fallback e recuperação de falhas (RNF006) | README/US-03 e ausência total de estados de erro | Evitar que ausência de integração pareça pagamento/ativação real | Mensagens, retry, monitoramento e suporte |
| Referência temporal dos dados (RNF007) | "este mês", datas e previsões | Usuário precisa saber quão atual é a informação | Frequência e tolerância por fonte |
| Contrato versionado frontend-backend (RNF010) | Aula 03 define API como contrato, mas não há integração | Reduzir divergência entre telas e dados | Será detalhado na etapa de requisitos de API |
| Metas operacionais mensuráveis (RNF011) | Material acadêmico exemplifica desempenho/capacidade | RNF deve ser verificável, sem números arbitrários | Definir valores com professor/Bulbe |

## 14. Síntese quantitativa

| Item | Quantidade |
| --- | ---: |
| Requisitos funcionais | 25 |
| Requisitos não funcionais | 12 |
| Regras de negócio | 13 |
| Entidades identificadas | 14 |
| Entidades candidatas não confirmadas | 2 |
| Integrações/dependências potenciais | 7 |
| Pontos de validação | 21 |

## 15. Revisão final

- Os requisitos foram confrontados com HTML, CSS, JavaScript, README e documentação em `docs/`.
- Soluções visuais foram separadas das necessidades: por exemplo, a barra de progresso é interface; consultar o estado real da ativação é o requisito.
- Valores e controles mockados foram registrados, inclusive itens sem listener e links `#`.
- Fatos, sugestões e dúvidas usam status distintos.
- Nenhuma API, endpoint, framework, banco de dados ou integração inexistente foi afirmada.
- O histórico completo de faturas permanece fora do escopo.
- Consumo, Indicações e Administração não foram transformados em requisitos sem evidência suficiente.
- Foram registradas contradições e lacunas, como 15% versus até 25%, total que não corresponde aos cards visíveis e fluxo externo de histórico ainda não implementado.
