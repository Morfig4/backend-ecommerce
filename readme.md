# Backend E-commerce

API REST simples para gerenciamento de produtos utilizando Node.js, Express e MongoDB Memory Server.

## Autores

- **Pedro Antonio Fernandes Alves**
- **Ryan Mora Bonfim**

## Como executar o projeto

### Pré-requisitos

- Node.js instalado na máquina(Recomendável por nvm)
- npm (gerenciador de pacotes do Node.js)

### Passos para executar

1. **Clone o repositório ou baixe os arquivos**

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o servidor**
   ```bash
   node index.js
   ```

4. **Acesse o servidor**
   - O servidor estará rodando em: `http://localhost:3000`
   - Para testar se está funcionando, acesse `http://localhost:3000/` no navegador

## Rotas da API

### GET /
- **Descrição**: Verifica se o servidor está funcionando
- **Resposta**: "Alive"

### POST /products
- **Descrição**: Cria um novo produto
- **Body (JSON)**:
  ```json
  {
    "name": "Nome do produto",
    "price": 99.99
  }
  ```

### GET /products
- **Descrição**: Lista todos os produtos
- **Resposta**: Array com todos os produtos cadastrados

### PUT /products/:id
- **Descrição**: Atualiza um produto existente
- **Parâmetros**: `id` do produto na URL
- **Body (JSON)**: 
 ```json
  {
    "name": "Novo nome do produto",
    "price": 99.99
  }
  ```

### DELETE /products/:id
- **Descrição**: Remove um produto
- **Parâmetros**: `id` do produto na URL

## Tecnologias utilizadas

- **Express.js**: Framework web para Node.js
- **Mongoose**: ODM para MongoDB
- **MongoDB Memory Server**: Banco de dados MongoDB em memória para desenvolvimento

## Referência

A documentação base para criar as rotas HTTP foi baseada em: https://medium.com/@ravipatel.it/crud-api-using-express-js-and-mongoose-basic-for-learning-d12e08fcb35f