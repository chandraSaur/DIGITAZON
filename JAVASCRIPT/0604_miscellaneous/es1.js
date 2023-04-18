// Ex 1
// Dato il seguente JSON:
// [
//     {
//         "fullname": "Yoshi", "rate": [4, 5, 4, 6]
//     },
//     {
//         "fullname": "Wario", "rate": [4, 9, 6, 7]
//     },
//     {
//         "fullname": "Toad", "rate": [8, 9, 9, 8]
//     }
// ]
// salvarlo in un template string, parsarlo con l'apposita strategia e stabilire algoritmicamente chi è lo studente migliore e chi è il peggiore.

let json = `
[
    {
        "fullname": "Yoshi", "rate": [4, 5, 4, 6]
    },
    {
        "fullname": "Wario", "rate": [4, 9, 6, 7]
    },
    {
        "fullname": "Toad", "rate": [8, 9, 9, 8]
    }
]
`;


function avg(rates) {
    let sum = 0;
    for (let i = 0; i < rates.length; i++) {
        sum += rates[i];
    }
    let avg = sum / rates.length
    return avg;
}

const obj = JSON.parse(json);
let map = new Map()

for (let i = 0; i < obj.length; i++) {
    map.set(obj[i].fullname, avg(obj[i].rate));
    console.log(map.get(obj[i].fullname));
}

let betterValue = map.get(obj[0].fullname);
let betterName = obj[0].fullname;

map.forEach(function (value, key) {
    if (value > betterValue) {
        betterValue = value;
        betterName = key;
    }
})

console.log(`Lo studente migliore è ${betterName} con media ${betterValue}`);
