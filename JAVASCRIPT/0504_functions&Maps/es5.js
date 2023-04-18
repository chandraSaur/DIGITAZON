// Ex 5
// creare una funzione cmpArr che prende in ingresso 2 array e restituisce:
// 1 se il primo ha dimensioni maggiori del secondo
// -1 se il secondo ha dimensioni maggiori del primo
// 0 se hanno dimensioni uguali
// Testare in output il comportamento di tutte e 3 le casistiche.

function cmpArr (arr1,arr2){

        if (arr1.length > arr2.length) {
            return 1
        } else if (arr1.length < arr2.length) {
            return -1
        } 
        return 0
}

let a1 = ['Cavolfiore', 'Broccolo']
let a2 = ['Uovo']
let a3 = ['12345678']

// const compareLength = cmpArr(a1,a2)
console.log(cmpArr(a1,a2));