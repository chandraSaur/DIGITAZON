import express from 'express'
import session from 'express-session'
import axios from 'axios'
import 'dotenv/config'  //process.env inizia a funzionare, non devo importare sempre il file .env
import {runConnection, insertUser, fetchUsers } from './mongodb.mjs'
axios.defaults.withCredentials = true;

const app = express()
const port = 3000

import bodyParser from 'body-parser'
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false })); // per poter utilizzare l'html con il form per la login.

// documentazione dettagliata: https://github.com/expressjs/session#options
// per utilizzare la libreria.
app.use(session({
  secret: 'keyboard cat',      // stringa del middleware per marcare le chiamate
  resave: false,
  cookie: { maxAge: 60000 }
}))

// c'è uno user nella session?
// questo middleware sarà affiancato solo a determinate rotte come /users
function sessionChecked(req, res, next) {
  console.log(req.session.user);

  if(req.session.user){
    next()
  } else {
    res
      .status(403)
      .send({
        message: 'not authorized'
      })
  }
}

runConnection()  //connessione all'istanza di MongoDB. Al db in Atlas.

// la sessione è il range nel quale o si è autenticati
// o autorizzati. 

//endpoint necessari:
// /login
// /logout
// middleware per controllare permanenza utente nella sessione. 

// body: user e pass
// sono uguali a ciò che ci aspettiamo
//   se uguali status 200 e message: user authenticated
//   se diversi status 403 e message: user non trovato
app.post('/users/session', (req, res) => {
  let request = req.body
  if(request.username == 'chandraSaur' && request.password == 'ciao123' ){
    req.session.user = request.username     //nella sessione abbiamo appena inserito questo utente
    res.send({
      message: 'user authenticated'
    })
  } else {
    res
      .status(403)
      .send({
        message: 'user not found'
      })
  }
})

app.post('/users/signup', (req,res)=> {
  let user = req.body
  insertUser(user)
  res
      .status(201) //creato risorsa server side
      .end()
})

// todo: prendere users da database. 
// sarà la rotta da proteggere con AUTORIZZAZIONE.
// serve una funzione che rappresenterà il middleware: controlleremo 
// la sessione alla ricerca dell'utente

app.get('/users', sessionChecked, async (req, res) => {
  res.send(await fetchUsers())
})

app.get('/logout', function (req, res, next) {
  // logout logic

  // clear the user from the session object and save.
  // this will ensure that re-using the old session id
  // does not have a logged in user
  req.session.user = null
  req.session.save(function (err) {
    if (err) next(err)

    // regenerate the session, which is good practice to help
    // guard against forms of session fixation
    req.session.regenerate(function (err) {
      if (err) next(err)
      // res.redirect('/')
      res.status(200).end()
    })
  })

})

// app.delete('/users/session', (req, res) => {
//   req.session.destroy(function () {
//     res.send({
//       message: 'user has logged out'
//     }) 
//   })
// })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})