// Creare una ToDo list ponendo un input e un bottone che aggiunge il valore inserito in una lista sotto. 

//Schiacciando sulla parola inserita sotto, questa sarà eliminata dalla lista. 

import {useState, useEffect} from "react"
import './ToDo.css'


export function ToDo() {
    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])

    function onLiClick(i){
        const newTasks = [...tasks] 
        newTasks.splice(i, 1)
        setTasks(newTasks)
    }

    return (
    <div className="container">
        <h1>Simple To Do List </h1>
        <div>
            <input value={task} onChange={(e) => setTask(e.target.value)}></input>
            <button onClick={() => {
               const newTasks = [...tasks]
               newTasks.push(task)
               setTasks(newTasks)
               setTask("")
            }
            }
            >Add</button>
            <ul>
                {
                    tasks.map((t,i) =>
                        <li key={i} onClick={() => onLiClick(i)}>{t}</li>
                    )
                }
            </ul>
        </div>
    </div>
    )
}






