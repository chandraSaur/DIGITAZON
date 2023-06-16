import axios from 'axios';
import moment from 'moment';

async function modifyAlbum(albumId) {
    let res = await axios.put(`http://localhost:3000/albums/${albumId}`, {
        nome: 'CourmayeurHolidays',
        dataModifica: moment().format()
    });
    console.log(res.status, res.data);
}

modifyAlbum(1686907520944);