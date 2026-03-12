# 📚 API de Biblioteca

Este projeto consiste no desenvolvimento de uma **API REST para
gerenciamento de livros**, construída com **Node.js** utilizando o
framework **Express**.

Os dados são persistidos em um banco de dados **MongoDB Atlas**,
hospedado na nuvem.

A API permite realizar operações completas de **CRUD (Create, Read,
Update, Delete)** sobre os livros cadastrados.

------------------------------------------------------------------------

## 🚀 Tecnologias Utilizadas

-   Node.js
-   Express
-   MongoDB
-   MongoDB Atlas
-   JavaScript
-   Nodemon

------------------------------------------------------------------------

## 📦 Estrutura do Livro

Cada livro possui os seguintes campos:

``` json
{
  "id": 1,
  "titulo": "Clean Code",
  "editora": "Prentice Hall",
  "preco": 120.50,
  "paginas": 464
}
```

------------------------------------------------------------------------

## 📡 Endpoints da API

### Listar todos os livros

    GET /livros

------------------------------------------------------------------------

### Buscar livro por ID

    GET /livros/:id

------------------------------------------------------------------------

### Criar um livro

    POST /livros

Exemplo de body:

``` json
{
  "id": 1,
  "titulo": "Clean Code",
  "editora": "Prentice Hall",
  "preco": 120.50,
  "paginas": 464
}
```

------------------------------------------------------------------------

### Atualizar um livro

    PUT /livros/:id

------------------------------------------------------------------------

### Remover um livro

    DELETE /livros/:id

------------------------------------------------------------------------

## ⚙️ Como Executar o Projeto

### 1. Clonar o repositório

``` bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### 2. Entrar na pasta

``` bash
cd seu-repositorio
```

### 3. Instalar dependências

``` bash
npm install
```

### 4. Configurar variável de ambiente

Crie um arquivo `.env`:

    MONGO_URI=sua_string_de_conexao
    PORT=3000

### 5. Executar servidor

``` bash
node server.js
```

Ou com nodemon:

``` bash
npx nodemon server.js
```

------------------------------------------------------------------------

## 🎯 Objetivo

Este projeto foi desenvolvido para praticar:

-   Desenvolvimento de APIs REST
-   Utilização do Express
-   Integração com MongoDB
-   Persistência de dados em nuvem
-   Estruturação de backend

------------------------------------------------------------------------

## 📄 Licença

Projeto sob licença MIT.
