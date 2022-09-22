const { Client } = require('pg'); 
const express = require('express'); 
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
)

const client = new Client({
    host: "localhost", 
    user: "postgres", 
    port: 5432, 
    password: "root", 
    database: "postgres"
})

client.connect(); 

// client.query(`CREATE TABLE utilisateurs (id SERIAL PRIMARY KEY , nom Varchar, age Int, projet Varchar);`, (err, res) => {
//     if(!err){
//         console.log(res.rows); 
//     }else{
//         console.log(err.message); 
//     }
//     client.end; 
// }); 

// client.query(
//     `INSERT INTO utilisateurs(nom, age, projet) 
//     VALUES 
//     ('master', 13, 'UserMind')
//     ;`
//     , (err, res) => {
//     if(!err){
//         console.log(res.rows); 
//     }else{
//         console.log(err.message); 
//     }
//     client.end; 
// }); 

// Afficher la table dans le terminal
client.query(`SELECT * from utilisateurs`, (err, res) => {
    if(!err){
        console.log(res.rows); 
    }else{
        console.log(err.message); 
    }
    client.end; 
});  

//  GET
const getUsers = (req, res) => {
    client.query('SELECT * FROM utilisateurs ORDER BY projet ASC', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
}

// POST
const createUser = (req, res) => {
    const { nom, age, projet } = req.body
  
    client.query(`INSERT INTO utilisateurs(nom, age, projet) VALUES ($1, $2, $3)`
    , [nom, age, projet], (error, results) => {
      if (error) {
        throw error
      }
    })
}

module.exports = {
    getUsers, 
    createUser
}

app.get('/users', getUsers)
app.post('/users/new', createUser)

app.get('/', (req, res) => {
    res.send('Test')
})

// Start serve
app.listen(3000, console.log("Listening on port 3000")); 