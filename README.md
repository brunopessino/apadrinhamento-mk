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

O **Apadrinhamento MK** foi desenvolvido no meio de **2025**, durante meus primeiros meses na graduação em Engenharia de Software.

Na época, minha sogra, **Ana Cloves**, uma das responsáveis pela instituição **Meu Kantinho**, apresentou as dificuldades enfrentadas durante a organização da tradicional campanha de Apadrinhamento de Natal. A partir desse contexto, realizei o levantamento das necessidades do processo e propus uma solução para automatizar toda a campanha.

Antes da aplicação, o controle era realizado manualmente, tornando o acompanhamento dos participantes mais trabalhoso e aumentando o risco de inconsistências.

Como resultado, desenvolvi uma aplicação web integrada ao **Firebase Firestore**, permitindo que todo o processo acontecesse de forma automática, organizada e com atualização em tempo real.

A solução foi utilizada durante toda a campanha de Natal de 2025 e cumpriu integralmente seu objetivo.

---

## 🎯 Objetivo

Desenvolver uma aplicação web capaz de automatizar a campanha de Apadrinhamento de Natal do **Meu Kantinho**, tornando o processo de escolha dos participantes, registro dos padrinhos e acompanhamento das doações mais organizado, transparente e eficiente.

---

## 🚩 O problema

Antes da aplicação, toda a organização da campanha era realizada manualmente.

Esse processo apresentava desafios como:

- possibilidade de dois padrinhos escolherem o mesmo participante;
- dificuldade para acompanhar quem já havia sido apadrinhado;
- informações descentralizadas;
- maior tempo gasto pela equipe organizadora.

Com dezenas de participantes, o gerenciamento da campanha tornava-se cada vez mais complexo.

---

## 💡 A solução

A solução consistiu em uma aplicação web integrada ao **Firebase Firestore**, permitindo que todo o fluxo fosse realizado automaticamente.

Fluxo da aplicação:

1. O visitante acessa o site.
2. Escolhe um participante disponível.
3. Informa nome e WhatsApp.
4. Confirma o apadrinhamento.
5. O sistema registra as informações no Firestore.
6. O participante é imediatamente marcado como apadrinhado.
7. O participante deixa de aparecer para novos padrinhos.

Todas as alterações acontecem em tempo real, sem necessidade de atualizar a página.

---

## 🛠 Tecnologias Utilizadas

| Tecnologia | Finalidade |
|------------|------------|
| HTML5 | Estrutura da aplicação |
| CSS3 | Interface responsiva |
| JavaScript (ES Modules) | Lógica da aplicação |
| Firebase Firestore | Banco de dados em tempo real |
| Git | Controle de versão |
| GitHub | Versionamento do projeto |
| Netlify | Deploy da aplicação |

---

## ⚙️ Arquitetura da Solução

O projeto foi desenvolvido utilizando HTML, CSS e JavaScript puro, consumindo o Firebase Firestore como banco de dados em tempo real.

Fluxo geral:

```text
Google Forms
        │
        ▼
Cadastro dos participantes
        │
        ▼
Firebase Firestore
        │
        ▼
Aplicação Web
        │
        ▼
Escolha do participante
        │
        ▼
Registro do padrinho
        │
        ▼
Atualização automática
```

Inicialmente os participantes eram armazenados em um arquivo JSON.

Durante o desenvolvimento, identifiquei que essa abordagem dificultaria a manutenção da aplicação. A migração para o **Firebase Firestore** proporcionou atualização em tempo real, maior escalabilidade e simplificou a gestão dos dados.

---

## ✨ Funcionalidades

- Exibição dinâmica dos participantes.
- Atualização em tempo real utilizando Firebase Firestore.
- Escolha de participantes disponíveis.
- Modal de confirmação.
- Registro do nome e WhatsApp do padrinho.
- Bloqueio imediato de participantes já apadrinhados.
- Área de participantes confirmados.
- Notificações (Toast).
- Interface responsiva para desktop, tablet e smartphone.

---

## 📈 Resultados

A aplicação substituiu completamente o processo manual utilizado pela instituição durante a campanha de Natal.

Principais resultados:

- ✅ Centralização das informações.
- ✅ Redução do trabalho manual.
- ✅ Eliminação de apadrinhamentos duplicados.
- ✅ Atualização automática em tempo real.
- ✅ Exportação final dos registros para planilha Excel.
- ✅ Utilização durante toda a campanha de 2025.

O projeto atingiu integralmente os objetivos definidos para sua criação.

---

## 🧠 Principais Aprendizados

Este projeto marcou minha primeira experiência desenvolvendo uma solução para um problema real.

Durante seu desenvolvimento, pude aplicar conhecimentos relacionados a:

- levantamento de requisitos;
- resolução de problemas;
- manipulação do DOM;
- integração com Firebase Firestore;
- JavaScript moderno (ES Modules);
- responsividade;
- Git e GitHub;
- publicação de aplicações utilizando Netlify.

Mais do que aprender tecnologias, este projeto reforçou a importância de compreender o problema antes de desenvolver qualquer solução.

---

## 🚀 Como executar

```bash
git clone git@github.com:brunopessino/apadrinhamento-mk.git

cd apadrinhamento-mk
```

Como a aplicação utiliza **Firebase Firestore**, é necessário possuir uma configuração válida do Firebase para executar todas as funcionalidades.

---

## 🌐 Deploy

A aplicação foi publicada utilizando a Netlify.

🔗 **https://apadrinhamentomk.netlify.app**

---

## 📁 Estrutura do projeto

```text
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

Assistente de TI Jr.  
Estudante de Engenharia de Software  
Desenvolvedor de Software

- GitHub: https://github.com/brunopessino
- LinkedIn: https://linkedin.com/in/brunopessino

---

## 📌 Status

✅ Projeto concluído.

A aplicação foi desenvolvida para atender uma necessidade real da instituição **Meu Kantinho** durante a campanha de Apadrinhamento de Natal de 2025.

Após o encerramento da campanha e o cumprimento de todos os objetivos, o código foi preservado como registro da solução desenvolvida.

---

> *"Compreender o problema é o primeiro passo para desenvolver boas soluções."*
