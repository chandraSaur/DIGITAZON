// Scrivere una funzione AND che si comporti come l'and nei booleani (&&) e accetti un numero qualsiasi di parametri


function and(...param) {
    for (let i = 0; i < param.length; i++) {
        if (!param[i]) {
            return param[i]
        }
    }
    return true
}

let booleans = [true, true, false, true, false ]
console.log(and(...booleans));

// Scrivere una funzione che prende in ingresso un oggetto, si devono stampare solo i valori relativi a quelle chiavi:
// * "chiave1"
// * "chiave2"
// a prescindere da quante ce ne siano nell'oggetto.
// Non si possono utilizzare if, non si puo' utilizzare l'operatore punto (.) cercate di utilizzare lo spread operator e il destructoring


let obj = {
    nome : 'Mario',
    cognome : 'Rossi',
    età : 50,
    città: 'Roma',
    lavoro : 'Programmatore JavaScript'
}

//primo modo destructoring interno
function chiavi1(oggetto) {
    let {età,città} = oggetto
    console.log(età,città);
}

//secondo modo destructoring in parametri

function chiavi2({età,città}) {
    console.log(età,città);
}

chiavi1(obj)
chiavi2({nome : 'Mario', cognome : 'Rossi', età : 50, città: 'Roma'})