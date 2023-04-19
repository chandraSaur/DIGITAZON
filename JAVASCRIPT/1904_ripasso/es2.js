// Es 2
// Scrivere una funzione che dato in ingresso un numero, ritorni il fattoriale di quel numero.

// creo la funzione
// 


function factorial(a) {
    let result = 1
    let i = 1
    while (i <= a) {
       let fact = ((a+1) - i)
       result *= fact 
       i++ 
    } return result
}

console.log(factorial(8))

// stampa sono 5 perchè la a del parametro è diversa dalla a nome della variabile. test a e test 7 non stampano nulla poichè la funzione non ha un return o un console log. 

let a = 5
function test(a) {
    a = 6
}
console.log(a)  
test (a)
console.log(a)  
test(7)         
console.log(a)  
       