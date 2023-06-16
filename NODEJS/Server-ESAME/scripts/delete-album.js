import axios from 'axios';

async function deleteAlbum(albumId) {
    let res = await axios.delete(`http://localhost:3000/albums/${albumId}`)
    console.log(res.status, res.data);
}

deleteAlbum(1686913033096);