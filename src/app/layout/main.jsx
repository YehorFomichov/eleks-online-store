import React from 'react'
import Products from '../components/ui/products'
import './main.css'
const Main = () => {
  return (
    <div className='container-fluid'>
      <div className='row my-3'>
        <div className='col-10 logo'>
          <h1 className='p-2'>
            <b>Online Store</b>
          </h1>
        </div>
        <div className='col text-right p-2'>
          <button className='btn btn-primary btn-lg my-2 header-btn'>
            <i class='bi bi-cart'></i> Cart
          </button>
        </div>
        <Products />
      </div>
    </div>
  )
}

export default Main
