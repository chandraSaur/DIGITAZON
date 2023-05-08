// Ex 1
// creare una funzione compareMap che accetta in ingresso due mappe.
// La funzione restituisce true SE le due mappe sono mappe, SE hanno lo stesso numero di elementi e per le stesse chiavi gli stessi valori. Testare il funzionamento di compareMap passando due mappe diverse nella prima chiamata, e due mappe uguali nella seconda chiamata*/
    
    function compareMap(map1, map2){
        if(!(map1 instanceof Map) || map2 instanceof Map == false){
            return false
        } 

        if( map1.size != map2.size) {
            return false
        }

        let same = true
        m1.forEach(function(v, k) {

            // controlla che m2 abbia la chiave corrente di m1, se non ce l'ha, restituisci false
            if( !m2.has(k) ) {
                same = false
            }
            // qua entro se m1 e m2 hanno entrambe la chiave corrente
            else {
                // controlla che il valore della chiave corrente di m1 sia uguale a quello della stessa chiave di m2
                if( m1.get(k) != m2.get(k) ) {
                    same = false
                }
            }

        })

        return same
    }
    
    const m1 = new Map ()
    m1.set('name', 'Giulio')
    m1.set('lastname', 'Rossi')
    
    const m2 = new Map ([
        ['name', 'Giulio'],
        ['lastname', 'Rossi']
    ])

    const r = compareMap(m1, m2)
    console.log(r);
    