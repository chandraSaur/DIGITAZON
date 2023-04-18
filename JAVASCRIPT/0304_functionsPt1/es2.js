console.log(' Es 2 ------------------');

// Es. 2
// creare una funzione checkArray che prende in ingresso un array di N numeri e stampa:
// - quanti sono pari
// - quanti sono dispari
// - se contiene il numero 10
// - se è un array o meno
// chiamare con:
// checkArray([90, 78, 45, 34])
// checkArray([0, 0, 0])
// checkArray([10])
// checkArray(10)

function checkArray (s){ 
let conteggiodeipari = 0

if(Array.isArray(s)){
    console.log('è un array')
    for( i = 0; i < s.length; i++){
    if ( (s[i] % 2)== 0){
        conteggiodeipari++ 

        if ((s[i]) == 10){
            console.log('si, contiene 10')
        }
    }  
}
} 
else {
    console.log('non è un array')
}

console.log(conteggiodeipari + ' pari')
console.log((s.length - conteggiodeipari) + ' dispari')

}

checkArray([90, 78, 45, 34])
checkArray([0, 0, 0])
checkArray([10])
checkArray(10)
