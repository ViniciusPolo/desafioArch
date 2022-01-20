const express = require('express')
const pg = require('pg')
const http = require('http');
const notasProfessorRoutes = require('./api/routes/notasProfessorRoutes.js');
const alunoRoutes = require('./api/routes/alunoRoutes.js');
//const situacao = require('./api2/routes/situacaoRoutes.js');

require('./database/indexDB')

const app = express();
app.set('url', 'http://localhost:');
app.set('porta', 3333);

app.use(express.json());
app.use(notasProfessorRoutes);
app.use(alunoRoutes);


//Criador do servidor
http.createServer(app).listen(app.get('porta'), function () {
    console.log('\nServidor Rodando em ' + app.get('url') + app.get('porta'));
})
