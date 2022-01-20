const { Model, DataTypes } = require('sequelize')

class Notas extends Model { //criação de classe abstrata
    static init(sequelize) {
        //construtor da classe
        super.init({
            id_aluno: DataTypes.BIGINT,
            n1: DataTypes.INTEGER,
            n2: DataTypes.INTEGER,
            n3: DataTypes.INTEGER,
            n4: DataTypes.INTEGER,
        }, {

            sequelize,
            tableName: 'notas_aluno',

        });
        return this;
    }
}

module.exports = Notas