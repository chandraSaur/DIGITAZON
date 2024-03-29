import axios from 'axios'

export async function getUsers(cookie) {
    const res = await axios.get('http://localhost:3000/users', {
        headers: {
            Cookie: cookie
        }
    })
    return res.data
    // const res = await axios.get('http://localhost:3000/users', {
    //     headers: {
    //         Cookie: 'connect.sid=s%3AhdDv3FkWNt1IGHIXtwQkcYTy3LmPA1Ix.Wt9WgErqn4lv2XVwQ40Zw2u1AnH35bDAaxtrKdEUSD0'
    //     }
    // })
    // console.log(res.status, res.data);
}
