//scrivere un pulsante non cliccabile, quando l'utente ci arriva quasi sopra 
//(come potete programmare questo "quasi"?) il pulsante si sposta in un punto random della pagina.

import {useState, useEffect} from "react"
import './CrazyButton.css'

export function CrazyButton() {
    const [position, setPosition] = useState({x: 0, y: 0})

    const newPosition = () => {
        let newX =  Math.random()*1700
        let newY = Math.random()*800
        setPosition({x: newX, y: newY})

    } 
    const posizione = {
        position: "absolute",
        left: position.x,
        top: position.y
    }

    return(
        <div className="spostati" style={posizione} onMouseEnter={newPosition} >
        <button>Cliccami</button>
        </div>
    )
}