const { Client } = require('pg'); 
const express = require('express'); 
const bodyParser = require('body-parser');
const cors = require('cors') ;

const app = express();

var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

app.use(bodyParser.json())
app.use(express.json()); 
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

// client.query(`DROP TABLE utilisateurs, projets;`, (err, res) => {
//     if(!err){
//         console.log(res.rows); 
//     }else{
//         console.log(err.message); 
//     }
//     client.end; 
// }); 

// client.query(`CREATE TABLE utilisateurs (idUser SERIAL PRIMARY KEY , nomUser Varchar, ageUser Int);`, (err, res) => {
//     if(!err){
//         console.log(res.rows); 
//     }else{
//         console.log(err.message); 
//     }
//     client.end; 
// }); 

// client.query(
//     `INSERT INTO utilisateurs(nomUser, ageUser) 
//     VALUES 
//     ('master', 13), 
//     ('Lucas', 20)
//     ;`
//     , (err, res) => {
//     if(!err){
//         console.log(res.rows); 
//     }else{
//         console.log(err.message); 
//     }
//     client.end; 
// }); 

// client.query(`CREATE TABLE projets (idProjet SERIAL PRIMARY KEY , nomProjet Varchar, domaineProjet Varchar, idUser Int, FOREIGN KEY (idUser) REFERENCES utilisateurs(idUser));`, (err, res) => {
//     if(!err){
//         console.log(res.rows); 
//     }else{
//         console.log(err.message); 
//     }
//     client.end; 
// }); 

// client.query(
//     `INSERT INTO projets(nomProjet, domaineProjet) 
//     VALUES 
//     ('Usermind', 'Developpement'), 
//     ('SudAerien', 'Developpement')
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

client.query(`SELECT * from projets`, (err, res) => {
    if(!err){
        console.log(res.rows); 
    }else{
        console.log(err.message); 
    }
    client.end; 
});  

//  GET
const getUsers = (req, res) => {
    client.query(`SELECT * FROM utilisateurs ;`, (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
}

const getProjets = (req, res) => {
    client.query(`SELECT * FROM projets; `, (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
}

// POST
const createUser = (req, res) => {
    const { nomUser, ageUser } = req.body
  
    client.query(`INSERT INTO utilisateurs(nomUser, ageUser) VALUES ($1, $2)`
    , [nomUser, ageUser], (error, results) => {
      if (error) {
        throw error
      }
    })
}

const createProjet = (req, res) => {
    const { nomProjet, domaineProjet } = req.body
  
    client.query(`INSERT INTO projets(nomProjet, domaineProjet) VALUES ($1, $2)`
    , [nomProjet, domaineProjet], (error, results) => {
      if (error) {
        throw error
      }
    })
}

module.exports = {
    getUsers, 
    getProjets,
    createUser, 
    createProjet
}

app.get('/utilisateurs', getUsers)
app.get('/projets', getProjets)

app.post('/utilisateurs/new', createUser)
app.post('/projets/new', createProjet)

app.get('/', (req, res) => {
    res.send('Test')
})

// Start serve
app.listen(3000, console.log("Listening on port 3000")); 