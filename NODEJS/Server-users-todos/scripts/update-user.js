import axios from 'axios'

async function call() {
  
  const token = 'Morena'
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };

  let res = await axios.put(`http://localhost:3000/users/2`,{
    name: 'Marie',
    surname: 'Curie'
  }, config)

  console.log(res.status, res.data)  
}

call()
