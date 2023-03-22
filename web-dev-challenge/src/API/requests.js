export async function getProductsList() {
  try {
    const urlAPI = 'https://dummyjson.com/products'
    const response = await fetch(urlAPI)
    const data = await response.json()
    console.log(data)
    return data
  }
  catch(error) {
    console.log(error)
  }
}

export async function getIndividualProduct(getIndividualProduct) {
  try {
    const urlAPI = `https://dummyjson.com/products/search?q=${getIndividualProduct}`
    const response = await fetch(urlAPI)
    const data = await response.json()
    console.log(data)
    return data
  }
  catch(error) {
    console.log(error)
  }
}

