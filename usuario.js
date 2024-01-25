const Sequelize = require('sequelize');
const database = require('./src/db');

const Usuario = database.define('user',{
    id_user: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    first_name_user:{
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name_user:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email_user:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password_user:{
        type: Sequelize.STRING,
        allowNull: false
    },
    avatar_url_user:{
        type: Sequelize.STRING,
        allowNull: false
    },
    country_user:{
        type: Sequelize.STRING,
        allowNull: false
    },
}
)

module.exports = Usuario;