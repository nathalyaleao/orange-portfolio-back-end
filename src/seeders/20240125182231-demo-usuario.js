'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('usuarios', [
      {
        nome: 'Solange',
        sobrenome: 'maria',
        email: 'solange@gmail.com',
        senha: 'senha1234',
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
