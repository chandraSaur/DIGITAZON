import axios from 'axios'

async function getAlbums() {
  let res = await axios.get('http://localhost:3000/albums')
  return res.data
}

getAlbums()