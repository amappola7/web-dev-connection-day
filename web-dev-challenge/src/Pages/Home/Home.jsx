import React, { useEffect } from 'react'
import { getProductsList } from '../../API/requests'

function Home() {
  useEffect (() => {
    getProductsList()
  }, [])
  return (
    <div>Home</div>
  )
}

export default Home