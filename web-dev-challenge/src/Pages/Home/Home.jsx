import React, { useEffect, useState } from 'react'
import { getProductsList } from '../../API/requests'
import './Home.css'

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
          className='caja-producto'
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
        <header>
            <h1>squash II</h1>
        </header>
      <section className='contenedor-productos'>
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