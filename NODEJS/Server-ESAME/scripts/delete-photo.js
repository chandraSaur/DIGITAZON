import axios from 'axios';

async function deletePhoto(albumId, photoName) {
    let res = await axios.delete(`http://localhost:3000/albums/${albumId}/photos/${photoName}`)
    console.log(res.status, res.data);
}

deletePhoto(1686907520944, "Firepit");