import axios from 'axios';
import moment from 'moment';

async function modifyPhoto(albumId, photoName) {
    let res = await axios.put(`http://localhost:3000/albums/${albumId}/photos/${photoName}`, {
        nome: 'HappySnowman',
        dataModifica: moment().format()
    });
    console.log(res.status, res.data);
}

modifyPhoto(1686907520944, "Snowman" );