// Creare un array che è composto da 3 oggetti, che rappresentano dei rettangoli, e avranno le proprietà base e altezza (numeri).
// Crea quindi 3 oggetti che rappresentano 3 rettangoli con le caratteristiche indicate, mettili in un array.
// Cicla questo array SIA con un foreach PRIMA che con un for DOPO, per stampare l'area di ogni rettangolo (ad ogni iterazione)

const rectangles = [
    {
        id : 1,         //i 0           }
        base : 2,       // i 1          }  rectangle (i=0 per il forEach)
        altezza : 3     //              }
    },
    {
        id : 2,                      // } 
        base : 4,                    // } rectangle (i=1 per il forEach)
        altezza : 5                  // }
    },
    {
        id : 3,  
        base : 6,
        altezza : 7
    }
]

console.log('forEach: ');
rectangles.forEach(function(rectangle){
    const area = rectangle.base * rectangle.altezza
    console.log(`L'area del rettangolo di id ${rectangle.id} è: ${area}`);
})

console.log('for: ');
for (let i = 0; i < rectangles.length; i++) {
    const area2 = rectangles[i].base * rectangles[i].altezza
    console.log(`L'area del rettangolo di id ${rectangles[i].id} è: ${area2}`);
}
