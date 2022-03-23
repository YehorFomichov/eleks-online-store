import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import productsService from '../services/products.service'
import { toast } from 'react-toastify'

const ProductsContext = React.createContext()

export const useProducts = () => {
  return useContext(ProductsContext)
}
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState({})
  const [brands, setBrands] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    getProducts()
  }, [])
  useEffect(() => {
    if (error !== null) {
      toast(error)
      setError(null)
    }
  }, [error])
  async function getProducts() {
    try {
      const content = await productsService.get()
      setProducts(content)
      const brContent = await productsService.getBrands()
      setBrands(brContent)
      const catContent = await productsService.getCategories()
      setCategories(catContent)
      setLoading(false)
    } catch (error) {
      console.log(error)
      errorCatcher(error)
    }
  }
  function errorCatcher(error) {
    const { message } = error.response.data
    setError(message)
    setLoading(false)
  }
  return (
    <ProductsContext.Provider value={{ products, categories, brands }}>
      {!isLoading ? children : 'Loading...'}
    </ProductsContext.Provider>
  )
}
ProductsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
export default ProductsProvider
