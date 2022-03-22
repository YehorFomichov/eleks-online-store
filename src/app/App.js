import React from 'react'
import ProductsProvider from './hooks/useProduct'
import Main from './layout/main'
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
