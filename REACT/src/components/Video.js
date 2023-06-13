import {useState, useEffect} from "react"
import axios from 'axios';


export function VideoApp() {
    const [input, setInput] = useState("")
    const [word, setWord] = useState("")
    const [response, setResponse] = useState([])
    const [link, setLink] = useState("")


     console.log(response);

    useEffect (() => {

        

    //     async function responseCall() {
    //         const res = await fetch('https://api.openai.com/v1/chat/completions', {
    //             method: 'POST',
    //             headers: {
    //               'Content-Type': 'application/json',
    //               Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
    //             },
    //             body: JSON.stringify({
    //               max_tokens: 1000,
    //               model: 'gpt-3.5-turbo',
    //               temperature: 0.8,
    //               top_p: 1,
    //               presence_penalty: 1,
    //               messages:[{content:'suggeriscimi un video dei The 1975', role:'assistant'}]
    //             }),
                
    //           });   
    //         // console.log(await res.json());         
    //         let json = await res.json()
    //         setResponse(await json.choices[0].message.content) // risposta della ai con frase discorsiva da filtrare. 
    //     }
    //     responseCall()
    // },[input])
    })
    // const filterResponse = response.split(' ')

    return (
        <div className="container">
            <div>
                <input placeholder="Artista" onChange={(e) => setWord(e.target.value)}></input>
                <button onClick={() => {
                    const newInput = [...input]
                    newInput.push(word)
                    setInput(newInput)
                }
                }>Cerca</button>
            </div>
            <span>{input}</span>
            {/* <video width="640" height="480" controls >
                <source src="percorso_del_tuo_video.mp4" type="video/mp4"/>
            </video> */}
        </div>
    )
}