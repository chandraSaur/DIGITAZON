import fs from 'node:fs/promises'
import moment from 'moment';
import albums from '../db/albums.json' assert { type: 'json' }

const DB_PATH = './db/albums.json'

//creo la funzione async CREATE da esportare (in index js.) 
//Alla rotta /albums il client fornisce i dettagli req.body
// creo NEWALBUM
//  nome e hashtags dal client
//  data creazione automatica con libreria moment
//  data modifica: prima automatica = alla creazione POI inserita nella put quando si modificherà qualsiasi dei campi con libreria moment
//  fotografie: 
//creo album con id autogenerato
// aggiorno json
// messaggio successo

export const create = async (req, res) => {
    let id = Date.now()
    const { nome, hashtags } = req.body;
    const newAlbum = {
        nome,
        fotografie:[],
        hashtags,
        dataCreazione: moment().format(), 
        dataModifica: moment().format() 
    };

    albums[id] = newAlbum
    await fs.writeFile(DB_PATH, JSON.stringify(albums, null, '  '))
    res
        .status(201)
        .send({
            message: 'album created'
        })
}

// creo async MODIFY
// alla rotta /albums/:albumId il client invia le modifiche 

export const modifyAlbum = async (req, res) => {
    const albumId = req.params.albumId; 
    const modifiedProps = req.body;

    if (albums[albumId]) {
        const modifiedAlbum = { ...albums[albumId], ...modifiedProps };
        albums[albumId] = modifiedAlbum;

        await fs.writeFile(DB_PATH, JSON.stringify(albums, null, '  '))
        res
            .status(201)
            .send({
                message: 'album updated'
            })
    } else {
        res.status(404).send({ message: 'Album not found' });
    }
}

//creo la funzione deleteAlbum che dal client recupera req.params.id
//se l'album esiste
//  con delete elimino albums[albumId]
//  le foto si eliminano automaticamente poichè in un array interno all'album stesso. 
//  aggiorno il json
//altrimenti
//  errore

export const deleteAlbum = async (req,res) => {
    const albumId = req.params.albumId; 
    if(albums[albumId]){
        delete albums[albumId]
        await fs.writeFile(DB_PATH, JSON.stringify(albums, null, '  '))
        res
            .status(201)
            .send({
                message: 'album succesfully deleted'
            })
    } else {
        res
            .status(404)
            .send({
                message: 'album not found'
            })
    }
}

export const getAll = async (req,res) => {
    res.json(albums);
}
