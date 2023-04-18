// scrivere una funzione che prende in ingresso una stringa e ritorna il numero di occorrenze  ogni singolo carattere della stringa. 

const alphabet = new Map ()

function fn(arr) { 

    for (let i=0; i < arr.length; i++){

        if (alphabet.has(arr[i])){
            alphabet.set(arr[i], alphabet.get(arr[i])+1)
        } else {
            alphabet.set(arr[i], 1)
        }
    }
    return alphabet
}

console.log(fn('abaco'))

// scrivere una funzione che data in ingresso una stringa rimuove tutti i caratteri duplicati

let word = 'carro'

function duplicate(s) {
    let result= new Set ()
    for (let i = 0; i < word.length; i++) {
       result.add(word[i])         
    }
    return result
}

console.log(duplicate(word));

// Restituisci la stringa invertita. Si può fare anche senza funzione e con il for con charAt e length.

  let n='Riccardo'

  function invertString(word){
    let string = ''
    for (let i = word.length-1; i >= 0; i--) {
      string += word[i]
    }
    return string
  }

  console.log(invertString(n))

//  Ex 2
// data la stringa 'Riccardo'
// realizzare l'apposita strategia per stampare in output l'ultimo carattere maiuscolo concatenato a un underscore e al primo carattere minuscolo:
// O_r 

let firstLast = n.charAt((n.length)-1).toUpperCase() + '_' + n.charAt(0).toLowerCase()

console.log(firstLast)

// Ex 3
// creare l'apposita strategia per rappresentare, tramite oggetto, uno studente. Lo studente avrà:
// idMatricola: 14
// nomeCompleto: Luigi Verdi
// voti: 6, 7, 7

// Stampare in output la stringa tramite apposito algoritmo:
// il terzo voto dello studente con id 14 (Luigi Verdi) è 7

const obj={
  idMatricola : '14',
  nomeCompleto : 'Luigi Verdi',
  voti : [6,7,7]
}

console.log(`il terzo voto dello studente con id ${obj.idMatricola} (${obj.nomeCompleto}) è ${obj.voti[2]}`)