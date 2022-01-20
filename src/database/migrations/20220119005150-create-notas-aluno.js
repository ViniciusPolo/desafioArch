'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('notas_aluno', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_aluno: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      n1: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      n2: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      n3: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      n4: {
        type: Sequelize.INTEGER,
        allowNull: false,
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

    await queryInterface.dropTable('notas_aluno');

  }
};