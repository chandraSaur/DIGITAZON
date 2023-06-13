import { useEffect, useState } from "react"

// devo prima chiamare con una async la api generale delle categorie
// la seconda funzione async chiamerà i prodotti e attraverso la chiave categories dell'oggetto 
// filtrerà in base proprio alle categorie trovate precedentemente e che coincidono;

// costruisco la prima async che fungerà da componente "contenitore categorie" recupera le categorie, le mette nello stato 
// e nella funzione padre mappa 
// questo primo stato per creare 

// creo un componente che utilizza la prima async per recuperare le categorie, metterle in uno stato e dare un nome 
// in base alla categoria nell'html del componente (che cambia in base alla categoria vista(quindi in base alla res attale che solo alla fine verrà resettata)) La seconda async all'interno si occuperà di, ogniqualvolta che cambia lo stato inserito come dipendenza, recuperare le info dall'api che hanno come categoria la res attuale e li inserirà nell'html come 
//figli del div che ha come titolo la categoria stessa.
// il padre richiamerà i componenti all'interno di un unico div grande che sarà flexato in css. 

function ProductList() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function categoriesCall() {
            let res = await fetch('https://fakestoreapi.com/products/categories')
            let json = await res.json()
            setCategories(json)
        }
        categoriesCall()
    },[])
    console.log(categories);

}

export function MultipleAsync() {
    return (
        <ProductList/>
    )
}