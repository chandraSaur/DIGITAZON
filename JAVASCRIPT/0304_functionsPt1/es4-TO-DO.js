console.log('Es 4 ------------------');

// Es 4
// creare una funzione treeStr che prende in ingresso una stringa che deve avere una lunghezza superiore pari e superiore a 4 e stampa la seguente formattazione in output:

// treeStr('javascript') 
//             s        // (string.length/2)-1
//            s c       // = =   + (string.length/2) 
//         a s c r      // ==         ==                 string.length/2 +1    string.length/2 -2
//      v a s c r i                                                                                  +2   -3
//   a v a s c r i p
// j a v a s c r i p t

function treeStr(string) {
    if ((string.length%2!==0) || (string.length<4)){
        return `Errore`
    }
    let half = (string.length/2)-1
    let countPlus = 0
    let countMin = 0
    let increment = half + countPlus
    let decrement = half - countMin

    for (let i = half; i < string.length; i++) {
        console.log(string.charAt(half))+countPlus;  
        countPlus+=1
    }
}

console.log(treeStr('javascript'));
