// scrivere un componente che data una frase inserita dall'utente in un input text la stampi una parola per volta come lista puntata sotto di esso.
import {useState, useEffect} from "react"



export function DottedList() {
    const [sentence, setSentence] = useState("")
    const nome = sentence.split(' ')

    return(
        <div className="container"> 
            <input type="text"  onChange={(e)=> {
                setSentence(e.target.value)
            } }></input>
            <ul>
            {
                nome.map((s,i) =>
                    <li className="dotted" key={i}>{s}</li>
                )
            }
            </ul>
        </div>
    )
}




// export function DottedList() {

//     const [sentence, setSentence] = useState("")
//     const [list, setList] = useState([])

//     return(
//         <div className="container">
//             <div>
//                 <input type="text" onChange={(e)=> setSentence(e.target.value)} ></input>
//                 <button onClick={() => {
//                     const newList = [...list]
//                     newList.push(sentence)
//                     setList(newList)
//                     setSentence("")
//                 }}
//                 >Add</button>
//             </div>
//             <ul>
//                 {
//                     list.map((s,i) =>
//                         <li className="dotted" key={i}>{s}</li>
//                     )
//                 }
//             </ul>
//         </div>
//     )
// }
