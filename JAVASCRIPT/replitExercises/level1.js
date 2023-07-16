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

// PSEUDOCODICE
// creo un'array chiamato vowels in cui inserisco le vocali
// creo una stringa word
// creo funzione countVowels che prende in ingresso una stringa (e l'array?).
// creo un contatore numOfVowels, lo pongo uguale a zero e mi servirà per contare il numero di vocali incontrate
// costruisco un ciclo for che va da i = 0 a i<stringa.length e progredisce di i++
// al suo interno costruisco un altro for che lavora sull'array con j 
// e nell'if controlla se charAt(i)==array[j] allora numOfVowels++ 
// la funzione ritorna numOfVowels

let vowels = ['a','e','i','o','u']
let word = 'aiuola'

function countVowels(string,array) {
  let numOfVowels=0
  for (let i = 0; i < string.length; i++) {
    array.forEach(el => {
      if (string.charAt(i)==el){
        numOfVowels++
      }
    });
  } return numOfVowels
}

console.log(countVowels(word,vowels));

//1.6
// scrivere una funzione chiamata createArray che 
// dato un numero n in ingresso
// ritorni un array lungo n che contiene tutti n

// ad esempio per 3 ritorna [3, 3, 3]
// ad esempio per 5 ritorna [5, 5, 5, 5, 5]
// ad esempio per 0 ritorna []
// ad esempio per -1 ritorna []


//PSEUDOCODICE
// creo la funzione createArray che prende in ingresso un numero n che sarà sia il numero di elementi nell'array che il numero che sarà ripetuto
// creo l'array vuoto da riempire
// creo un ciclo for che va da i=0 a i<n che continua per i++ 
// il quale pusha ad ogni ciclo il numero n nell'array
// la funzione ritorna l'array 

function createArray(n) {
  let arr = []
  for (let i = 0; i < n; i++) {
    arr.push(n)
  }
  return arr
}

console.log(createArray(0))

//1.7
// scrivere una funzione chiamata even che 
// dato un array di numeri in ingresso
// ritorni un array che contiene solo i numeri pari

//PSEUDOCODICE
// creo la funzione even che prende in ingresso un array di numeri misti
// creo un array vuoto
// creo un ciclo for che itera su tutti gli elementi, parte da 0 e finisce ad array.length 
// inserisco un if per il quale se il numero corrispondente all'indice considerato è pari lo pusherà all'interno dell'array vuoto
//ritorno l'array

function even(arr) {
  let emptyArr= []
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]%2==0){
      emptyArr.push(arr[i])
    }
  }
  return emptyArr
}

console.log(even([2,5,8,9,3,-2,6]));

//1.8
// scrivere una funzione chiamata isDivisible che 
// dato un numero a e un numero b
// ritorni true se a e' divisibile per b, false altrimenti

//PSEUDOCODICE
//creo la funzione isDivisible che prende in ingresso due numeri (a, b)
//scrivo un if per il quale se a diviso b da resto zero allora ritorno true
//altrimenti ritorno false
//
//

function isDivisible(a,b) {
  if (a%b==0) {
    return true
  } return false
}

console.log(isDivisible(9,3));

//1.9
// scrivere una funzione chiamata isInArray che 
// dato un array di numeri e un numero in ingresso
// ritorna true se il numero e' presente nell'array
// false altrimenti

//PSEUDOCODICE
//creo la funzione isInArray che prende in ingresso un array pieno di numeri ed un numero n 
//posso utilizzare il metodo includes oppure il ciclo for che permette di controllare gli elementi dell'array uno alla volta. 
//utilizzando il metodo includes, lo inserisco in un if e controllo se l'array include n e restituisce true nel caso sia così
//altrimenti restituisce false
//con il ciclo avrei dovuto iterare e controllare gli elementi uno ad uno. Una volta che l'iesimo elemento dell'array fosse risultato uguale a n allora la funzione avrebbe restituito true altrimenti false

function isInArray(arr, n) {
  if (arr.includes(n)) {
    return true
  } return false
}

console.log(isInArray([1,2,3],4));
console.log(isInArray([1,2,3],3));

//1.10
// scrivere una funzione chiamata isInString che 
// date due stringhe in ingress
// ritorna true se la seconda stringa e' contenuta nella prima
// false altrimenti

//PSEUDOCODICE
//creo la funzione isInString che prende in ingresso due stringhe s1 ed s2
//utilizzo il metodo includes e controllo if in s1 vi è s2 ritorno true altrimenti false.
//è possibile anche risolverlo senza l'includes dando in ingresso anche una funzione in grado di creare un array con le parole della frase allArrayWords 
//creo un for che itera su tutti gli elementi dell'array creato con la funzione allArrayWords (scritta dopo) e controlla se l'i-esimo elemento corrisponde ad s2
// se s2 è contenuto in s1 restituisco true altrimenti false
// allArrayWords  prende in ingresso la s1: 
//creo un array vuoto
//creo una stringa vuota CURRENT
//creo un for che va da 0 alla lunghezza di s1 e aumenta di 1. 
//itero tutte le lettere della stringa e li aggiungo a current . 
// se non incontro uno spazio agigungo la lettera a current altrimenti pusho current nell'array vuoto e resetto il valore di current. continuo così sino alla fine della stringa
//pusho l'ultimo current creato se no la funzione restituirebbe l'array senza aver aggiunto l'ultima parola
// ritorno l'array creato
console.log('------isInString------');

function isInString(fn,s1,s2) {
  let toggle = false
  fn(s1).forEach(element => {
    console.log(element[i]);
    if(element[i]==s2){
      toggle = true
    }
  });
  return toggle
}

function allArrayWords(s1) {
 let arr = []
 let current=''
 for (let i = 0; i < s1.length; i++) {
    if (s1.charAt(i)!==' '){
      current+= s1.charAt(i)
    } else {
      arr.push(current)
      current = ''
    }
 } 
 arr.push(current) 
 return arr
}

console.log(isInString(allArrayWords,'Welcome to Jurassic Park','Park'));

// console.log(isInString(allArrayWords,'Welcome to Jurassic Park', 'Jurassic'));



//1.11
// scrivere una funzione chiamata larger che 
// dati due numeri a e b che ritorna il maggiore

function larger(a,b) {
  let maxNum = Math.max(a,b)
}

console.log(larger(3,7));


//1.12
// scrivere una funzione chiamata lessThan che 
// dati due numeri a e b che ritorna true se a e' minore di b
// false altrimenti

//PSEUDOCODICE
// scrivere la funzione lessThan che prende in ingresso due numeri a e b
// se a < b
//    ritorna true
// altrimenti
//   ritorna false

function lessThan(a, b) {
  if (a < b) {
    return true
  } else {
    return false
  }
}

console.log(lessThan(4, 10));
console.log(lessThan(10, 4));


//1.13
// scrivere una funzione chiamata stringConcat che 
// date due stringhe 
// ritorni una stringa risultato della concatenazione 
// delle due, con in mezzo il simbolo #
// ad esempio per "link" e "query" ritorna "link#query"

//PSEUDOCODICE
// funzione stringCoat che prende in ingresso string1 e string2
// return string1+#+string2

function stringCoat(string1, string2) {
  return string1 + '#' + string2
}

console.log(stringCoat("Hello", "World"));


//1.14
// scrivere una funzione chiamata sum che 
// dato un array di numeri in ingresso
// ritorni la somma dei numeri contenuti nell'array

//PSEUDOCODICE
// creo sum che prende ARR in ingresso
// chiamo arrSum uguale alla reduce di arr
// con result e n 
// che somma result+n 
// restituisce arrSum

function sum(arr) {
  let arrSum = arr.reduce((result,n) => result + n)
  return arrSum
}

console.log(sum([1,5,7,3,9])); //25



