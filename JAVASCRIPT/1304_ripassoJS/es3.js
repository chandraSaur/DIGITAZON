// cosa stampa?
let i

for (i = 0; i < 1; i++) {
    console.log(i)
}
console.log(i)

console.log('----------------------')

// nel for non è let i=0 perchè vuole MODIFICARE la i che prima era undefined (let i) dandogli 0. A quel punto stampa 
// 0 
// e poi 1 (perchè essendo modificata nel for, lo scope rimane fuori dal ciclo.)
