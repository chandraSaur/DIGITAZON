//  scrivere un componente che mostri il colore relativo ad una stringa RGB: deve essere una input per R, una per G, una per B. Una volta che l'utente ha inserito i tre valori il colore deve apparire in una zona dedicata.

import {useState, useEffect} from "react"
import './rgbFinder.css'

export function RGBFinder() {
    const [red,setRed] = useState(0)
    const [green,setGreen] = useState(0)
    const [blue,setBlue] = useState(0)

    const windowStyle = {
        backgroundColor: `rgb(${red},${green},${blue})`
    }

    return (
        <div className="container">
            <div className="window-style" style={windowStyle}></div>
            <div>
                <Input color="Red" setColor={setRed}/>
                <Input color="Green" setColor={setGreen}/>
                <Input color="Blue" setColor={setBlue}/>
            </div>
        </div>
    )
    }


function Input({color, setColor}) {
    return(
        <input type="number" placeholder={color} min="0" max="255" onChange={(e)=> {
            const value = e.target.value
            if (color == "Red"){
                setColor(value)
            }
            if (color == "Green"){
                setColor(value)
            }
            if (color == "Blue"){
                setColor(value)
            } 
        }}></input>
    )
}
 