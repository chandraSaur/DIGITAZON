import axios from 'axios'

async function call() {
  let clientToken = 'ciao'
  let url = `http://localhost:3000/users/${clientToken}/2`

  let res = await axios.put(url, {
    name: 'Marie',
    surname: 'Curie'
  })
  console.log(res.status, res.data)  
}

call()
