import axios from 'axios'

async function call(id) {

  const token = 'Morena'
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };

  let res = await axios.delete(`http://localhost:3000/users/${id}`, config)
  console.log(res.status, res.data)
}

call(process.argv[2])