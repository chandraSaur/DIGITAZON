// Dato un array ordinato di interi tutti diversi, e un numero target, ritornare l'indice al quale il target e' trovato. Se non viene trovato ritornare l'indice al quale andrebbe inserito per mantenere l'ordine
// esempio
// nums = [1,3,5,6], target = 5
// 2
// nums = [1,3,5,6], target = 2
// 1

//Pseudocodice
//creo una funzione chiamata orderingInteger che prende in ingresso un array e un numero n
//costruisco un for che mi permette di ciclare tutti gli elementi dell'array
//se il numero n coincide con uno trovato ciclando l'array  o se esso risulta minore del valore corrente ritorno i

function orderingInteger(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]==n || arr[i]>n) {
            return i
        } 
    }
}

// console.log(orderingInteger([1,3,5,6],2));

//es 2
//Ricerca binaria
//Pseudocodice
//creo END che sarà l'indice dell'ultimo elemento dell'array
//creo HALF che sarà end diviso 2 
//controllare se n è uguale ad half ritorno indice di n
//se maggiore o minore devo prima di tutto riassegnare END
//creo START 
//se maggiore start sarà half e end sarà lo stesso
//se minore start sarà indice 0 ed end sarà il primo half
// half verrà ricalcolato con il nuovo end / 2 


function binarySearch(arr,n) {
    
    let end = arr.length-1
    let start = 0 

    while ( start <= end ) {
        let half = Math.floor((end+start)/2)  
        if (n==arr[half]) {
            return half
        }
        if (n>arr[half]){
            start = half+1  //arrotondando per difetto si deve aggiustare il caso in cui ci siano solo due elementi.
        } else {
            end = half-1
        }  
    }
    return -1 
}

console.log(binarySearch([1,2,3,5,6],7));

// Math.floor per difetto
// Math.round per eccesso


// es 3
// Dati due array ordinati creare una funzione chiamata merge che prende in ingresso i due array e ne ritorna uno solo ordinato. 
//Non si può usare array.sort
// es merge([1,2], [3,.4]) -> [1,2,3,4]
// merge([1,3,5], [2,4,6,7,8]) -> [1.2.3.4.5.6.7.8]

//PSEUDOCODICE
//creo una funzione merge che prende in ingresso due array
//unisco i due array in uno unico con concat
//creo un array vuoto
//ciclo l'array concatenato
//cerco il numero più piccolo dell'array
//levo (pop) questo dall'array concat e lo pusho nel nuovo array vuoto ordered //non si può perchè pop e push funzionano solo sul primo elemento dell'array

function merge(arr1,arr2) {
    let arr3 = arr1.concat(arr2)
    let ordered = []
    for (let i = 0; i < arr3.length; i++) {
        let currentMin = Math.min(...arr3)
        
    };
}

// soluzione da studiare
function merge(arr1, arr2) {
    let array = []
    for (let i = 0, j = 0; i < arr1.length || j < arr2.length;) {
        if (arr1[i] <= arr2[j]) {
            array.push(arr1[i])
            i++
        }
        else {
            array.push(arr2[j])
            j++
        }
    }
    return array
}

