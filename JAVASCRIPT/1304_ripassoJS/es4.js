// gotta love Functional Programming
// su questo sono uscito un po' dal tracciato per dare possibilita' anche a quelli che gia' 
// programmavano, o che vogliono una sfida leggermente piu' avanzata, per cimentarsi
function T() { 
    return true 
}
function F() { 
    return false 
}

function and(sx, dx) {
  return function() { 
        return sx() && dx() 
    }
}
function or(sx, dx) {
  return function() { 
        return sx() || dx() 
    }
}
console.log(and(or(F, T), T)())


// return true perchè in and sx= true (siccome in or è F o T quindi vince T) mentre dx() è true perchè la funzione senza parametro non è un falsey value.