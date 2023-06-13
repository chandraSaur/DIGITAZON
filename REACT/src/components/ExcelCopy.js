import {useState, useEffect} from "react"
import './ExcelCopy.css'


function ValueInput() {
    const [value,setValue]=useState('')

    let n = {value}
    let numberOfInput=[]
    for (let i = 0; i < n; i++) {
        numberOfInput.push(i)
    }
    console.log(numberOfInput);

    return(
        <input onChange={(e) => setValue(e.target.value)}></input>
    )
}


export function ExcelCopy() {
    return(
        <ValueInput/>
    )
}







// n input: crearli con una mappa in base a n. 