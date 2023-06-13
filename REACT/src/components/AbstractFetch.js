// scrivere un componente che astragga il funzionamento della fetch e deve quindi accettare in ingresso: 
//un URL e una funzione che verrà richiamata con il risultato quando la fetch termina.
// Mostrare un esempio di utilizzo. 

import { useEffect, useState } from "react"

function Fetch({URL,setRes}){
    
    useEffect(()=>{
        async function fetch(){
            let res= await fetch(URL)
            let json= await res.json()
            setRes(json)
        }
        fetch()
    },[])
}

export function AbstractFetch(){
    let [res,setRes] = useState()
    
    return(
        <>
        <h1>Fetch</h1>
        <Fetch setRes={setRes} URL='https://fakestoreapi.com/products'/>
        {res.map((obj)=> <div key={obj.id}> {obj.title} </div> )}
        </>
    )
}