import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home/Home'
import ProductDetails from './Pages/ProductDetails/ProductDetails'

function App() {

  return (
    <div className="App">
      {/* <Home></Home> */}
      <ProductDetails></ProductDetails>
    </div>
  )
}

export default App
