import './App.css';
import {useState, useEffect} from "react"

function Product({title, price, thumbnail, handleCart}) {  //componente schede prodotti, prende con le prop le info dalla fetch
  return(
    <div className='card'>
      <h3>{title}</h3>
      <div className='img-container' style={{backgroundImage: `url(${thumbnail})`}}>
      </div>
      <div className='card-footer'>
        <span>{price}€</span>
        <button onClick={() => handleCart(title, price)}>Aggiungi al carrello</button>
      </div>
    </div>
  )
}

function App() {

  const [list, setList] = useState([])   //serve per raccogliere i prodotti presi con la fetch
  const [cart, setCart] = useState([])   //serve per raccogliere gli elementi nel carrello

  useEffect(() => {  //effettuo chiamata asincrona per raccogliere i prodotti, ne prendo 30
    async function productsCall() {
        let res = await fetch('https://dummyjson.com/products')
        let json = await res.json()
        setList(json.products.splice(0, 30)) // essendo un oggetto nel quale c'è l'array di cui ho bisogno devo entrare in esso che è chiamato products così da poter fare lo splice
    }
    productsCall()
  },[])

  function handleCart(el, price) { //aggiunge il nome dell'oggetto e il prezzo nella lista del carrello
    const newCart = [...cart]
    newCart.push({element:el, prezzo: price})
    setCart(newCart)
  }

  function onProductClick(i){   //creo questa funzione per eliminare l'oggetto schiacciando su "Rimuovi" dal carrello. la passo al div con rimuovi prodotto ogni volta che un elemento viene inserito nel carrello
    const newCart = [...cart]   // creo la copia del carrello per poterla modificare
    newCart.splice(i, 1)
    setCart(newCart)
  }

  const arrayPrezzi = cart.map(obj => obj.prezzo);          // prendo soltanto i valori della chiave prezzo 
  const totaleCarrello = arrayPrezzi.reduce((sum, key) => {  //uso la reduce per sommare i vari prezzi man mano che appaiono nel carrello e ovviamente vedere il prezzo scendere quando rimossi
    return sum + key;
  },0)

  return (
    <div className="App">
        <header>
          <img src="https://1000marche.net/wp-content/uploads/2020/03/Amazon-logo.png" alt="logo amazon" ></img>
          <div>
            <input></input>
            <button>Search</button>
          </div>
          <div className='User'>Mario Rossi</div>
        </header>
      <div className="Page">
        <div className='products'>
          <div className="product">
            {
              list.map(product => (  //mappo per riuscire a creare tanti componenti product costruiti in precedenza con la prop il cui valore cambia in base al prodotto considerato.
                <Product key={product.id} title={product.title} price={product.price} thumbnail={product.images[0]} handleCart={handleCart} />
              ))
            }
          </div>
        </div>
        <div className="Cart">
          <h2>Carrello</h2>
          <ul>
          {
            cart.map((carrello,i)=>  //mappo il carrello per riuscire a far apparire il nome ed il prezzo corrispondente dell'oggetto. 
              <li key={i} >
                <div className='Name-price'>
                  <span>{carrello.element}</span>
                  <span>{carrello.prezzo}</span>
                </div>
                <div onClick={() => onProductClick(i)}> 
                  <div id="rimuovi">Rimuovi</div>
                </div>              
              </li>
            )
          }
          </ul>
          <div className='Name-price'>
            <span>Totale:</span>
            <span>{totaleCarrello}€</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// implementare la funzionalità della barra di ricerca.
// collego l'input al bottone in maniera tale da 