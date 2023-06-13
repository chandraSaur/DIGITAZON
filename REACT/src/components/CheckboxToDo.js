// creare una lista con un input e accanto ad ogni voce della lista una checkbox che quando spuntata 
// porta la voce in fondo con opacità 0.5. Prendere le voci dalla seguente api : 'https://jsonplaceholder.typicode.com/todos'

// nella funzione di export creo uno stato per raccogliere le varie voci in un array
// effettuo la chiamata asincrona dentro lo useEffect
// mappo l'array per creare la checkbox + voce per ogni voce presente nell'array


import {useState, useEffect} from "react"
import './CheckboxToDo.css'


export function CheckboxToDo() {
    const [voci, setVoci] = useState([])
    const [checked, setChecked] = useState('checked')

    useEffect(() => {
        async function asyncCall(){
            const res = await fetch('https://jsonplaceholder.typicode.com/todos')
            const json = await res.json()
            setVoci(json.slice(0,10))
        }
        asyncCall()
    }, [])


    let completati = voci.filter( (voce) =>
        voce.completed 
    )
    let nonCompletati = voci.filter( (voce) =>
        !voce.completed 
    )
    let arr = nonCompletati.concat(completati)

    // let check = ''
    // (voce.completed) ? check="checked" : ''

    // function map(arr, fn) {
    //     let res = []
    //     for (let index = 0; index < arr.length; index++) {
    //         const element = arr[index];
    //         res.push(fn(element))
    //     }
    //     return element
    // }

    function handleClick (id){                      // il return non blocca l'iterazione. 
        let newVoci = voci.map((v) => {             // map produce un nuovo array 
            if (v.id==id){
                v.completed=!v.completed
            }
            return v
        })
        setVoci(newVoci)
        // map voci invertire completed
        // copia + set
    }

    return (
        <>
            {
            arr.map((t,i) =>
                <div key={i} className="lista">
                    <input type="checkbox" onChange={()=>handleClick(t.id)} checked={t.completed}></input>
                    <ul>                  
                        <li >{t.title}-{t.completed.toString()}</li>
                    </ul>
                </div>
            )
            }
        </>
    )
}


// cercare setTimeout --> setTimeout(fn, ms) => dopo tot ms esegui fn. 