// es 1
//PSEUDOCODICE
//creo la stringa SPESE
//creo array REPARTI
//creo un array vuoto REPARTO
//creo una stringa vuota ELEMENT 
//creo una prima funzione createMatrix che prende in ingresso la stringa e restituisce una matrice
//in un for 
//  riempio la stringa vuota element e ogni volta che trovo un a capo pusho nell'array REPARTO
//  se trovo  due a capo consecutivi
//  pusho REPARTO nella matrice REPARTI
//  resetto il valore di ELEMENT
//  resetto REPARTO
//continuo fin quando non finisce la stringa
//creo un'array  SOCIETA' in cui inserisco degli oggetti nei quali assegno alla chiave reparto il primo elemento di ogni array nella matrice
//assegno alla chiave spesa la somma di tutti gli altri elementi degli array nella matrice
//creo una funzione printSocietyExpenses  che prende in ingresso l'oggetto
//creo una variabile MAXVALUE
//se il valore della chiave spesa è maggiore di max value
//  riassegno a maxvalue il valore della suddetta chiave
//faccio questo per tutti i valori della chiave spesa. 
// ritorno la chiave il cui valore è uguale a maxvalue 
// ritorno maxvalue
//ragiono allo stesso modo ma per cercare MINVALUE

let spese = `
Cancelleria
500
40
60

Servizi igenici
1000
1
200

Vendite
0
`

let reparti = []
let reparto = []

function createMatrix(string) {
    let element = ''
    for (let i = 0; i<string.length; i++) {
        element = element + string.charAt(i)
        if (string.charAt(i)=='/n'){
            reparto.push(element)
            element = ''
        }
        if (string.charAt(i)=='/n' && string.charAt(i+1)=='/n'){
           reparti.push(reparto)
            element = ''
            reparto = [] 
        }
    }
}

console.log(createMatrix(spese));

// es 2 
// PSEUDOCODICE
// creo la funzione crazyString che prende in ingresso una stringa
// se la stringa contiene (includes) la parola 'Church' o la parola 'mare'
//      restituisci 'La stringa non è pazza'
//se la stringa contiene Cthulhu
//      restituisci la stringa è pazza
// creo l'array notCrazyTerms  Lui Egli Ella e Lei
// ciclo l'array e riassegno ad ogni iterazione uno dei termini a NOTCRAZYT 
// se la stringa NON contiene NOTCRAZYT
//      restituisci 'La stringa è pazza'
// con un ciclo simile --> se il primo carattere della stringa è uno tra ,.!?:;-~ 
//      restituisci 'La stringa è pazza'
// creo WORD 
// creo un for che itera sulla parola finchè l'elemento non è uguale ad uno spazio
//      ad ogni ciclo aggiungo le lettere a WORD 
// se le ultime due lettere di WORD sono 'r' ed 'e' e la terzultima è a oppure e oppure i
//      restituisci 'La stringa è pazza'
// se le l'ultima e la terzultima lettera della stringa sono '?' e la penultima è '!'
//      restituisci la stringa è pazza

let notCrazyTerms = ['lui','egli','ella','lei','Lui','Lei','Ella','Egli']
let crazyStart = ['.', ',','!','?',':',';','-','~']

function crazyString(string) {
    if (string.includes('Church') || string.includes('mare')){
       return 'La stringa non è pazza'
    }
    if (string.includes('Cthulhu')){
        return 'La stringa è pazza'
     }
    for (let i = 0; i < notCrazyTerms.length; i++) {
        let notCrazyT = notCrazyTerms[i]
        if (!string.includes(notCrazyT)){
            return 'La stringa è pazza'
        }
    }
    for (let i = 0; i < crazyStart.length; i++) {
        let crazyS = crazyStart[i]
        if (string.charAt(0)==crazyS){
            return 'La stringa è pazza'
        }
    }
    if ((string.charAt(string.length-3)=='?')&&(string.charAt(string.length-1)=='?')&&(string.charAt(string.length-2)=='!')){
        return 'La stringa è pazza'
    }
    let word = ''
    for (let i = 0; string.charAt(i) !== ' ' ; i++) {
        word = word + string.charAt(i)
        if ((word.charAt(word.length-2)=='r') && (word.charAt(word.length-1)=='e') && (word.charAt(word.length-3)=='a' || (word.charAt(word.length-3)=='e') || (word.charAt(word.length-3)=='i'))){
            return 'La stringa è pazza'
        } 
    }
    if ((string.charAt(string.length-2)=='r') && (string.charAt(string.length-1)=='e') && (string.charAt(string.length-3)=='a' || (string.charAt(string.length-3)=='e') || (string.charAt(string.length-3)=='i'))){
        return 'La stringa è pazza'
    }
    
}

console.log(crazyString('~ Papa’, come sta Church? ~'));