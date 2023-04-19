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

//Ex 4.2 
// creare una funzione getMaxMinAsArray che prende in ingresso un array di 6 numeri e restiuisce un array di 2 numeri: il primo, che rappresenta il numero più piccolo del primo array, e il secondo che rappresenta il numero più grande del primo array.
// Richiamare la funzione getMaxMinAsArray con un array di 6 numeri a piacere, salvare l'array restituito dalla funzione e stampare il numero più grande e più piccolo con un apposito messaggio

function getMaxMinAsArray(a) {
    let max = a[0]
    let min = a[0]

    for (let i = 1; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i]
        } 
        if (a[i] < min){
            min = a[i]
        }
    }

    let result = [min , max] 
    return result
}

let a = [40, 32, 9, -5, 70, 20]

console.log(getMaxMinAsArray(a));