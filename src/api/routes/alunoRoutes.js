const express = require('express')
const router = express.Router();

const alunoControllers = require('../controllers/alunoControllers')

router.get('/', (req, res) => {
    return res.json('Rota Raiz Encontrada')
})

router.get('/aluno', alunoControllers.index) //read

router.post('/postaluno', alunoControllers.store) //create

module.exports = router