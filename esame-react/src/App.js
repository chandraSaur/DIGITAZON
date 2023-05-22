import './App.css';
import {useState, useEffect} from "react"


function Product({title, price, thumbnail, handleCart}) {
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

  const [list, setList] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    async function productsCall() {
        let res = await fetch('https://dummyjson.com/products')
        let json = await res.json()
        setList(json.products.splice(0, 10))
    }
    productsCall()
  },[])

  function handleCart(el, price) {
    const newCart = [...cart]
    newCart.push({element:el, prezzo: price})
    setCart(newCart)
  }

  function onProductClick(i){
    const newCart = [...cart] 
    newCart.splice(i, 1)
    setCart(newCart)
  }

  const arrayPrezzi = cart.map(obj => obj.prezzo);
  const totaleCarrello = arrayPrezzi.reduce((sum, key) => {
    return sum + key;
  },0)

  return (
    <div className="App">
      <div className="Page">
        <header>
          <img src="https://1000marche.net/wp-content/uploads/2020/03/Amazon-logo.png" alt="logo amazon" ></img>
          <input></input>
          <button>Search</button>
          <span>Mario Rossi</span>
        </header>
        <div className="products">
          {
            list.map(product => (
              <Product key={product.id} title={product.title} price={product.price} thumbnail={product.images[0]} handleCart={handleCart} />
            ))
          }
        </div>
      </div>
      <div className="Cart">
        <>
          <h1>Carrello</h1>
          <ul>
          {
            cart.map((carrello,i)=> 
              <li key={i} >
                <div>{carrello.element}{carrello.prezzo}</div>
                <div onClick={() => onProductClick(i)}>Rimuovi</div>
              </li>
            )
          }
          </ul>
          <span>Totale:{totaleCarrello}</span>
        </>
      </div>
    </div>
  );
}

export default App;
