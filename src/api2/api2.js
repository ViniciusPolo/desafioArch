const {Client} = require('pg')
const db = require('../config/database')

const client = new Client(db)

async function listData(){
    client.connect()

    client.query('select (na.n1 + na.n2 + na.n3 + na.n4)/4 as soma' 
    + 'from notas_aluno na'
    + 'inner join alunos a on na.id_aluno = a.id' ,(err,res)=>{
        console.log(err ? " não conectado" : res.rows[0])
        client.end()
    })
}

listData()