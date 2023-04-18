// creare una funzione formatDate che, presi in ingresso un numero, una stringa e un numero, stampi una data formattata.
// Il primo numero rappresenta l'anno, la stringa il nome del mese e il secondo numero il giorno.
// es: formatDate(2023, 'maggio', 17)   stampa "17-05-2023"

function formatDate(yyyy,mm,dd) {
  const obj = new Map ([
    ['gennaio',1],
    ['febbraio',2],
    ['marzo',3],
    ['aprile',4],
    ['maggio',5],
    ['giugno',6],
    ['luglio',7],
    ['agosto',8],
    ['settembre',9],
    ['ottobre',10],
    ['novembre',11],
    ['dicembre',12]
  ])
  let month = obj.get(mm)   //vuole un numero quindi creando questa recupero il numero che corrisponde alla chiave maggio e do quello stesso numero alla new Date. può così recuperare il numero associato alla stringa in ingresso con get. 
  
  let mStr = ''     //per non lasciare i numeri nella mappa come 01,02 ecc dato che alcuni browser potrebbero riconoscerli come numeri particolari e dare problemi.
  if(month<10){
    mStr='0'+(month)
  } else {
    mStr+=(month)+''
  }

  x = new Date (yyyy,month-1,dd)
  console.log(x.getDate()+'-'+mStr+'-'+x.getFullYear());
}

formatDate(2023,'maggio',17)
formatDate(1997,'dicembre',24)

