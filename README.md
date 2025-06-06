# LoginAngula

Este projeto é uma aplicação web de autenticação desenvolvida com [Angular](https://angular.io/) (versão 19) e um backend Node.js/Express para persistência de usuários em MySQL.

## Funcionalidades

- Cadastro de novos usuários
- Login de usuários existentes
- Validação de formulários com Angular Reactive Forms
- Backend Node.js com API REST para cadastro e consulta de usuários
- Integração com banco de dados MySQL
- Senhas protegidas com hash (bcrypt)

## Estrutura do Projeto

```
src/
  app/
    login/         # Componentes e serviços de login
    registro/      # Componentes e serviços de registro
    userscream/    # Tela de usuário logado
  assets/          # Imagens e arquivos estáticos do frontend
  api-node/        # Backend Node.js/Express
```

## Pré-requisitos

- Node.js (v18+ recomendado)
- Angular CLI (`npm install -g @angular/cli`)
- MySQL Server

## Instalação

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd LoginAngular
   ```

2. **Instale as dependências do frontend:**
   ```bash
   npm install
   ```

3. **Configure o banco de dados MySQL:**
   - Crie o banco `CadastrosAngula` e a tabela `usuarios`:
     ```sql
     CREATE DATABASE CadastrosAngula;
     USE CadastrosAngula;
     CREATE TABLE usuarios (
       id INT AUTO_INCREMENT PRIMARY KEY,
       nome VARCHAR(100) NOT NULL,
       email VARCHAR(100) NOT NULL,
       senha VARCHAR(100) NOT NULL
     );
     ```

4. **Configure e inicie o backend:**
   ```bash
   cd src/api-node
   npm install
   node index.js
   ```
   O backend estará disponível em `http://localhost:3000`.

5. **Inicie o frontend Angular:**
   ```bash
   cd ../../
   ng serve
   ```
   Acesse `http://localhost:4200` no navegador.

## Como adicionar imagens ao projeto

Coloque suas imagens na pasta `src/assets` e use no HTML assim:
```html
<img src="assets/sua-imagem.png" alt="Descrição">
```

## Scripts úteis

- `ng serve` — Inicia o servidor de desenvolvimento Angular
- `ng build` — Compila o projeto para produção



## Observações

- O backend Node.js deve estar rodando para que o cadastro e login funcionem corretamente.
- As credenciais do banco de dados podem ser ajustadas em [`src/api-node/db.js`](src/api-node/db.js).
- Cadastre novos usuários após a implementação do hash de senha para garantir o login seguro.

## Licença

Este projeto está sob a licença MIT.
