import React from 'react'
import Products from '../components/ui/products'
const Main = () => {
  return (
    <div className='container-fluid'>
      <div className='row my-3'>
        <div className='col-10'>
          <h1>Online Store</h1>
        </div>
        <div className='col text-right'>
          <button className='btn btn-primary my-2'>Cart</button>
        </div>
        <Products />
      </div>
    </div>
  )
}

export default Main
