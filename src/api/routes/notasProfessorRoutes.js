const express = require('express')
const router = express.Router();

const notasProfessorControllers = require('../controllers/notasProfessorControllers')

router.get('/', (req, res) => {
    return res.json('Rota Raiz Encontrada')
})

router.get('/getnotas', notasProfessorControllers.index) //read

router.post('/postnotas', notasProfessorControllers.store) //create

module.exports = router