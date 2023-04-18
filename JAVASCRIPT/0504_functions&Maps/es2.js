// Ex 2
// creare la funzione countVowels che prende in ingresso una stringa, e restituisce una mappa che avrà per chiavi tutte le vocali alfabetiche e per rispettivi valori il numero di occorrenze di ogni vocale nella stringa
// es 'ciao a tutti'   produce  { a => 2, e => 0, i => 2, o => 1, u => 1 }
function countVowels(word) {

    let m1 = new Map()
    let counters = [0, 0, 0, 0, 0]
        
        for (let i=0; i<word.length; i++) {
            if (word[i] == 'a'){
                counters[0]++
            }
            if (word[i] == 'e'){
                counters[1]++
            }
            if (word[i] == 'i'){
                counters[2]++
            }
            if (word[i] == 'o'){
                counters[3]++
            }
            if (word[i] == 'u'){
                counters[4]++
            }
        }
    
        m1.set('a',counters[0])        
        m1.set('e',counters[1])
        m1.set('i',counters[2])
        m1.set('o',counters[3])
        m1.set('u',counters[4])

        return m1 
}

let string1 = 'ciao a tutti'
const fun = countVowels(string1)

console.log(fun);
