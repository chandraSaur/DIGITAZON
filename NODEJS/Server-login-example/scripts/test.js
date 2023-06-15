import axios from 'axios'
import {login, logout, signup} from './login.mjs'
import {getUsers} from './getUsers.mjs'

axios.defaults.validateStatus = status => true

async function test() {
    let cookie = await login()
    console.log('Hai preso il cookie');

    let users = await getUsers(cookie)
    console.log(users.length);

    await logout()
    console.log('Sloggato');

    users = await getUsers()
    console.log(users);

}
test()
