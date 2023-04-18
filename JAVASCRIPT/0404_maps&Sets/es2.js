// Ex 2
// creare una funzione compareSet che accetta in ingresso due set.
// La funzione restituisce true SE i due set sono set, SE hanno lo stesso numero di elementi e  gli stessi valori. 
// Testare il funzionamento di compareSet passando due set diversi nella prima chiamata, e due set uguali nella seconda chiamata

function compareSet (set1, set2){
    if (set1 instanceof Set == false || set2 instanceof Set == false){
        return false
    }
    if (set1.size != set2.size){
        return false
    } else {
        let r = true
        set1.forEach(function (v){
            if(!set2.has(v)){
                r = false
            }  
        })
    return r
    }
}

const s1 = new Set ([10, 20, 30, 40])
const s2 = new Set ([50, 60, 70, 80])
const s3 = new Set ([50, 60, 70, 80])

console.log(compareSet(s3,s2));

