# Desafio backend Orange Juice- Squad 16
## Pre-Requesito
- [Google OAuth 2.0](https://clerk.com/blog/oauth2-react-user-authorization?utm_source=www.google.com&utm_medium=referral&utm_campaign=none)

## Instalação
Para execucação da api é necessário ter o node >= v16.17.1 e o banco de dados MySql
- [Node](https://nodejs.org/en)
- [MySql](https://dev.mysql.com/downloads/)
Após a instalação do node, abre o terminar prompt e digite
```bash
node -v
```
Se o node estiver instalado corretamente, irá aparecer a versão no prompt. Caso não apareça a versão, reinicie o computador e tente novamente o comando ```node -v```

Com o mysql instalado e configurado corretamente, crie uma nova schema com o nome da base "squad16".
![create schema](https://raw.githubusercontent.com/nathalyaleao/orange-portifolio-back-end/main/src/docs/mysqlScreen2.png)

![create schema](https://raw.githubusercontent.com/nathalyaleao/orange-portifolio-back-end/main/src/docs/mysqlScreen.png)
## Clonando o repositório
Abra o prompt e execute

```bash
  git clone https://github.com/nathalyaleao/orange-portifolio-back-end.git
```

Entre no diretório do projeto

```bash
  cd orange-portifolio-back-end
```


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis no seu ambiente. Crie uma cópia do arquivo ```.env.example``` e renomei para o ```.env``` com as informações da sua conexão myql.

```bash
# SERVER
TOKEN_SECRET=Qwerty     # Qualquer string aleatória.
PORT=                   # Porta em que a API será executada.

# DB
DB_NAME=squad16         # Nome do banco de dados.
DB_USER=root            # Usuário do banco de dados.
DB_HOST=localhost       # Endereço do banco de dados.
DB_PASSWORD=root        # Senha do banco de dados.
DB_PORT=3306            # Porta do banco de dados.

# FRONT-END
REDIRECT_URL=           # Endereço para login pelo Google no front-end, algo como ${host}/auth/callback
CLIENT_URL=             # Endereço do front-end

# Google
GOOGLE_CLIENT_ID=       # Google Client ID
GOOGLE_CLIENT_SECRET=   # Google Client Secret


```


## Executando o projeto
Dentro do projeto, abra o terminal. Instale as dependências e rode as migrations

```bash
  npm install
  npx sequelize db:migrate
  npx sequelize db:seed:all
```

Inicie o servidor

```bash
  npm run dev
```

## Funcionalidades

- Login
- Cadastro de Usuário
- Crud de Projeto
![](https://raw.githubusercontent.com/nathalyaleao/orange-portifolio-back-end/main/src/docs/modelagem.png)

## Documento para testar as rotas
É necessário ter o postman instalado: - [Postman](https://www.postman.com/downloads/) 
Após instalar importe o arquivo [Documento da api](https://github.com/nathalyaleao/orange-portifolio-back-end/blob/main/src/docs/API%20documentation.postman_collection.json)
Para autenticar com o usuário base:
- email: solange@gmail.com
- senha: senha123


## Stack utilizada

[**Repositório Front-end**](https://github.com/bruno-castilho/orange-portfolio-front-end) 

**Back-end:** Node, Express, Mysql


## Autores

- [@bruno-castilho](https://github.com/bruno-castilho)
- [@Jessource](https://github.com/Jessource)
- [@nathalyaleao](https://github.com/nathalyaleao)
