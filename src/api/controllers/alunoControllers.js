const Alunos = require('../models/alunoModels')

module.exports = {
    async index(req, res) {
        const alunos = await Alunos.findAll()
        return res.json(alunos)
    },
    async store(req, res) {
        const { nome } = req.body
        const aluno = await Alunos.create({ nome });
        return res.status(200).send({
            status: 1,
            message: "Aluno Incluído com sucesso!",
            aluno
        })
    },
    
}