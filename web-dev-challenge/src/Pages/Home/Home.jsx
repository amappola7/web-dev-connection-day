import React, { useEffect, useState } from 'react'
import { getProductsList } from '../../API/requests'

function Home() {
  const [products, setProducts] = useState([])

  useEffect (() => {
    getProductsList(setProducts)
  }, [])

  console.log('LISTA DE PRODUCTOS:\n', products)
  return (
    <div>Home</div>
  )
}

export default Home