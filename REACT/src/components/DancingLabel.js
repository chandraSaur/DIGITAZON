// Scrivere un componente che rappresenta un input e la sua label.
// Il componente puo' essere configurato in modo che:
// la label appaia alla sinistra dell'input o alla sua destra, in base alla prop "posizione" che puo' 
// essere "l" o "r" con una funzione, passata come prop, sia possibile inibire l'inserimento di 
// certi caratteri, specificati appunto dalla funzione stessa


import {useState, useEffect} from "react"
import './DancingLabel.css'



export function DancingLabel() {

    const [value, setValue] = useState("")

    function onlyNumbers(input){
        const interi = /^[0-9\b]+$/;
        if (input === "" || interi.test(input)){    // il metodo test: utilizzato per verificare se una stringa corrisponde al pattern definito dall'espressione regolare. >> espressione.test(stringa da controllare)
            setValue(input)
        }
    }

    function onlyLetters(input){
        const lettere = /^[a-zA-Z]+$/;
        if (input === "" || lettere.test(input)){    // il metodo test: utilizzato per verificare se una stringa corrisponde al pattern definito dall'espressione regolare. >> espressione.test(stringa da controllare)
            setValue(input)
        }
    }

    return(
        <div className="container">
            <LabelPosition position="left" fn={onlyLetters} value={value}/>
        </div>
    )
}

function LabelPosition({position, fn, value}) {

    return (
        <div className={position}>
            <label for="dance"> I'm {position} </label>
            <input  name="dance" placeholder="Accetto solo lettere" onChange={(e) => fn(e.target.value)} value={value}></input>
        </div>
)}



// si può fare anche così:

// nell'onChange setti il valore, lo passi alla funzione che sta dentro l'attributo value="funzione(valore settato)" 
// nella funzione controlli che accetti o meno quell'input. A quel punto appare il tutto nel value. Passi al componente 
// la funzione e la posizione. 


// function LabelImput({posizione, funx}) {

//     const [value, setValue] = useState ('')
    
//     return (
//         <>
//             <h3>esercizio Label Imput</h3>
//             <div style={{ display: "flex", flexDirection: "row" }} >
//                 {posizione === 'l' && <label for="prova" >inserisci</label>}
//                 <input value={funx (value)} id="prova" onChange={(e)=> setValue(e.target.value)} ></input>
//                 {posizione === 'r' && <label for="prova" >inserisci</label>}
//             </div>
//           </>

//     )
// }

// const position = "l"

//     function noChar(word) {
//         if (!isNaN(word)) {
//             return word
//         } else {
//             return word.slice(0, -1)
//         }
//     }

//     function noNumber(word) {
//         const regex = /^[a-zA-Z]+$/
//         if (regex.test(word)) {
//             return word
//         } else {
//             return word.slice(0, -1)
//         }
        
//     }

//     <LabelImput posizione={position} funx={noNumber}/>
