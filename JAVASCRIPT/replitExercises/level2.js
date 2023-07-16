// 3.3
// scrivere una funzione chiamata findLongestSubstring
// che prende in ingresso una stringa
// la funzione deve ritornare la stringa piu' lunga che non ha 
// ripetizioni

//PSEUDOCODICE
// scrivo fn findLongestSubstring che prende in ingresso la stringa s
// creo wordArr come array vuoto
// creo word = ''
// dentro il ciclo:
// creo char = s[i]
// se in word c'è il carattere char ( se word.indexOf(char) =! -1)
//      pusho word in word arr
//      resetto word
// altrimenti
//      word+=char
// fuori dal ciclo 
// applico la reduce a wordArr
// tra longest e current
// se longest.length > current.length
//   ritorna longest
// altrimenti
//   ritorna current

function findLongestSubstring(s){
    let wordArr = []
    let word = ''

    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (word.indexOf(char) !== -1){
            wordArr.push(word)
            word = s[i]
        } else {
            word += char
        }
    } 

    let longestSubstring = wordArr.reduce((longest, current) => 
        (longest.length > current.length) ? longest : current, "") 
    return longestSubstring
}
console.log(findLongestSubstring('pwwkew'));

//3.4
// scrivere una funzione chiamata firstSum
// che prende in ingresso un array e un numero,
// la funzione deve ritornare la prima coppia di numeri la cui 
// somma e' pari al numero passato come argomento

// suggerimento: per ritornare una coppia di numeri utilizzate
// un array, chiaramente a lunghezza 2

//PSEUDOCODICE
//creo array SUMPAIRS
//creo ciclo for
//  chiamo FIRST s[i]
//  se arr.indexOf(first-n)!== -1
//      pusho first e first-n in sumpairs
//      esco dal ciclo
//  altrimenti 
//      continuo il ciclo
// ritorno sumpairs
 
function firstSum(arr, n) {
    let sumPairs = []
    for (let i = 0; i < arr.length; i++) {
        let first = arr[i]
        let second = Math.abs(first-n)
        if (arr.indexOf(second) !== -1){
            sumPairs.push(first, second)
            break
        } else {
            continue
        }
    }
    return sumPairs
}

console.log(firstSum([1,2,5,8,3],3));

// 3.5
// scrivere una funzione chiamata isPalindrome che 
// data una parola 
// ritorni true se e' palindroma, false altrimenti

// ad esempio con "ciao" ritorna false
// ad esempio con "abba" ritorna true
// ad esempio con "ada" ritorna true
// ad esempio con "1234321" ritorna true
// ad esempio con "123321" ritorna true
// ad esempio con "123421" ritorna false

//PSEUDOCODICE
//creo un ciclo for che va da i a string.length e continua per i++
// se la lettera al posto i è == alla lettera alla fine della stringa corrispettiva
//      allora continua
//altrimenti 
//      ritorna falso
//alla fine del ciclo ritorna true

function isPalindrome(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] == string[string.length-(1+i)]){
            continue
        } else {
            return false
        }
    }
    return true
}
console.log(isPalindrome('123421'));
