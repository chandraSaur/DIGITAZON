import axios from 'axios';

async function addPhoto(albumId) {
    let res = await axios.post(`http://localhost:3000/albums/${albumId}/photos`, {
      nome: 'Firepit',
      hashtags: ['#winter', '#snowman', '#snow'],
      url: 'https://www.techo-bloc.com/assets/ee/9d/ee9d0bb1-ba36-4a16-ab8a-e1eb7b057ce2/d800x800-outdoor-firepit-Prescott-Fire-Pit-foyer-exte%CC%81rieur-2019-CA048-29.jpg'
    });
    console.log(res.status, res.data);
}

addPhoto(1686907520944);

// nome: 'Snowman',
// hashtags: ['#winter', '#snowman', '#snow'],
// url: 'https://t4.ftcdn.net/jpg/05/32/30/47/360_F_532304704_AHV3elLaleRoIjhOKRCqNSYmTJpEQzTz.jpg'
