'use strict';
const bcrypt = require('bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const senha = await bcrypt.hash('senha1234', 10);

    await queryInterface.bulkInsert('usuarios', [
      {
        nome: 'Solange',
        sobrenome: 'maria',
        email: 'solange@gmail.com',
        senha,
        url_avatar: 'http://avatar.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('usuarios', null, {});

  }
};
