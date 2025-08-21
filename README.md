## ✨ Funcionalidades Principais

* **Cadastro de Novos Investimentos:** Um formulário completo e intuitivo para adicionar novos ativos, com campos para nome, valor, tipo e data.
* **Validação de Dados em Tempo Real:** Utilização da biblioteca Zod para validar os dados do formulário antes do envio, garantindo a integridade das informações e fornecendo feedback instantâneo ao usuário.
* **Listagem e Visualização de Ativos:** Uma tela principal que exibe todos os investimentos já cadastrados em um layout claro e organizado.
* **Feedback de Sucesso:** Após o cadastro de um novo investimento, o usuário é redirecionado para uma tela de confirmação, melhorando a usabilidade e a comunicação da interface.
* **Comunicação com API:** Integração robusta com o backend através do cliente HTTP Axios para realizar operações de `GET` e `POST`.

---

## 🚀 Tecnologias e Ferramentas

Este projeto foi desenvolvido utilizando as tecnologias mais modernas do ecossistema Frontend, com foco em performance, escalabilidade e boas práticas de desenvolvimento.

* **React:** Biblioteca principal para a construção da interface de usuário de forma componentizada e declarativa.
* **TypeScript:** Adiciona tipagem estática ao JavaScript, aumentando a segurança do código, facilitando a manutenção e prevenindo bugs em tempo de desenvolvimento.
* **Tailwind CSS:** Framework CSS utility-first para a criação de designs customizados de forma rápida e eficiente, sem a necessidade de sair do HTML.
* **Zod:** Biblioteca de validação de esquemas que garante que os dados inseridos pelo usuário (e recebidos da API) estejam no formato correto, integrada com o React Hook Form para uma gestão de formulários poderosa.
* **Axios:** Cliente HTTP baseado em Promises para realizar as requisições à API de forma simples e organizada.
* **React Router DOM:** Para a gestão das rotas da aplicação (navegação entre telas).
* **Vite:** Ferramenta de build extremamente rápida que oferece um ambiente de desenvolvimento ágil e otimizado.

---

## 🔧 Rodando o Projeto Localmente

Para executar o projeto em seu ambiente de desenvolvimento, siga os passos abaixo.

**Pré-requisitos:**
* Node.js (versão 18 ou superior)
* npm ou Yarn

**Passos:**

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
    ```

2.  **Acesse o diretório do projeto:**
    ```bash
    cd nome-do-repositorio
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

A aplicação estará disponível em `http://localhost:5173` (ou outra porta indicada no terminal).

---

## 🎨 Estrutura e Decisões de Design

A arquitetura do frontend foi pensada para ser modular e escalável. Os componentes são divididos por responsabilidade (`components`, `pages`, `layouts`), os serviços de API são centralizados (`services/api.js`) e os tipos do TypeScript são compartilhados, garantindo consistência em toda a aplicação.

A escolha pelo **Tailwind CSS** permitiu a construção de uma UI customizada sem a verbosidade do CSS tradicional, enquanto o **Zod** foi essencial para criar um "contrato" de dados entre o formulário e a API, tornando a aplicação mais robusta e confiável.