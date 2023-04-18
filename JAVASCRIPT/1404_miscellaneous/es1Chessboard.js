// ex 1
// scrivere una funzione chiamata chessboard
// che prende in ingresso un numero l,
// la funzione deve stampare una scacchiera di lato l
// contenente '#' e ' ', opportunamente alternati

//1. creare la funzione chessboard che prende in ingresso il numero (l)
//3. creare un ciclo for che permette la stampa alternata in questo modo:
//4. se i è pari stampare '# #' else ' # '

function chessboard(l) {
        for (let i = 0; i < l; i++) {
            let toggle = false
            let evenRow = ''
            let oddRow = ''
            if ((i%2)==0) {
                for (let j = 0; j < l; j++) {
                     if (toggle){
                        evenRow += '-'
                     } else {
                        evenRow += '#'
                     } 
                     toggle = !toggle   
                }
            } else {
                for (let z = 0; z < l; z++) {
                    if (toggle){
                        oddRow += '#'
                    } else {
                        oddRow += '-'
                    } 
                    toggle = !toggle   
                    }
            }
        }    
}

chessboard(3)
