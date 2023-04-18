console.log('Es 3 ------------------');
//Es. 3
//creare una funzione makeElement, che prende in ingresso una stringa che identifica il tipo di elemento HTML da generare, una stringa che identifica il suo id, una stringa che identifica il suo contenuto, e un booleano che indica se chiudere o meno il tag (false indica un tag a chiusura implicita, true a chiusura esplicita)
// La funzione restituisce la stringa formattata correttamente che rappresenta un elemento HTML. In fase di chiamata, stamparla in console.
// Usare i seguenti valori:

// makeElement('input', 'myInput', '', false)  ->  <input id="myInput">
// makeElement('div', 'box', 'javascript', true)  -> <div id="box">javascript</div>

function makeElement(type, id, content, closeTag) {
    
    result = `<${type} id="${id}">`

        if ((content!='') ){
            result += content
        } 

        if (closeTag==false){
            return result
        } else {
            result += `</${type}>`
        }
    return result     
}

console.log(makeElement('div', 'box', 'javascript', true))
console.log(makeElement('input', 'myInput', '', false));