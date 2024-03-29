import express from 'express'
import fs from 'node:fs/promises'
import axios from 'axios'

const app = express()
const port = 3000

import bodyParser from 'body-parser'
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})