const Notas = require('../models/notasProfessorModels')

module.exports = {
    async index(req, res) {
        const notas_aluno = await Notas.findAll()
        return res.json(notas_aluno)
    },
    async store(req, res) {
        const { id_aluno, n1, n2, n3, n4 } = req.body
        const nota_aluno = await Notas.create({ id_aluno, n1, n2, n3, n4 });
        return res.status(200).send({
            status: 1,
            message: "Nota Incluída com sucesso!",
            nota_aluno
        })
    },
}