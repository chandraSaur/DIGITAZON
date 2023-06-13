// si richiede di creare un componente che sia la versione estremamente semplificata di una riga di Excel. Si devono creare n input dove n e' una prop, ogni qualvolta un input cambia si deve salvare nello stato:
// * il numero totale di celle che hanno un valore al loro interno
// * un array con tutti i valori nelle celle

import {useState, useEffect} from "react"
import './ExcelCopy.css'

export function Excel() {
    const [count, setCount] = useState(0)

    

    return (
        <>
            <CreateInput value='4' />
        </>
    )
}

function CreateInput({value}) {
    const n = value; 
    const numberOfInput = []; 
    for (let i = 0; i < n; i++) {
        numberOfInput.push(i); 
    }
    return(
        numberOfInput.map((i) => 
            <input key={i}></input>    
        )
    )
}

// creare stato count, setCount
// nel momento in cui uno dei n input cambia, si attiva lo use effect che aumenta il contatore dello stato count