import axios from 'axios';

async function createAlbum() {
    let res = await axios.post('http://localhost:3000/albums', {
      nome: 'SummerHolidays',
      hashtags: ['#summer', '#sea']
    });
    console.log(res.status, res.data);
}

createAlbum();