import axios from 'axios'

async function call() {
  let res = await axios.post('http://localhost:3000/users', {
    name: 'Alexa',
    surname: 'Blue'
  })
  console.log(res.status, res.data)
}

call()