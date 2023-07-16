// Glossario metodi incontrati, comuni ed utili. 

// fill, filter, reduce, map , includes, indexOf, join, split, splice, slice, endsWith, 
// startsWith, Object.keys, parseInt, pop, push, shift, unshift, trim, toLowerCase, toUpperCase,
// charAt, sort,  alert, concat, test + spread operator

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
// scorre per tutto l'array e ad ogni iterazione genera un nuovo risultato in base all'operazione passata dalla funzione
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

//es 1 -> Turn an array of numbers into a total of all the numbers
function total(arr) {
    const res = arr.reduce((s,n) => s+n , 0)
    return res
} 
console.log(total([1,2,3]));

//es 2 -> Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
    const res = arr.reduce((s, n) => s + n.toString(), "")
    return res
}
console.log(stringConcat([1,2,3])); 

// es 3 -> Turn an array of voter objects into a count of how many people voted
function totalVotes(arr) {
    const res = arr.reduce((s, n) => n.voted ? s + 1 : s, 0)
    return res
}
 
 let voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age: 55, voted: true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];

 console.log(totalVotes(voters));

//es 4 -> Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

function shoppingSpree(arr) {
    const res = arr.reduce((s,n) => s + n.price, 0) 
    return res
 }
 
 let wishlist = [
     { title: "Tesla Model S", price: 90000 },
     { title: "4 carat diamond ring", price: 45000 },
     { title: "Fancy hacky Sack", price: 5 },
     { title: "Gold fidgit spinner", price: 2000 },
     { title: "A second Tesla Model S", price: 90000 }
 ];
 
 console.log(shoppingSpree(wishlist));

//es 5 -> Given an array of arrays, flatten them into a single array
function flatten(arr) {
    const res = arr.reduce((s,n) => s.concat(n))
    return res
 }
 
 let arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 
 console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

//es 6 -> Given an array of potential voters, return an object representing the results of the vote
let voterss = [
    {name:'Bob' , age: 30, voted: true}, //
    {name:'Jake' , age: 32, voted: true}, //
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true}, 
    {name: 'Mary', age: 31, voted: false}, //
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true}, //
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   let res = {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0
   }
   
   let reducedArr = arr.reduce((result, voter) => {
     if (voter.age >= 18 && voter.age <= 25){
       res.numYoungPeople++
          if (voter.voted==true) {
             res.numYoungVotes++
          }
     } else if (voter.age > 25 && voter.age <= 35){
         res.numMidsPeople++
            if (voter.voted==true) {
               res.numMidVotesPeople++
            }
      } else if (voter.age > 35 && voter.age <= 55){
         res.numOldsPeople++
            if (voter.voted==true) {
               res.numOldVotesPeople++
            }
      }
   })
   return res
}

console.log(voterResults(voterss)); 

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
// slice(0,-1) il -1 prende in considerazione l'ultimo, LEVA L'ULTIMO CARATTERE. 



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



//25. TEST()
// il metodo test: utilizzato per verificare se una stringa corrisponde al 
// pattern definito dall'espressione regolare. >> espressione.test(stringa da controllare)



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

