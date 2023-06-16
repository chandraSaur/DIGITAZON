import express from 'express'
const app = express()
const port = 3000

import * as album from './album.mjs'
import * as photos from './photos.mjs'

import bodyParser from 'body-parser'
app.use(bodyParser.json())


app.post('/albums', album.create)
app.post('/albums/:albumId/photos', photos.addPhoto)

app.put('/albums/:albumId', album.modifyAlbum)
app.put('/albums/:albumId/photos/:photoName', photos.modifyPhoto)

app.delete(`/albums/:albumId`, album.deleteAlbum)
app.delete(`/albums/:albumId/photos/:photoName`, photos.deletePhoto)

app.get('/albums', album.getAll)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})