import axios from 'axios'

export async function login() {
    const res = await axios.post('http://localhost:3000/users/session', {
        username: 'chandraSaur',
        password: 'ciao123'
    })
    return res.headers['set-cookie'][0].split(';')[0]
}

export async function signup() {
    const res = await axios.post('http://localhost:3000/users/signup', {
        username: 'Bubu',
        password: '8439'
    })
    return [res.status, res.data];
}

export async function logout() {
    const res = await axios.get('http://localhost:3000/logout') //funziona solo se get, se no da errore. 
    return [res.status, res.data];
}
