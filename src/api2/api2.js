const pg = require('pg')
const express = require('express')
const app = express()
const db = require('../config/database')

const pool = new pg.Pool({
    user: "postgres",
    database: "arch",
    password: "kamisama123",
    port: 5432
})

app.get('/boletim', (req,res,next) => {
    pool.connect(function (err, client, done){
        if(err){
            console.log("Não conectado ao BD " + err);
        }
        client.query('select a.nome,(na.n1 + na.n2 + na.n3 + na.n4)/4 as media,' 
        + '\nCASE'
        + '\nWHEN (na.n1 + na.n2 + na.n3 + na.n4)/4  < 4 THEN 0'
        + '\nWHEN (na.n1 + na.n2 + na.n3 + na.n4)/4  >= 4 and (na.n1 + na.n2 + na.n3 + na.n4)/4  < 6 then 5'
        + '\nWHEN (na.n1 + na.n2 + na.n3 + na.n4)/4  >=6 THEN 10'
        + '\nEND SITUACAO from notas_aluno na' 
        + '\ninner join alunos a on na.id_aluno = a.id', function(err, result){
            done();
            if(err){
                console.log(err);
                res.status(400).send(err)
            }
            res.status(200).send(result.rows)
            console.log("Situação:\n0 - Reprovado\n5 - Recuperação\n10 - Aprovado\n Resultado abaixo no bash")
            console.log(result)
        
        })
    })
})

app.listen(3334, function(){
    console.log('Server is running on port 3334')
})

