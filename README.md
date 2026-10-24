# Conversa com terminal🚀🤖

<img width="775" height="250" alt="image" src="https://github.com/user-attachments/assets/26aaef64-456e-4a42-8b1e-7022b3e230d0" />

![Node.js](https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

> Uma aplicação interativa via linha de comando (CLI) desenvolvida em Node.js com Orientação a Objetos, automação de testes com GitHub Actions e integração contínua (CI).

---

## 💻 Sobre o Projeto

O projeto **Conversa com terminal** (`teste_node-js`) é uma aplicação interativa criada para explorar conceitos fundamentais do ecossistema Node.js. A aplicação solicita dados dinâmicos ao usuário através do terminal, instancia objetos reutilizáveis através de classes JavaScript e executa fluxos interativos de boas-vindas.

Além da lógica de backend, o projeto conta com integração contínua configurada via **GitHub Actions** (`node.js.yml`), garantindo que o código seja validado e executado automaticamente em múltiplas versões do Node.js (18.x, 20.x e 22.x) a cada `push` ou `pull request`.

---

## ⚙️ Funcionalidades

- **Interação via Terminal (CLI):** Coleta de dados do usuário (nome e idade) diretamente pelo console usando a interface `readline` do Node.js.
- **Orientação a Objetos (POO):** Criação e exportação da classe `Person` em módulo separado (`person.js`), permitindo a instanciação de objetos e execução do método `sayName()`.
- **Validação de Inputs:** Tratamento de entradas do usuário com `.trim()` para evitar caracteres vazios ou incorretos.
- **Integração Contínua (CI):** Workflow automatizado via GitHub Actions executando rotinas de verificação e compatibilidade de ambiente.

---

## 📊 Estrutura de Fluxo do Sistema

Abaixo está o formato de como os dados são processados e manipulados durante a execução do programa:

| Etapa | Origem / Arquivo | Ação / Exemplo de Retorno |
| :--- | :--- | :--- |
| **Entrada do Nome** | `index.js` (`readline`) | `"Qual é o seu nome?"` |
| **Instanciação** | `person.js` | `const pessoa = new Person(respostaNome);` |
| **Execução de Método** | `Person.sayName()` | `"Olá, Alice!"` |
| **Entrada da Idade** | `index.js` (`readline`) | `"Qual é a sua idade?"` |
| **Mensagem Final** | Console | `"Bem-vindo(a) ao nosso sistema operacional, Alice!"` |

---

## 🛠️ Tecnologias Utilizadas

- **Node.js:** Ambiente de execução JavaScript no lado do servidor.
- **JavaScript (ES6+):**
  - Módulos CommonJS (`module.exports` e `require`).
  - Classes e Construtores (`class Person`).
  - Manipulação de Strings e Template Literals.
  - Leitura e escrita interativa com o módulo nativo `readline`.
- **GitHub Actions:** Pipeline de CI para validação automatizada de build e execução do projeto em diferentes versões do Node.js.
- **Git & GitHub:** Controle de versão e hospedagem do código-fonte.

---

## 🌐 Repositório do Projeto

- **GitHub:** [VEJA ESTE PROJETO NO GITHUB!](https://github.com/AliceSilva2012/teste_node-js)

---

## 🚀 Como Executar o Projeto Localmente

Caso queira clonar o projeto e rodar o código diretamente na sua máquina, siga os passos abaixo:

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado na máquina (versão 18.x ou superior recomendada).
- [Git](https://git-scm.com) instalado na máquina.
- Um editor de código como o [VS Code](https://code.visualstudio.com/).

### ☕ Passo a Passo

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/AliceSilva2012/teste_node-js.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd teste_node-js
   ```

3. **Instale as dependências (se houver)**
   ```bash
   npm install
   ```

3. **Execute a aplicação:**
   ```bash
   node index.js
   ```

   ---

   graph TD
    A[teste_node-js] --> B[.github/workflows/node.js.yml]
    A --> C[index.js]
    A --> D[person.js]
    A --> E[package.json]
    A --> F[package-lock.json]

    style B fill:#2088ff,stroke:#fff,stroke-width:2px,color:#fff
    style C fill:#f7df1e,stroke:#333,stroke-width:2px,color:#000
    style D fill:#f7df1e,stroke:#333,stroke-width:2px,color:#000
    style E fill:#6da55f,stroke:#fff,stroke-width:2px,color:#fff
    style F fill:#6da55f,stroke:#fff,stroke-width:2px,color:#fff

