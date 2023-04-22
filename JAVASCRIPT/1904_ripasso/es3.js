console.log('-------esercizio 3-----------');
// es 3
// Utilizzando un apposita strategia e utilizzando il ciclo WHILE, stampare i numeri da 20 a 15 (scalando) omettendo il numero 19

// creo I che parte da 20
// creo un ciclo while che continua sino a quando I>15 e scala ogni volta di i--
//inserisco un if che permette di stampare i valori di i se sono diversi da 19.

function reverse(start,end) {
    let i=start
    while (i>=end) {
        if(i!==19){
            console.log(i);
        }
        i--
    }
    return i
}

reverse(20,15)

console.log('-------esercizio 3.1----------');
// es 3.1
// Creare un array di 5 parole.
// Iterare su questo array in 2 modi.
// PRIMA con un while, per stampare tutte le singole parole nell'array MAIUSCOLE. In questo caso, vogliamo ciclare l'array in senso invertito.
// DOPO con un foreach, per stampare tutte le parole dell'array in ordine

//creo l'array di cinque stringhe chiamato Apple
//creare I = apple.length-1 così che il while parta dalla fine
//creare il while che continua finchè i>=0 e la cui i diminuisce di 1 ad ogni iterazione.
//nel while inserire il log e stampare ogni stringa maiuscola apple[i].toUpperCase() 

let apple = ['iPhone', 'iPad', 'MacBook', 'AirPods', 'iPod']
let i = (apple.length)-1

while (i>=0) {
    console.log(apple[i].toUpperCase());
    i--
}

// creo il forEach che itera la stringa apple e prende in ingresso la funzione originalArray (a)
//all'interno inserisco un log degli elementi dell'array passata in ingresso tramite a

apple.forEach(a => {
    console.log(a);
});

console.log('-------esercizio 3.2----------');
// es 3.2
// creare un oggetto chiamato "language" che rappresenta un linguaggio di programmazione, e che abbia le seguenti caratteristiche:
// - proprietà label, indica il nome del linguaggio
// - proprietà tags; un array di 3 stringhe che indica le caratteristiche dell'oggetto
// - un metodo printTags che itera sui tag dell'oggetto (la proprietà TAGS) e li stampa con un WHILE
// chiamare il metodo printTags per mostrare i dati in console

//PSEUDOCODICE
// Creo l'oggetto language e inserisco le chiavi indicate nella consegna e i valori loro assegnati 
// inserisco anche la funzione printTags che prende in ingresso il parametro properties
// chiamo I = 0
// creo il while che continua sino a i < language.length 
// all'interno del while 

console.log('-------esercizio 3.3----------');
// es 3.3
//creare un array in cui occorre includere 5 dati di tipi diversi:
// - un letterale oggetto con proprietà x: 10 e y: 5
// - un numero (100)
// - una stringa ("javascript")
// - una mappa ("label" -> "sono una mappa")
// - un array [40, 50, 60]

// Iterare sull'array esterno con un foreach e se l'elemento corrente è:

// un letterale oggetto, stampa la somma delle sue proprietà x e y
// un numero, controlla se è > 100 scrivi red, altrimenti blue
// una stringa, stampa il suo primo carattere
// una mappa, stampa il valore della sua proprietà "label", se ce l'ha
// un array, stampa i numeri in ordine inverso



const obj1 = {x:10, y:5}
const map1 = new Map ()
map1.set('label','sono una mappa')

let arr3 = [40,50,60]

let arr5 = [obj1, 100, 'javascript', map1, arr3]

arr5.forEach(function (element) {
    if (element instanceof Array){
        



    } else if (element instanceof Map && element.has('label')){
        console.log(element.get('label'));
    } else if (element instanceof Object) {
        console.log(element.x + element.y)
    }

    if (typeof element == 'number' && element > 100){
        console.log('red');
    } else {
        console.log('blue');
    }

    if (typeof element == 'string'){
        console.log(element.charAt(0));
    }


    
})
