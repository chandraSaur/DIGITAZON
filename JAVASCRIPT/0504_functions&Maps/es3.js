// Ex 3
// creare la funzione invertCase che prende in ingresso una stringa.
// Se la stringa è in lower case, restituisce la stringa in upper case.
// Se la stringa è in uppe rcase restituisce la stringa in lower case.
// Assumere che sia in una forma o l'altra.
function invertCase(word) {
    if (word == word.toUpperCase()){
        return word.toLowerCase()
    } else {
        return word.toUpperCase()
    }

}

let s1 = 'CIAO'
let s2 = 'ciao'

const toCase = invertCase(s2)

console.log(toCase);
