import React from 'react'
import ProductsProvider from './hooks/useProduct'
import Main from './layout/main'
import './App.css'
function App() {
  return (
    <div>
      <ProductsProvider>
        <Main />
      </ProductsProvider>
    </div>
  )
}

export default App
