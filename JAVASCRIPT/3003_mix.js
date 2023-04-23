//  Esercizio 1
// Date 3 stringhe con valori a piacere, stampare in output QUANTE delle tre stringhe realizzate iniziano con la lettera 'a' -->

    {
    let a = 'anguria'
    let b = 'mela'
    let c = 'pera'
    let somma = 0

    if (a.charAt(0) == 'a') {
        somma= somma + 1;
    } 
    if (a.charAt(1) == 'a') {
        somma= somma + 1;
    } 
    if (a.charAt(2) == 'a') {
        somma= somma + 1;
    } 

    console.log(somma)

// <!-- Se fosse un arrab potremmo usare il ciclo -->

    let stringhe = ['anguria','mela', 'pera', 'ananas']
    let plus = 0

    for (let i = 0; i < stringhe.length; i++) {
        
        if (stringhe[i].charAt(0)=='a') {
            plus = plus+1
        }
    }
    console.log(plus); 
    }
    
    // Ex 1.1: 
    // dato un array di 4 stringhe a piacere, stampare ogni valore stringa invertito (es 'ciao' diventa 'oaic', ...)

    // Ex 2:
    // dato un array di 10 numeri a piacere, stampare quanti sono i numeri positivi, quelli negativi, quelli dispari e quelli pari (per trovare il resto di una divisione utilizzare l'operatore %)

    // Ex 3:
    // dato un array di 3 stringhe a piacere, stampare quante di queste stringhe iniziano con il valore 'a' e terminano con il valore '_'

    // Ex 4:
    // data una stringa a piacere, 
    // SE questa contiene una vocale, un underscore, un dollaro e un numero, stampare 'password OK', altrimenti, stampare 'password NOT OK'

    // Ex 5:
    // dato un array di 5 valori ETEROGENEI a piacere, stabilire:
    // - quante stringhe ci sono
    // - quanti numeri ci sono
    // - quanti booleani ci sono
    // - qual è il tipo di dato maggiormente presente nell'array -->
    

        console.log('Esercizio1.1-------------------------------------------')

        {
        let es1 = ['arena', 'boss','cardinali', 'intercardinale']
        let words = ''

        for (let i = 0; i < es1.length; i++) {

            words = ''

            for (let j = es1[i].length-1; j>=0; j--) {
                words += es1[i][j]
            }

            console.log(words)

        }
        }

        console.log('Esercizio2-------------------------------------------')
        // Ex 2: dato un array di 10 numeri a piacere, stampare quanti sono i numeri positivi, quelli negativi, quelli dispari e quelli pari (per trovare il resto di una divisione utilizzare l'operatore %)

        {
            let es2 = [ 1, 2, -3, 15, 4, 7, 22, -22, 3, 6]
            let countPositive = 0
            let countNegative = 0 
            let countEven = 0 
            let countOdd = 0

            for (let j=0; j < es2.length; j++) {
                
                if ((es2[j] % 2) == 0) {
                    countEven++
                } else {
                    countOdd++
                }
            }

            for (let i = 0; i < es2.length; i++) {
                if (es2[i] > 0) {
                    countPositive++
                } else {
                    countNegative++
                }
            }

            console.log(countEven)
            console.log(countOdd)
            console.log(countPositive)
            console.log(countNegative)
        }
        
        console.log('Esercizio3-------------------------------------------')
        // Ex 3:
        // dato un array di 3 stringhe a piacere, stampare quante di queste stringhe iniziano con il valore 'a' e terminano con il valore '_'

        {
            let es3 = ['anguria_', 'mela_','ananas']
            let counter = 0

            for (let i=0; i < es3.length; i++) {

                if (es3[i].charAt(0)=='a' && es3[i].charAt(es3[i].length-1)=='_') {
                    counter++
                }

            }

            console.log(counter)

        }

        console.log('Esercizio4-------------------------------------------');
        // Ex 4:
        // data una stringa a piacere, 
        // SE questa contiene una vocale, un underscore, un dollaro e un numero, stampare 'password OK', altrimenti, stampare 'password NOT OK'

        {
            let es4 = '_armadillo&'
            let pswok= 'Password OK'
            let pswnot= 'Password NOT OK'

            let vowels= false
            let numbers = false
            let underscore = false
            let dollar = false 
           
            for (let i=0; i < es4.length; i++) {

                if (es4[i]=='a'||es4[i]=='e'||es4[i]=='i'||es4[i]=='o'||es4[i]=='u') {
                    vowels = true
                    }else if (es4[i] == '_') {
                        underscore =true
                    }else if (es4[i]=='$') {
                        dollar = true
                    }else if (es4[i] >=0) {
                        numbers=true
                    } 
            }

            if (vowels && numbers && underscore && dollar){
                console.log(pswok)
            } else {
                console.log(pswnot); 
            }
        }
        
