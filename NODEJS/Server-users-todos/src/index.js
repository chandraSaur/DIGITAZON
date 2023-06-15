import express from 'express'
const app = express()
const port = 3000

import bodyParser from 'body-parser'
app.use(bodyParser.json())


import * as user from './user-routes.mjs'  //tutte le funzioni in user-routes chiamate come user
import * as todo from './todo-routes.mjs' // tutte le fn in todo-routes chiamate come todo
import * as todoUser from './routes-user-todo.mjs' //  -same-

app.get('/users', user.getAll)  // all'endpoint /users quando il client fa una chiamata, il server risponde con getAll. 
app.get('/users/search', user.search) //utilizza la query creandola attraverso il terminale. 
app.get('/users/:id', user.get) //si attiva nel momento in cui il client fornisce l'id. Se lo user esiste e non è cancelled lo fa vedere. 

app.put('/users/:id', user.update) 

app.delete('/users/:id', user.remove)
app.post('/users', user.create)

app.get('/todos', todo.getAll)
app.get('/todos/search', todo.search)
app.get('/todos/:id', todo.get)
app.put('/todos/:id', todo.update)
app.delete('/todos/:id', todo.remove)
app.post('/todos', todo.create)

app.post('/users/:idu/todos/:idt', todoUser.create)
app.delete('/users/:idu/todos/:idt', todoUser.remove)
app.put('/users/:idu/todos/:idt/completed', todoUser.completed)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})