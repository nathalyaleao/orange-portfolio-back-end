'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('projetos', [
      {
        user_id: '1',
        titulo: 'Portfolio 1',
        tags: 'UX, Web',
        link: 'http://avatar.png',
        descricao: 'Projeto de portfolio para o desafio Orange Juice',
        arquivo: 'http://avatar.png',
        data: '25/01/2024',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('projetos', null, {});

  }
};