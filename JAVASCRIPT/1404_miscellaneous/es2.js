// Ex 2
// dato l'array chiamato 'a1' con valori [10, 'ciao', true, 20, 'js', 4] usare un foreach per calcolare la somma degli elementi numerici e stamparla in output

let a1 = [10, 'ciao', true, 20, 'js', 4]
let sum = 0

a1.forEach(function (x) { 
    if (typeof x ==  'number'){
        sum += x
    }
});

console.log(sum);

// Ex 2.1
// creare una mappa chiamata m1, che rappresenta un'automobile, con la seguente struttura: 
// model -> 'Panda', maxSpeed: 250, price: 1000
// creare una mappa chiamata m2, che rappresenta un'automobile, con la seguente struttura: 
// model -> 'Audi', maxSpeed: 200, price: 5000
// tramite due foreach, stampare le singole caratteristiche delle due automobile.
// DOPO, stampare in output il modello della macchina con la velocità massima più elevata

let m1 = new Map ([
    ['model', 'Panda'],
    ['maxSpeed', '250'],
    ['price','1000']
])
let m2 = new Map ([
    ['model', 'Audi'],
    ['maxSpeed', '200'],
    ['price','5000']
])

m1.forEach(function (v,k) {
    console.log(`${k}: ${v}`);
})

m2.forEach(function (v,k) {
    console.log(`${k}: ${v}`);
})

function bigger(map1,map2) {
    if (m1.get('maxSpeed') < m2.get('maxSpeed')){
        return 'L auto con la velocità massima più elevata è: '+ m2.get('model')
    } else {
        return 'L auto con la velocità massima più elevata è: '+ m1.get('model')
    }
}

console.log(bigger(m1,m2))