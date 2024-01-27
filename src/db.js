const { Sequelize } = require("sequelize") // importar o sequelize

const sequelize = new Sequelize("squad16", "root", "Nml081100!", {
  //passar os dados para o sequelize
  dialect: "mysql", //informar o tipo de banco que vamos utilizar
  host: "localhost", //o host, neste caso estamos com um banco local
});

sequelize.authenticate()
.then( function () {
  console.log("CONEXAO REALIZADA COM SUCESSO");
}).catch(function () {
  console.log("Erro Conexao nao realizada");
})

module.exports = sequelize; //exportar
