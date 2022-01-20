const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');
const {Client} = require('pg')



const conexao = new Sequelize(dbConfig);

const notas = require('../api/models/notasProfessorModels')
const Alunos = require('../api/models/alunoModels.js');
//const notasGetById = require('../api2/models/situacaoModels.js');

try {
    conexao.authenticate();
    console.log('Conexao estabelecida!!!');
} catch (error) {
    console.log('Conexao não estabelecida!!!', error);
}

notas.init(conexao)
Alunos.init(conexao)
//notasGetById.init(conexao)

module.exports = conexao
