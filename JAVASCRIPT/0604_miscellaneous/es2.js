// Ex 2
// Creare una funzione parseShape che prende in ingresso un oggetto che abbia questo template:
// { x: number, y: number, name: string }
// e produca un ouput relativo ad area e perimetro, in base al valore della proprietà name che stabilisce il tipo di figura geometrica in uso.
// Richiamare la funzione due volte con:

// const quadrato = {x: 5, x:4, shape: 'square'}
// const rettangolo = {x: 5, x:4, shape: 'rectangle'}
// per stampare area e perimetro di quadrato e rettangolo.

const quadrato = { x: 4, y: 4, name: "square" };
const rettangolo = { x: 5, y: 4, name: "rectangle" };
const triangolo = { x: 5, y: 4, name: "triangle" };
// per stampare area e perimetro di quadrato e rettangolo.

function parseShape(obj) {
  if (obj.name == "square") {
    console.log("L'area del quadrato e: " + obj.x * obj.x);
    console.log("Il perimetro del quadrato e: " + obj.y * 4);
  } else if (obj.name == "rectangle") {
    console.log("L'area del rettangolo e: " + obj.x * obj.y);
    console.log("Il perimetro del rettangolo e: " + obj.x * 2 + obj.y * 2);
  } else console.log("Non e' ne un rettangolo ne un quadrato");
}

parseShape(quadrato)
parseShape(rettangolo)
parseShape(triangolo)