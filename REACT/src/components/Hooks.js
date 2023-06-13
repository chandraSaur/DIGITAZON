import {useState, useEffect} from "react"

export function Hooks() { 
    const [count, setCount] = useState(0)
    function onClick() {
        setCount(count+1)
    }

    useEffect(()=> {
        console.log(count);
    }, [count]) // Array delle dipendenze. Questo array come secondo parametro rappresenta le dipendenze: al cambiare dello stato, cambia anche questo array. Si può sfruttare ad esempio quando entrambi due input hanno testo al loro interno allora compare una scritta, al contrario non appare. HooksCopy

    return (
        <>
            <h2>esercizio</h2>
            <button onClick={onClick}>Click me</button>
            <span>{count}</span>
        </>
    )       
}