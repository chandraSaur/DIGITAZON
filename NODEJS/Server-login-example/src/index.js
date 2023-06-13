import express from 'express'
import session from 'express-session'
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


// la sessione è il range nel quale o si è autenticati
// o autorizzati. 

//endpoint necessari:
// /login
// /logout
// middleware per controllare permanenza utente nella sessione. 

//to-do: prendere dati dal database

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

// todo: prendere users da database. 
// sarà la rotta da proteggere con AUTORIZZAZIONE.
// serve una funzione che rappresenterà il middleware: controlleremo 
// la sessione alla ricerca dell'utente

app.get('/users', sessionChecked, (req, res) => {
  res.send('users')
})

app.delete('/users/session', (req, res) => {
  req.session.destroy(function err() {
    res.send({
      message: 'user has logged out'
    }) 
  })
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})