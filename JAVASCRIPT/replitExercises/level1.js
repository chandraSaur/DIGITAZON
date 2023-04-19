// 1.1 
// scrivere una funzione chiamata between che 
// dati due numeri a e b in ingresso
// ritorni un array che contiene tutti i numeri compresi tra a e b, estremi esclusi

function between(a, b) {
    let arr = []
    for (i=a+1; i < b; ++i){
      arr.push(i);
    }
    return arr
  }
  console.log(between(3,8))

// 1.2 
// scrivere una funzione chiamata biggerString che 
// date due stringhe in ingresso
// ritorni la piu' lunga

function biggerString(a, b) {
    if (a.length > b.length){
      return a
    } else {
      return b
    }
  }
  
  console.log(biggerString([1,4,7],[3]))

//1.3 
// scrivere una funzione chiamata countNoSpaces che 
// data una stringa come parametro
// ritorni un intero n che rappresenti i caratteri presenti nella
// string passata, senza contare gli spazi

function countNoSpaces(sentence) {
  let countChar = 0
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i)!= ' '){
      countChar++
    }
  } return countChar
}

console.log(countNoSpaces('quante lettere contiene questa frase?'))

//1.4
// scrivere una funzione chiamata countUndefinedKeys che 
// dato un oggetto come parametro
// ritorni un intero che rappresenti il numero di chiavi, presenti
// nell'oggetto, che hanno valore undefined o null

//creo una funzione che prende in ingresso un oggetto chiamato object
//creo il contatore countFalsey e lo inizializzo da 0
//utilizzo il metodo object.keys() che prende in ingresso l'oggetto e mi restituisce le chiavi in un array
// ciclo l'array con for each
// che prende la funzione di parametro k. 
// K mi permette di raggiungere le chiavi e quindi i valori loro assegnati  
// spiegazione dettagliata nel file daCapireMeglio.js

function countUndefinedKeys(falsey) {
  let countFalsey=0
  Object.keys(falsey).forEach(function (k) {
    if (falsey[k] == 'null' || falsey[k] == 'undefined') {
      countFalsey++   
    }
  });
  return countFalsey
}

const falseyValues = {1:'null', 2:'false',3:'empty string', 4:'undefined', 5:'0', 6:'NaN'}
console.log(countUndefinedKeys(falseyValues));

//1.5
// scrivere una funzione chiamata countVowels che 
// data una stringa in ingresso
// ritorni il numero di vocali presenti nella stringa

//1.6
// scrivere una funzione chiamata createArray che 
// dato un numero n in ingresso
// ritorni un array lungo n che contiene tutti n

// ad esempio per 3 ritorna [3, 3, 3]
// ad esempio per 5 ritorna [5, 5, 5, 5, 5]
// ad esempio per 0 ritorna []
// ad esempio per -1 ritorna []

//1.7
// scrivere una funzione chiamata even che 
// dato un array di numeri in ingresso
// ritorni un array che contiene solo i numeri pari

//1.8
// scrivere una funzione chiamata isDivisible che 
// dato un numero a e un numero b
// ritorni true se a e' divisibile per b, false altrimenti

//1.9
// scrivere una funzione chiamata isInArray che 
// dato un array di numeri e un numero in ingresso
// ritorna true se il numero e' presente nell'array
// false altrimenti

//1.10
// scrivere una funzione chiamata isInString che 
// date due stringhe in ingress
// ritorna true se la seconda stringa e' contenuta nella prima
// false altrimenti

//1.11
// scrivere una funzione chiamata larger che 
// dati due numeri a e b che ritorna il maggiore

//1.12
// scrivere una funzione chiamata lessThan che 
// dati due numeri a e b che ritorna true se a e' minore di b
// false altrimenti

//1.13
// scrivere una funzione chiamata stringConcat che 
// date due stringhe 
// ritorni una stringa risultato della concatenazione 
// delle due, con in mezzo il simbolo #
// ad esempio per "link" e "query" ritorna "link#query"

//1.14
// scrivere una funzione chiamata sum che 
// dato un array di numeri in ingresso
// ritorni la somma dei numeri contenuti nell'array


