// creare una funzione getDateDay che prende in ingresso una data formattata nel formato americano visto a lezione e restituisce il giorno della settimana relativo, in parola.
// Chiamare la funzione con 3 date a piacere.
// es: getDateDay('2023-05-17')  -> 'mercoledì'

function getDateDay(inputDate) {
    const day = new Map([
        [0, 'domenica'],
        [1, 'lunedi'],
        [2, 'martedi'],
        [3, 'mercoledi'],
        [4, 'giovedi'],
        [5, 'venerdi'],
        [6, 'sabato']
    ]);

    const date = new Date(inputDate);
    const result = day.get(date.getDay());
    return result;
}

console.log(getDateDay('2023-05-15'));
console.log(getDateDay('2023-05-20'));
console.log(getDateDay('2023-05-21'));