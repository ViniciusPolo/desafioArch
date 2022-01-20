const { Model, DataTypes } = require('sequelize')

class Alunos extends Model { //criação de classe abstrata
    static init(sequelize) {
        //construtor da classe
        super.init({
            nome: DataTypes.STRING,
        }, {

            sequelize,
            tableName: 'alunos',

        });
        return this;
    }
}

module.exports = Alunos