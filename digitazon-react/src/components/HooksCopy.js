import {useState, useEffect} from "react"

export function Hooks2() { 
    const [inputA, setInputA] = useState('')
    const [inputB, setInputB] = useState('')
    const [ok, setOk] = useState()        //serve per

    useEffect(()=> {
        setOk (inputA && inputB ? 'è ok'  : '')
    }, [inputA, inputB]) 
    // esegue la funzione anonima quando uno dei due stati passati cambia. Se cambiano inputA o inputB viene eseguita questa funzione anonima passata a useEffect. Si inseriscono tutti gli stati che vogliono essere cambiati.

    return (
        <>
            <h2>esercizio</h2>
            <input value={inputA} onChange={(e)=> setInputA(e.target.value)}></input>
            <input value={inputB} onChange={(e)=> setInputB(e.target.value)}></input>
            <span>{ok}</span>
        </>
    )       
}