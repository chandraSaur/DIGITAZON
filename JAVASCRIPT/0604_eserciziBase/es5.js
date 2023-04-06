// Ex 5
// creare un array di oggetti, che rappresentano il contenuto di un parola, e avranno proprietà text. 
// Es { text: 'ciao' }, { text: 'javascript' }
// Nell'array inserire 5 oggetti con questo template e valori a piacere.
// Creare una funzione parseStrings che prende in ingresso un array di oggetti con la struttura descritta e restituisca quante stringhe contengono la lettera 'x'.

const words = [
    { text: "ciao" },
    { text: "javascript" },
    { text: "html" },
    { text: "css" },
    { text: "xml" },
  ];
  
  function parseStrings(array) {
    let wordsWithX = 0;
    for (let i = 0; i < array.length; i++) {
      const word = array[i].text;
      let charX = false;  //va qui perchè si resetta ad ogni ciclo!
      for (let j = 0; j < word.length; j++) {
        const char = word[j];
        if (char == "x") {
          charX = true;
        }
      }
  
      if (charX == true) {
        wordsWithX++
      }
    }
  
    return wordsWithX
  }
  
  console.log(parseStrings(words));