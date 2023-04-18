// creare una funzione cmpDate che prende in ingresso 2 stringhe che rappresentano 2 date formattate nel formato americano visto a lezione.
// La funzione estrapola l'anno da entrambe le date e restituisce 1 se il primo anno è maggiore del secondo, -1 viceversa e 0 se sono pari.
// Chiamare la funzione 3 volte con valori a piacere.

function cmpDate(str1,str2) {
    let date1=new Date(str1)
    let date2=new Date(str2)
    if (date1.getFullYear()>date2.getFullYear()) {
        return 1
    }
    else if (date1.getFullYear()<date2.getFullYear()) {return-1}
    
    return 0
    }
    console.log(cmpDate('1999-02-02','1999-02-02'));