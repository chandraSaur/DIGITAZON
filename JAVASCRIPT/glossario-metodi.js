// Glossario metodi incontrati, comuni ed utili. 

// fill, filter, reduce, map , includes, indexOf, join, split, splice, slice, endsWith, 
// startsWith, Object.keys, parseInt, pop, push, shift, unshift, trim, toLowerCase, toUpperCase,
// charAt, sort,  alert, concat  + spread operator

// 1. FILL()
// metodo degli array che permette di cambiare il contenuto dell'array con un valore statico 
// da un indice di inizio (default 0) ad uno di fine (default array.length). 
//Ritorna l'array modificato. 

{
    const array = [1,2,3,4]
    console.log(array.fill(9,1))  //ritorna [1,9,9,9]. Senza l'1 avrebbe cambiato tutti i valori in 9. 
}

// es. da esercizio su React (DynamicInputs). Array(n) crea un array di n elementi che col metodo fill 
// sarà riempito con ''.
{
    function DynamicInputs({ n = 5 }) {
        const tmpState = Array(n).fill('')
    }
}



//2. ARRAY.FILTER()
// Crea una copia dell'array dato attraverso la visita di tutti i suoi elementi e l'applicazione del predicato dato. Ciò permette di chiamare ogni 
// elemento dell'array con un nome (nel primo esempio n) e di prendere con la filter soltanto quegli n che soddisfano la condizione data inserendoli così
// nella copia. 
 
{
[1,2,3,4].filter(n => n % 2 == 0) // filtra tutti gli elementi pari producendo [2,4]


// esempio di filter che accetta un predicato più complesso (ritorna soltanto quegli s che, grazie alla funzione isUpperCase passata, hanno il primo 
// carattere maiuscolo).
// res sarà un nuovo array che presenterà soltanto gli elementi (s) che iniziano con la lettera maiuscola. res=[Alberto, Luca]

function isUpperCase(str) {
    return str === str.toUpperCase()
}

let els = [Alberto, gatto, Luca, cane]
let res = els.filter(s => isUpperCase(s[0]))
}



//3. ARRAY.REDUCE()
// scorre per tutto l'array e ad ogni iterazione genera un nuovo risultato in base all'operazione passata dalla funzione passata
// E' talmente potente che è possibile utilizzare lei al posto della map e della filter ottenendo lo stesso risultato. 

[1,2,3,4].reduce((s , n) => s + n, 0) //risultato: 10
// parte da zero e guarda ad ogni elemento dell'array sommando (perchè la funzione passata è in questo caso la somma s+n). Risultato= 6

// es di passaggio alla reduce di una funzione più complessa in grado di generare tanti <li> contenenti il titolo di prodotti ottenuti da un'api. 
{
    async function productsAsList() {
        const res = await fetch('https://fakestoreapi.com/products')
        const products = await res.json()
    
        return products.reduce((all, product) => `
            ${all}
            <li>
              ${product.title}
            </li>
        `, '<ol>') + '</ol>'
    }
    
    (async function() {
      let lis = await productsAsList()
      document.getElementById('target').innerHTML = lis
    })()

}

//Da array ad oggetto con reduce
{
    let obj = arr.reduce((res, n, i) => {
        res[i] = n
        return res
    }, {})
}



//4. ARRAY.MAP()
// Costruisce un nuovo array che trasforma l'i-esimo elemento in base alla funzione passata. 
//



//5. includes
//
//



//6. indexOf
//
//



//7. join
//
//



//8. split
//
//



//9. splice
//
//



//10. slice
//
//



//11. STARTSWITH()
//
//



//12. ENDSWITH()
//
//



//13. OBJECT.KEYS
//
//



//14. PARSEINT
//
//



//15. POP
//
//



//16. PUSH
//
//



//17.  SHIF
//
//



//18. UNSHIFT
//
//



//19. TRIM
//
//



//20. toLowerCase & toUpperCase
// 
//
//



//21. charAt() 
//
//



//22. SORT
//
//



//23. ALERT()
//
//



//24. CONCAT
//
//



// SPREAD
// in fase di invocazione permette di prendere qualsiasi parametro in ingresso ed inserirlo in un array unico 
// chiamato come vogliamo (...nomeArray) possono esserci anche parametri e poi uno spread operator: in questo caso
// si tratteranno i primi due passati normalmente e gli altri dal 3 in poi saranno inseriti 
// in un array unico (senza ovviamente i primi due) es. function (primo, secondo, ...altri). ...altri sarà un array 
// intero e sempre una copia! (ecco perchè si utilizza in react per creare una copia dello stato che non può essere modificato)

let arr = [1,2,3]
let arr2 = [...arr]
arr[0]= 42

// anche modificando il primo elemento del primo array (da 1 a 42), il secondo non subirà modifiche poichè è 
// effettivamente una copia del primo!