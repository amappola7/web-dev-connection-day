import React, { useEffect, useState } from 'react'
import { getProductsList } from '../../API/requests'
import Header from '../Header/Header'

function Home() {
  const [products, setProducts] = useState([])
  const [result, setResult] = useState('Hola Mundo')

  useEffect (() => {
    getProductsList(setProducts)
  }, [])

  useEffect (() => {
    setResult(
      products.map((product) => {
        return(
        <section
          key={product.id}
        >
          <img src={product.images ? product.images[0] : ''} alt={product.title}/>
          <p>{product.title}</p>
          <p>{`$${product.price}`}</p>
        </section>)
      })
    )
  }, [products])

  console.log('LISTA DE PRODUCTOS:\n', products)
  return (
    <div>
      <Header>
      </Header>
      <section>
        {
          result
        }
      </section>
      <footer>
        <p>Hecho por Squad 2</p>
      </footer>
    </div>
  )
}

export default Home