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

console.log(factorial(0))

// stampa sono 5 perchè la a del parametro è diversa dalla a nome della variabile. test a e test 7 non stampano nulla poichè la funzione non ha un return o un console log. 
// con il return, alla riga 29 e 30 stampa 6 perchè la a e il 7 si riferiscono alla a della funzione con scope interno ad essa dato che per lo shadowing la a interna mette in ombra quella esterna. La a esterna non viene quindi riassegnata nella funzione, perciò tutti i console log successivi alla chiamata della funzione (righe 30 e 32 ) ri riferiscono alla a=5 con scope interno (che senza la chiamata della funzione non viene più messa in ombra).
// senza il return, siccome la chiamata della funzione si riferisce alla a parametro, il risultato del log è undefined. Ciò succede perchè lo scope della a alla quale si riferiscono è interno alla funzione stessa e dall'esterno non può essere raggiunto. 

let a = 5
function test(a) {
    a = 6 
    // return a
}
console.log(a) 
test(a)
console.log(a)  
test(7)        
console.log(a)
  
       