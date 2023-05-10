// crea due bottoni ping e pong e quando clicchi ping esce la scritta ping e viceversa.

import './PingPong.css';
import {useState} from "react"

export function PingPong() {
    const [boing, setBoing] = useState('')
    return (
        <>
            <Buttons name="Ping" setBoing={setBoing}/>
            <Buttons name="Pong" setBoing={setBoing}/>
            <span>{boing}</span>
        </>
    )
}

function Buttons({name, setBoing}) {
    return (
        <button onClick={() => setBoing(name)}>{name}</button>
    )
}