// ES.1 creare la funzione selector, che accetta una stringa in ingresso è in grado di stabilire se è un selettore CSS valido (selettore semplice, senza annidamenti), tra:
//- selettore di id
//- selettore di classe
//- selettore di un elemento tra div, span e img
//Se lo è, restituisce true, altrimenti false.
//In fase di chiamata, stampare un apposito messaggio in ouput, per ognuna delle seguenti chiamate:
//selector('#myDiv')  -> è un selettore valido, di id
//selector('.myDiv')  -> è un selettore valido, di classe
//selector('div')          -> è un selettore valido, di elemento div
// selector('paperino')  -> non è un selettore valido
// selector('ul')               -> non è un selettore valido (non è div, span o img)

const validTags = ['div', 'span', 'img']
function selector(selettoreCss){
    console.log(selettoreCss);
    if(selettoreCss.charAt(0)== '#'){
        console.log('è un selettore valido, di id')
        return true
    } else if(selettoreCss.charAt(0)== '.'){
        console.log('è un selettore valido di classe')
        return true
    }
    else {
        for(let i = 0; i < validTags.length; i++) {
            if( selettoreCss == validTags[i] ) {
                console.log('è un selettore valido, di un elemento ' + validTags[i]);
                return true
            }
        }
        console.log('non è un selettore valido')
        return false
    }
    
}

selector ('#myDiv')
selector ('.myDiv')
selector('div')
selector('paperino')
selector('ul')