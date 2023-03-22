import React, { useEffect } from 'react'
import { getIndividualProduct } from '../../API/requests'

function ProductDetails() {
  useEffect(() => {
    getIndividualProduct('iphone 9')
  }, [])
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails