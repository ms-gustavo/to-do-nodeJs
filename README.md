# To-Do List em NodeJS utilizando Express, Handlebars, MySQL e Sequelize

Este é um projeto de To-Do List simples em NodeJS utilizando as bibliotecas Express, Handlebars, MySQL e Sequelize.

# Requisitos
NodeJS 10.x ou superior
NPM ou Yarn
MySQL


# Instalação
Clone este repositório para o seu diretório local:
git clone https://github.com/ms-gustavo/to-do-nodeJs.git


Navegue para o diretório do projeto e instale as dependências:

cd to-do-nodeJs


npm install


# Configuração do Banco de Dados
Crie um banco de dados para o projeto no MySQL:

CREATE DATABASE to_do_list;


Crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:

DB_HOST=localhost


DB_USER=seu_usuario


DB_PASS=sua_senha


DB_NAME=to_do_list


Substitua seu_usuario e sua_senha pelos seus dados de acesso ao MySQL.


Execute as migrations para criar as tabelas no banco de dados:


npx sequelize-cli db:migrate


# Executando o projeto
Após a instalação e configuração, execute o projeto:


npm start

O servidor estará rodando em http://localhost:3000/tasks
