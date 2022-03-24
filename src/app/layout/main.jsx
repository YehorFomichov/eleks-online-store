import React, { useState } from 'react'
import Products from '../components/ui/products'
import './main.css'
const Main = () => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <div className='container-fluid'>
        <div className='row my-3'>
          <div className='d-flex justify-content-between'>
            <div className='logo p-2'>
              <h1 className='p-2'>
                <b>Online Store</b>
              </h1>
            </div>
            <div className='p-2'>
              <button
                className='btn btn-primary btn-lg m-2 p-2 header-btn'
                style={{ color: 'white', fontSize: '0.875rem' }}
                onClick={() => setModalOpen((prevState) => !prevState)}
              >
                <i className='bi bi-cart' style={{ width: '700px' }}></i> Cart
              </button>
            </div>
          </div>
          <Products modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
      </div>
    </>
  )
}

export default Main
