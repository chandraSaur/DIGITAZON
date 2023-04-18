// Ex 4
// creare una funzione getStr che prende in ingresso un array di stringhe e restituisce il valore della stringa alla posizione 2
// chiamare la funzione getStr con un array di 5 stringhe a piacere e stampare il valore prodotto.
// Per chi riesce: stampare il valore prodotto in upper case

function getStr(arr5) {
    return arr5[1].toUpperCase()
}

let fruits = ['watermelon', 'blueberry', 'blackberry', 'ananas', 'papaya']

console.log(getStr(fruits));

//Ex 4.1
// Creare una funzione makeObj che prende in ingresso due parametri:
// una stringa e un numero.
// La funzione crea e RESTITUISCE un oggetto con due proprietà: label, che avrà come valore il valore passato come primo parametro, e rate, che avrà come valore il valore passato come secondo parametro.
// Chiamare la funzione makeObj due volte con valori a piacere per creare e stampare in output due oggetti con i valori indicati.


function makeObj(str, num) {
    return {'label':str, 'rate':num}
}

console.log(makeObj('javascript', 04));
console.log(makeObj('HTML&CSS', 02));