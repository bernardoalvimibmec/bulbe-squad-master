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

Nesse contexto, a Bulbe Energia atua com um modelo de assinatura em que a energia é gerada em usinas solares, injetada na rede da CEMIG e convertida em créditos para os assinantes. Seu diferencial está em oferecer economia na conta de luz sem exigir instalação de placas, obras ou investimento inicial, por meio de uma jornada digital e simplificada. Assim, a Bulbe se posiciona como uma alternativa mais acessível ao modelo tradicional de energia solar residencial.

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
| [Bernardo A. Alvim] | [202508427141] | [Eng. Software] | [Ex: Tech Lead] |
| [Nome] | [Matrícula] | [Curso] | [Papel] |
| [Nome] | [Matrícula] | [Curso] | [Papel] |
| [Nome] | [Matrícula] | [Curso] | [Papel] |

### 1.5 Repositório e Entrega

| Item | Link |
|---|---|
| Repositório GitHub | [URL do repositório] |
| GitHub Project (Kanban) | [URL do board] |
| Deploy / Demo | [URL do deploy, se disponível] |

---

## 2. Demandas do Cliente

> ⚠️ **Instrução para a Squad:** As demandas abaixo devem ser levantadas pela própria squad a partir da visita e entrevistas com a Bulbe Energia. Cada demanda deve ter evidência (trecho de fala do cliente, observação de campo, dado coletado). **Não é permitido copiar demandas de materiais de referência do professor.**

### Declaração de Rastreabilidade

> Declaro que as demandas registradas neste documento foram levantadas pela Squad [Nome] durante a visita ao cliente em [data], com base em entrevistas diretas e observação. As evidências estão documentadas nas Issues do GitHub: [link para as Issues].

---

### D-01 · [Título Curto da Demanda]

| Campo | Conteúdo |
|---|---|
| **ID** | D-01 |
| **Título** | [Título descritivo] |
| **Origem** | Entrevista com [cargo/nome do contato na Bulbe], [data] |
| **Evidência** | *"[Trecho literal de fala do cliente que justifica esta demanda]"* |
| **Prioridade MoSCoW** | Must / Should / Could / Won't |
| **Impacto no Negócio** | [Descreva o impacto: churn, conversão, satisfação, etc.] |

**Descrição:**  
[2–3 frases explicando a demanda com suas próprias palavras.]

---

### D-02 · [Título Curto da Demanda]

| Campo | Conteúdo |
|---|---|
| **ID** | D-02 |
| **Título** | [Título descritivo] |
| **Origem** | [Fonte da demanda] |
| **Evidência** | *"[Trecho ou dado que evidencia a demanda]"* |
| **Prioridade MoSCoW** | Must / Should / Could / Won't |
| **Impacto no Negócio** | [Impacto] |

**Descrição:**  
[Descrição da demanda.]

---

> 🔁 *Repita o bloco acima para cada demanda identificada (recomendado: 4 a 8 demandas).*

---

## 3. Personas

> ⚠️ **Instrução para a Squad:** As personas devem ser construídas com base em dados reais coletados pela squad (entrevistas, questionários, observação). Referência metodológica: Cooper et al. (2014) — *About Face: The Essentials of Interaction Design*.

---

### Persona 1 — [Nome Fictício]

```
┌─────────────────────────────────────────────────────────────┐
│  👤  [Nome], [Idade] anos                                   │
│      [Profissão] · [Cidade / Região]                        │
└─────────────────────────────────────────────────────────────┘
```

| Atributo | Descrição |
|---|---|
| **Perfil** | [1 frase sobre quem é essa pessoa] |
| **Escolaridade** | [Ex: Ensino Superior Completo] |
| **Familiaridade com tecnologia** | [Baixa / Média / Alta] |
| **Dispositivo principal** | [Ex: Smartphone Android] |

**Objetivos:**
- [Objetivo 1 relacionado ao uso do produto]
- [Objetivo 2]

**Frustrações:**
- [Frustração 1 com o estado atual]
- [Frustração 2]

**Citação representativa:**
> *"[Frase que captura a motivação central desta persona — use dados das entrevistas]"*

**Relevância para o Projeto:**  
[Explique por que esta persona é central para as decisões de design da squad.]

---

### Persona 2 — [Nome Fictício]

> 🔁 *Repita a estrutura acima. Recomendado: 2 a 3 personas.*

---

## 4. User Stories

> ⚠️ **Instrução para a Squad:** User Stories devem seguir o formato padrão: *"Como [persona], quero [ação], para que [benefício]"* (Cohn, 2004). Cada história deve ter critérios de aceitação mensuráveis.

### Tabela Resumo

| ID | Persona | Título | Prioridade | Status |
|---|---|---|---|---|
| US-01 | [Persona] | [Título curto] | Alta / Média / Baixa | To Do / In Progress / Done |
| US-02 | [Persona] | [Título curto] | | |
| US-03 | [Persona] | [Título curto] | | |

---

### US-01 · [Transparência sobre cobrança e repasse à CEMIG]

> **Como** [Eduardo, um novo assinante cauteloso que tem dúvidas sobre confiar o pagamento da conta de luz a uma empresa nova],  
> **quero** [visualizar de forma clara como funciona a relação entre Bulbe, cliente e CEMIG, incluindo cobrança, pagamento e responsabilidades],  
> **para que** [para que eu possa aderir à energia Bulbe com confiança, reduzindo meus gastos sem medo de ficar inadimplente ou assumir riscos que desconheço].

**Demanda relacionada:** D-01  
**Estimativa de esforço:** [M] *(Story Points ou T-shirt sizing)*

**Critérios de Aceitação:**
- [ ] [A página ou fluxo deve explicar objetivamente o papel da Bulbe, do cliente e da CEMIG na prestação do serviço.]
- [ ] [O sistema deve informar, de forma explícita, o que acontece caso haja atraso ou falha de pagamento por parte da empresa.]
- [ ] [O usuário deve conseguir visualizar como funciona o faturamento, incluindo quem cobra, quem recebe e como o pagamento é repassado.]

**Notas técnicas:**  
[O conteúdo deve priorizar linguagem simples, objetiva e institucional, reduzindo insegurança jurídica e financeira do usuário. Pode depender de validação com time jurídico/comercial para garantir precisão sobre responsabilidades contratuais e processo de faturamento. Ideal incluir elementos de prova de confiança, como FAQ, resumo visual do fluxo de cobrança e links para documentos oficiais.]

---

### US-02 · [Título]

> **Como** [Persona],  
> **quero** [ação],  
> **para que** [benefício].

**Demanda relacionada:** D-0X  
**Estimativa de esforço:** [P / M / G]

**Critérios de Aceitação:**
- [ ] [Critério 1]
- [ ] [Critério 2]

---

> 🔁 *Repita o bloco para cada User Story. Recomendado: mínimo de 6 histórias.*

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
