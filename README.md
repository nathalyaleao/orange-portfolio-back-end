
# Desafio backend Orange Juice- Squad 16



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
#SERVER
TOKEN_SECRET=Qwerty
PORT=

#DB
DB_NAME=squad16
DB_USER=root
DB_HOST=localhost
DB_PASSWORD=root
DB_PORT=3306

# FRONT-END
REDIRECT_URL=
CLIENT_URL=

# Google
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

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
- Crud de Usuário
- Crud de Projeto
![](https://raw.githubusercontent.com/nathalyaleao/orange-portifolio-back-end/main/src/docs/modelagem.png)

## Documento para testar as rotas
É necessário ter o postman instalado: - [Postman](https://www.postman.com/downloads/) 
Após instlar o postman é necessário importar o arquivo [Documento da api](https://github.com/nathalyaleao/orange-portifolio-back-end/blob/main/src/docs/API%20documentation.postman_collection.json)
Para autenticar com o usuário base:
- email: solange@gmail.com
- senha: senha123

- Login
- Crud de Usuário
- Crud de Projeto
![](https://raw.githubusercontent.com/nathalyaleao/orange-portifolio-back-end/main/src/docs/modelagem.png)



## Stack utilizada

[**Repositório Front-end**](https://github.com/bruno-castilho/orange-portfolio-front-end) 

**Back-end:** Node, Express, Mysql


## Autores

- [@bruno-castilho](https://github.com/bruno-castilho)
- [@Jessource](https://github.com/Jessource)
- [@nathalyaleao](https://github.com/nathalyaleao)
