// fetch è la funzione nativa per le chiamate asincrone.
// Le chiamate asincrone permettono ai componenti di interagire con entità esterne e lo fa attraverso la funzione fetch. 
// Queste info possono essere chieste a chiunque abbia le infromazioni desiderate.
//
// Scriviamo un componente in grado di effettuare il fetch
import {useState, useEffect} from "react"

export function Fetch() {
    const [products, setProducts] = useState ([])   //parte 1 che si occupa dello stato
    useEffect(() => {                               //parte 2 che recupera le info
        async function fetchProducts() {
            let res = await fetch("https://fakestoreapi.com/products")
            let json = await res.json()
            setProducts(json)
        }
        fetchProducts()                             //ritorna la PROMESSA
    },[])                                           //cos'è QUESTO? --> righe sotto di spiegazione
    
    return (                                        //parte 3 che mostra all'utente
        <>
            <h1>Fetch</h1>
            {products.map((el) => 
                                                     // si mette key perchè così ogni elemento ha il suo key univoco, non c'è più l'errore.
                (
                    <div key="el.id">  
                        <h2>{el.title}</h2>
                        <img src={el.image}/>
                    </div>
                )
            )}
        </>
    )
}
// lo importiamo in app.js. 
// Ora definiamo una funzione all'interno di fetch (fetch products) che si occuperà di fare una chiamata all'endpoint.
// Chiamare un endpoint remoto è una operazione asincrona: ciò significa che dalla nostra pagina attuale dove scriviamo html ecc. comunichiamo con un server remoto. Questo server tuttavia potrebbe non esistere, l'indirizzo potrebbe essere irraggiungibile e altre cose. La chiamata è asincrona perchè inizia ma non si sa quando finisce per vari motivi. In JS quando una funzione è asincrona si inserisce prima della dichiarazione di funzione "async": dentro di essa succederà qualcosa che potrebbe terminare in qualsiasi momento oppure mai. 
// invochiamo la funzione fetch dentro fetchProducts e utilizziamo l'endpoint https://fakestoreapi.com/products 
// stiamo chiedendo a fetch di andare a recuperare ciò che è presente nell'endpoint products al server che corrisponde a quell'indirizzo. 
// Tale risorsa restituisce un json, in questo caso un array. 
// Per poter gestire tale funzione async ci dobbiamo mettere in un contesto async. 
// inseriamo fetch in una variabile e logghiamo res: non funziona perchè nel momento in cui si esegue let res, viene eseguita ma non termina --> la natura di queste funzioni è diversa, essendo asincrone, e ci mette un po' per fare il suo lavoro. La console di res è quindi undefined perchè non abbiamo atteso che la fetch finisse. 
// dobbiamo dire a fetch di aspettare finchè non termina. Per questo scriviamo AWAIT prima dell'invocazione della funzione fetch
// trasformiamo res in un json con res.json che è un metodo ASINCRONO, con await per dirgli di aspettare. 
// a questo punto logghiamo json: vi sono i prodotti che vengono così letti. 
// Per mostrare quindi questi prodotti a video, dobbiamo seguire certi passaggi
// 1 importiamo use state
// 2 impostiamo useState di product.
// 3 impostiamo lo stato del componente fetch al json con setProducts(json)
// 4 chiamiamo in fetchProducts lo stato products
// siccome non si può fare riferimento in react ad un risultato async ottenuto tramite un'operazione async quindi dobbiamo introdurre USE EFFECT (secondo Hook)
// useEffect() serve, tra le altre cose, per interagire con le chiamate async permettendoci di utilizzare lo stato di useState in un ambiente asincrono. 
// accetta in ingresso un'altra funzione: questa sarà anonima e arrow function
// questo useEffect serve appunto per passare nel mondo di html le richieste asincrone. 
// RICORDARE CHE: circondiamo la funzione asincrona con async e usare await per attendere la fine della chiamata di tale funzione



// La PROMESSA è un oggetto

// da ora in poi gli esercizi andranno dentro components. 


// E' il secondo argomento. Il primo è la funzione anonima, questo secondo è "l'array delle dipendenze" --> Hooks.js
