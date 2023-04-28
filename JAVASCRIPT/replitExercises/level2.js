// scrivere una funzione chiamata findLongestSubstring
// che prende in ingresso una stringa
// la funzione deve ritornare la stringa piu' lunga che non ha 
// ripetizioni

function findLongestSubstring(s){
    let parola=''
    let res=''
    for (let i = 0; i < s.length; i++) {
        const lettera = s[i];
        if(parola.includes(lettera)){
            if(parola.length>res.length){
                res=parola
            }
            parola=''
        }else{
            parola+=lettera
        }
    }
    if(parola.length>res.length){
        res=parola
    }
    return res
}

console.log(findLongestSubstring('pwwkew'));

// da rifare, quasi corretto ma non del tutto.