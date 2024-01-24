const Sequelize = require('sequelize');
const database = require('./src/db');

const Project = database.define('project',{
    id_project: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_id_user:{
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true
    },
    title_project:{
        type: Sequelize.STRING,
        allowNull: false
    },
    tags_project:{
        type: Sequelize.STRING,
    },
    link_project:{
        type: Sequelize.STRING,
        allowNull: false
    },
    desc_project:{
        type: Sequelize.STRING,
        allowNull: false
    },
    file_project:{
        type: Sequelize.STRING,
        allowNull: false
    },
    date_project:{
        type: Sequelize.STRING,
        allowNull: false
    },
}
)