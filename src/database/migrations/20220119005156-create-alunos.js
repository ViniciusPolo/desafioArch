'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('alunos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING(20),
      },
      created_at: {
        type: Sequelize.DATE, //adiciona a data de inclusão
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE, //adiciona a data de atualização
        allowNull: false,
      }
    })
  },

  down: async function (queryInterface, Sequelize) {

    await queryInterface.dropTable('alunos');

  }
};