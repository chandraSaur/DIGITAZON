// Ex 4
// creare un array di oggetti, che rappresentano le dimensioni dei lati di un rettangolo, e avranno proprietà base e altezza.
// Nell'array inserire 5 oggetti con questo template e valori a piacere.
// Creare una funzione parseRectangles che prende in ingresso un array di oggetti con la struttura descritta e restituisca l'indice del rettangolo con l'area maggiore.

const arr = [
    { base: 1, altezza: 5 },
    { base: 5, altezza: 5 },
    { base: 10, altezza: 5 },
    { base: 1, altezza: 50 },
    { base: 10, altezza: 50 }
];

function parseRectangles(arr) {
    let maxArea = 0;
    let maxAreaIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        const currentArea = arr[i].base * arr[i].altezza;
        if (currentArea > maxArea) {
            maxAreaIndex = i;
            maxArea = currentArea;
        }
    }
    return `L'elemento con indice ${maxAreaIndex} ed area ${maxArea}`;
}

console.log(parseRectangles(arr));