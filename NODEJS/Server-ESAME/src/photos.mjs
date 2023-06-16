import fs from 'node:fs/promises'
import axios from 'axios'
import moment from 'moment';
import albums from '../db/albums.json' assert { type: 'json' }

const DB_PATH = './db/albums.json'

//creo async ADDPHOTO
//recupera id album dal client req.params.albumid
//se l'album con quell'id esiste
//  recupero nome, hashtags e url immagine da req.body
//      costruisco newPhoto 
//      con nome, url e hashtags
//      data creazione automatica con moment
//      data modifica inizialmente automatica
//  pusho modifiche nell'array fotografie
//  aggiorno json
//  messaggio di successo
//altrimenti errore

export const addPhoto = async (req, res) => {
    const albumId = req.params.albumId; 

    if (albums[albumId]) {
        const { nome, hashtags, url } = req.body;
        const newPhoto = {
            url,
            nome,
            hashtags,
            dataCreazione: moment().format(), 
            dataModifica: moment().format() 
        };

        albums[albumId].fotografie.push(newPhoto);

        await fs.writeFile(DB_PATH, JSON.stringify(albums, null, '  '))
        res
        .status(201)
        .send({
            message: 'photo added'
        })
    } else {
        res.status(404).send({ message: 'Album not found' });
    }
}

export const modifyPhoto = async (req, res) => {
    const albumId = req.params.albumId; 
    const photoName = req.params.photoName
    const modifiedProps = req.body;

    if (albums[albumId]) {
        for (let i = 0; i < albums[albumId].fotografie.length; i++) {
            if (albums[albumId].fotografie[i].nome == photoName){
                const modifiedPhoto = { ...albums[albumId].fotografie[i], ...modifiedProps };
                albums[albumId].fotografie[i] = modifiedPhoto;

            await fs.writeFile(DB_PATH, JSON.stringify(albums, null, '  '))
            res
                .status(201)
                .send({
                    message: 'photo updated'
                })
            } else {
                res
                    .status(404)
                    .send({
                        message: 'photo not found'
                    })
            }
        }    
    } else {
        res.status(404).send({ message: 'Album not found' });
    }
}

// credo async deletePhoto
//recupero params albumId e photoName
//se l'album esiste, recupero l'array FOTOGRAFIE
//  chiamo PHOTOINDEX per cercare l'indice della foto che ha effettivamente il nome univoco dato alla foto. 
//  se trovo una foto con quel nome l'indice sarà diverso da -1 (default 
//      per quando non trovo)
//      splice per levare la foto e non avere errore dal delete che da 
//      undefined e quindi null
//      aggiorno json
//  altrimenti errore foto non trovata
//altrimenti errore album non trovato.

export const deletePhoto = async (req, res) => {
    const albumId = req.params.albumId;
    const photoName = req.params.photoName;
  
    if (albums[albumId]) {
        const fotografie = albums[albumId].fotografie;
        const photoIndex = fotografie.findIndex(photo => photo.nome === photoName);
  
        if (photoIndex !== -1) {
            fotografie.splice(photoIndex, 1);
            await fs.writeFile(DB_PATH, JSON.stringify(albums, null, '  '));
                res
                    .status(201)
                    .send({
                        message: 'photo deleted'
                    });
        } else {
                res
                    .status(404)
                    .send({
                        message: 'photo not found'
                    });
        }
    } else {
        res
            .status(404)
            .send({
                message: 'album not found'
            });
    }
  };