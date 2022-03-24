import React from 'react'
import ProductsProvider from './hooks/useProduct'
import Main from './layout/main'
import './App.css'
import CartProvider from './hooks/useCart'
function App() {
  return (
    <div>
      <ProductsProvider>
        <CartProvider>
          <Main />
        </CartProvider>
      </ProductsProvider>
    </div>
  )
}

export default App
