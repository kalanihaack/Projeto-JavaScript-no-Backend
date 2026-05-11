# Projeto JavaScript no Backend

## 📖 Sobre o Projeto
Este projeto consiste numa API RESTful desenvolvida em ambiente de servidor (Backend) utilizando **Node.js** e **Express**. O sistema implementa um CRUD (Create, Read, Update, Delete) completo para a gestão de utilizadores, incluindo validação de dados e armazenamento local.

## 🛠️ Tecnologias e Pacotes Utilizados
* **[Node.js](https://nodejs.org/)** - Ambiente de execução JavaScript.
* **[Express](https://expressjs.com/)** - Framework minimalista para a criação do servidor web.
* **[NeDB](https://github.com/louischatriot/nedb)** - Base de dados embutida (ficheiro `users.db`) para persistência de dados em formato JSON, leve e rápida para projetos pequenos.
* **[Consign](https://www.npmjs.com/package/consign)** - Facilita a gestão de ficheiros, inserindo rotas e utilitários de forma automática na aplicação.
* **[Body-Parser](https://www.npmjs.com/package/body-parser)** - Processa o corpo das requisições (suporta formulários urlencoded e dados JSON).
* **[Express-Validator](https://express-validator.github.io/)** - Utilizado para garantir a validação de dados antes de serem inseridos na base de dados (ex: verificação de preenchimento obrigatório e formato de email válido).

## 🗂️ Estrutura do Projeto
```text
📦 Projeto-JavaScript-no-Backend
 ┣ 📂 routes
 ┃ ┣ 📜 index.js        # Rota principal (saudação inicial)
 ┃ ┗ 📜 users.js        # Endpoints responsáveis pelo CRUD de utilizadores
 ┣ 📂 utils
 ┃ ┣ 📜 error.js        # Utilitário para formatação e envio de erros
 ┃ ┗ 📜 validator.js    # Utilitário com as regras de validação (nome, email)
 ┣ 📜 .gitignore        # Ficheiros ignorados pelo Git (ex: node_modules, users.db)
 ┣ 📜 index.js          # Ficheiro de entrada da aplicação e configurações do servidor
 ┣ 📜 package.json      # Dependências e informações do projeto
 ┗ 📜 README.md         # Documentação do projeto


## 🚀 Como Instalar e Executar

1. Clone este repositório para a sua máquina local:

```bash
git clone [https://github.com/kalanihaack/Projeto-JavaScript-no-Backend.git](https://github.com/kalanihaack/Projeto-JavaScript-no-Backend.git)

```

2. Aceda à pasta do projeto e instale as dependências:

```bash
npm install

```

3. Inicie o servidor:

```bash
node index.js

```

A aplicação estará a correr em `http://127.0.0.1:3000`. O ficheiro de base de dados `users.db` será criado automaticamente na raiz do projeto assim que a primeira interação for efetuada.

## 🔗 Endpoints da API

Abaixo estão as rotas disponíveis nesta API:

### 🏠 Rota Base

* **`GET /`**
* Retorna um conteúdo HTML simples `<h1>Olá</h1>` para testar o servidor.



### 👥 Utilizadores (`/users`)

* **`GET /users`**
* Lista todos os utilizadores registados na base de dados (ordenados alfabeticamente pelo nome).


* **`POST /users`**
* Regista um novo utilizador.
* **Regras:** Os campos `name` e `email` são de preenchimento obrigatório, e o campo `email` deve ter uma formatação válida.


* **`GET /users/:id`**
* Retorna todos os dados de um utilizador específico procurado pelo seu ID.


* **`PUT /users/:id`**
* Atualiza as informações de um utilizador existente. (Aplica as mesmas regras de validação do método POST).


* **`DELETE /users/:id`**
* Remove um utilizador do sistema de forma permanente através do ID.



```

```
