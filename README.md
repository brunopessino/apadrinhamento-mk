# 🎄 Apadrinhamento MK

> Aplicação web desenvolvida para automatizar a campanha de Apadrinhamento de Natal da instituição **Meu Kantinho**.

![Status](https://img.shields.io/badge/status-Concluído-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-Firestore-orange)
![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7)

---

## 📖 Sobre o projeto

O **Apadrinhamento MK** foi desenvolvido no início de **2025**, durante meus primeiros meses na graduação em Engenharia de Software.

A instituição **Meu Kantinho**, responsável por uma tradicional campanha de Apadrinhamento de Natal, enfrentava dificuldades para organizar manualmente os participantes, controlar as escolhas e acompanhar quem já havia sido apadrinhado.

Após compreender todo o processo, propus o desenvolvimento de uma aplicação web para automatizar essa campanha, oferecendo uma experiência mais simples para os padrinhos e uma gestão muito mais eficiente para a equipe organizadora.

O sistema foi utilizado durante toda a campanha e cumpriu integralmente seu objetivo.
---

## 🎯 Objetivo

Desenvolver uma aplicação web para automatizar a campanha de Apadrinhamento de Natal do **Meu Kantinho**, tornando o processo de escolha dos participantes, registro dos padrinhos e acompanhamento das doações mais organizado, transparente e eficiente.

---

## 🚩 O problema

Antes da aplicação, a organização da campanha era realizada de forma manual.

Isso dificultava o controle dos participantes e aumentava o risco de problemas como:

- Dois padrinhos escolherem a mesma pessoa;
- Dificuldade para acompanhar quem já havia sido apadrinhado;
- Controle descentralizado das informações;
- Maior tempo gasto pela equipe organizadora.

Com dezenas de participantes, esse processo se tornava cada vez mais difícil de administrar.

---

## 💡 A solução

A solução desenvolvida consistiu em uma aplicação web integrada ao **Firebase Firestore**, permitindo que todo o processo acontecesse de forma automática.

O fluxo da aplicação era simples:

1. O visitante acessava o site.
2. Escolhia um participante disponível.
3. Informava nome e WhatsApp.
4. Confirmava o apadrinhamento.
5. O sistema registrava a informação no Firestore.
6. O participante era imediatamente marcado como apadrinhado e removido das opções disponíveis para os demais visitantes.

Toda a atualização acontecia em tempo real, sem necessidade de recarregar a página.
---

## 🛠 Tecnologias Utilizadas

| Tecnologia | Finalidade |
|------------|------------|
| HTML5 | Estrutura da aplicação |
| CSS3 | Estilização e responsividade |
| JavaScript (ES Modules) | Lógica da aplicação e manipulação do DOM |
| Firebase Firestore | Banco de dados em tempo real |
| Git | Controle de versão |
| GitHub | Versionamento e hospedagem do código |
| Netlify | Deploy da aplicação |

---

## ⚙️ Arquitetura da Solução

O projeto foi estruturado utilizando HTML, CSS e JavaScript puro, consumindo o Firebase Firestore como banco de dados em tempo real.

Fluxo da aplicação:

```text
Google Forms
        │
        ▼
Coleta das informações
        │
        ▼
Firebase Firestore
        │
        ▼
Aplicação Web
        │
        ▼
Usuário escolhe um participante
        │
        ▼
Confirma o apadrinhamento
        │
        ▼
Firestore atualizado em tempo real
        │
        ▼
Participante indisponível para novas escolhas
```

Inicialmente os participantes eram cadastrados em um grande arquivo JSON.

Durante o desenvolvimento, identifiquei que essa abordagem dificultaria a manutenção da aplicação. A solução foi migrar o projeto para o **Firebase Firestore**, permitindo atualização em tempo real, maior escalabilidade e uma gestão muito mais simples dos dados.
---

## ✨ Funcionalidades

- Exibição dinâmica dos participantes cadastrados.
- Atualização em tempo real utilizando o Firebase Firestore.
- Escolha de um participante através da interface.
- Modal para confirmação do apadrinhamento.
- Registro automático do nome e WhatsApp do padrinho.
- Bloqueio imediato de participantes já apadrinhados.
- Área de participantes já confirmados.
- Feedback visual através de notificações (Toast).
- Interface responsiva para computadores, tablets e smartphones.

---

## 📈 Resultados

A aplicação foi utilizada durante toda a campanha de Apadrinhamento de Natal do **Meu Kantinho**, substituindo o controle manual anteriormente utilizado.

Entre os principais resultados alcançados estão:

- Organização centralizada de todos os participantes;
- Redução do trabalho manual da equipe;
- Eliminação de conflitos de apadrinhamento duplicado;
- Atualização automática das informações em tempo real;
- Exportação final dos registros para planilha Excel, facilitando a organização da entrega das doações.

O projeto atingiu integralmente o objetivo para o qual foi desenvolvido e permaneceu em funcionamento durante toda a campanha.

---

## 🧠 Principais Aprendizados

Este projeto marcou o início da minha experiência prática como desenvolvedor.

Durante seu desenvolvimento pude aplicar conceitos de Engenharia de Software em um problema real, aprendendo na prática sobre:

- Levantamento de requisitos;
- Desenvolvimento orientado à resolução de problemas;
- Integração com Firebase Firestore;
- Manipulação do DOM utilizando JavaScript;
- Organização de código em módulos;
- Responsividade utilizando CSS;
- Versionamento com Git e GitHub;
- Publicação de aplicações utilizando Netlify.

Mais do que desenvolver uma aplicação, este projeto mostrou a importância de compreender a necessidade do cliente antes de escrever qualquer linha de código.
---

## 🚀 Como executar o projeto

```bash
# Clone este repositório
git clone git@github.com:brunopessino/apadrinhamento-mk.git

# Acesse a pasta do projeto
cd apadrinhamento-mk
```

Como o projeto utiliza **Firebase Firestore**, é necessário possuir uma configuração válida do Firebase para executar todas as funcionalidades.

---

## 🌐 Deploy

A aplicação foi publicada utilizando a Netlify.

🔗 https://apadrinhamentomk.netlify.app

---

## 📁 Estrutura do projeto

```
apadrinhamento-mk/
│
├── images/
├── index.html
├── style.css
├── script.js
├── .gitignore
└── README.md
```

---

## 👨‍💻 Autor

**Bruno Pessino**

Assistente de TI Jr. | Estudante de Engenharia de Software | Desenvolvedor Web

- GitHub: https://github.com/brunopessino
- LinkedIn: https://linkedin.com/in/brunopessino

---

## 📌 Status do Projeto

✅ **Projeto concluído**

Este projeto foi desenvolvido para atender uma necessidade real da instituição **Meu Kantinho** durante a campanha de Apadrinhamento de Natal de 2025.

Após o encerramento da campanha e o cumprimento de todos os objetivos, o código foi preservado como registro da solução desenvolvida e entregue.