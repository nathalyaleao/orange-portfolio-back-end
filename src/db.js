const { Sequelize } = require("sequelize") // importar o sequelize
const mysql = require("mysql2")


const DB_NAME = process.env.DB_NAME; 
const DB_USER = process.env.DB_USER;
const DB_HOST = process.env.DB_HOST;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_PORT = process.env.DB_PORT


const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  //passar os dados para o sequelize
  dialect: "mysql", //informar o tipo de banco que vamos utilizar
  dialectModule: mysql2,
  host: DB_HOST, //o host, neste caso estamos com um banco local
  port: DB_PORT,
});

sequelize.authenticate()
  .then(function () {
    console.log("CONEXAO REALIZADA COM SUCESSO");
  }).catch(function () {
    console.log("Erro Conexao nao realizada");
  })

module.exports = sequelize; //exportar
