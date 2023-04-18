// Ex 4
// creare una mappa che rappresenta 5 stili CSS a piacere e stamparla in output.
// Creare la funzione showCSS che prende in ingresso la precedente mappa e stampa tutti i suoi elementi.

let m1 = new Map ([
    ['background-color', 'purple'],
    ['height', '200px'],
    ['color', 'white'],
    ['font-family', 'Arial'],
    ['font-size','bold'],
])

console.log(m1);

function showCSS (map){
    map.forEach(function (v, k) {
        console.log(k + ' ' + v);  
    })
}

const showMap = showCSS(m1)
console.log(showMap)