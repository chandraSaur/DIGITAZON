//1.4
// scrivere una funzione chiamata countUndefinedKeys che 
// dato un oggetto come parametro
// ritorni un intero che rappresenti il numero di chiavi, presenti
// nell'oggetto, che hanno valore undefined o null

//creo una funzione che prende in ingresso un oggetto chiamato object
//creo il contatore countFalsey e lo inizializzo da 0
//utilizzo il metodo object.keys() che prende in ingresso l'oggetto e mi restituisce le chiavi in un array
// ciclo l'array con for each che prende la funzione di parametro k. 
// k mi permette di raggiungere le chiavi e quindi i valori loro assegnati perchè non ho più un oggetto ma sono nelle array. Come in esse, infatti, il modo di chiamare un valore tramite indice i è il seguente: array[i]. In questo caso è falsey[k]. Il forEach itera ogni elemento e quindi se il valore corrispondente alla k (trovato con falsey[k]) è come se fosse il valore associato ad una determinata i nel caso di un for e array[i]

function countUndefinedKeys(falsey) {
    let countFalsey=0
    Object.keys(falsey).forEach(function (k) {
      if (falsey[k] == 'null' || falsey[k] == 'undefined') {
        countFalsey++   
      }
    });
    return countFalsey
  }

  const falseyValues = {1:'null', 2:'false',3:'empty string', 4:'undefined', 5:'0', 6:'NaN'}
  console.log(countUndefinedKeys(falseyValues));

  
  //spiegazione differenze chiamata
  object[key]   // > in questo caso quando object è un array (come trasformato con Object.keys())
  object.key    // > normale chiamata del valore corrispondente alla chiave in un oggetto. 
  
  // esempio di funzione con operatore ternario
  function count2(o) {
    return Object.keys(o).reduce((sum, key) => key == null ? sum + 1 : sum, 0)
  }
  
  //traduzione della costruzione con operatore ternario (più lunga ma equivalente)
  function count2(o) {
    return Object.keys(o).reduce((sum, key) => {
      if (key == null) {
        return sum + 1
      } else {
        return sum
      }
    }, 0)
  }

// altro esempio per comprendere il concetto. 
  let keys = Object.keys(obj)
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    console.log(obj.key)
  }
  
  