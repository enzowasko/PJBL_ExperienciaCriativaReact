# Sistema de Garagem - Gestao de Veiculos

Este projeto e um sistema CRUD completo (Create, Read, Update, Delete) desenvolvido como requisito de avaliacao do PJBL. Ele permite gerenciar o cadastro, entrada e saida de veiculos em uma garagem ou estacionamento.

## Tecnologias Utilizadas

* Frontend: React.js, React Router Dom, Axios, CSS.
* Backend: Node.js, Express, CORS.
* Banco de Dados: MySQL.

## Como rodar o projeto localmente

### Banco de Dados

1. Abra o MySQL Workbench.
2. Importe e execute o arquivo de script SQL para criar a base de dados e a tabela de veiculos.
3. Verifique no arquivo Backend/src/config/db.js se as credenciais (usuario e senha) correspondem ao seu banco MySQL local.

### Rodando o Backend (API)

Abra um terminal, navegue ate a pasta Backend e execute os comandos:

1. Entre na pasta do backend:
    cd Backend

2. Instale as dependencias (recria a pasta node_modules):
    npm install

3. Inicie o servidor:
    node server.js

O backend estara rodando em http://localhost:3000/.

### Rodando o Frontend

Abra um terminal, navegue ate a pasta Frontend e execute os comandos:

1. Entre na pasta do frontend:
    cd Frontend

2. Instale as dependencias (recria a pasta node_modules):
    npm install

3. Inicie a aplicacao React:
    npm start

## Desenvolvido por:
Enzo Wasko Amorim
