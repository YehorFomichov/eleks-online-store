import React, { useState } from 'react'
import { useCart } from '../../../hooks/useCart'
import { useProducts } from '../../../hooks/useProduct'
import './modal.css'

function Modal({ setOpenModal }) {
  const { cart, increaseQuantity, decreaseQuantity } = useCart()
  const { products } = useProducts()
  const [state, setState] = useState(false)
  let totalPrice = 0
  cart.forEach((el) => {
    totalPrice += products[el._id].price * el.quantity
  })
  const handleDecrease = (el) => {
    decreaseQuantity(el)
    setState(!state)
  }
  const handleIncrease = (el) => {
    increaseQuantity(el)
    setState(!state)
  }
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='close-header'>
          <button
            className='btn btn-secondary'
            onClick={() => setOpenModal(false)}
          >
            <i className='bi bi-x-lg'></i>
          </button>
        </div>
        <div data-element='content'>
          <div className='cart-container'>
            <ul className='list-group'>
              {cart &&
                cart.map((el) => (
                  <li className='list-group-item' key={el._id}>
                    <div className='row'>
                      <div
                        className='col-2 d-flex'
                        style={{
                          backgroundImage: `url(${products[el._id].image})`,
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'contain'
                        }}
                      >
                        {/* <img
                          src={products[el._id].image}
                          className='img-fluid'
                          alt='Responsive image'
                        ></img> */}
                      </div>
                      <div className='col-6 d-flex justify-content-center align-items-center'>
                        <h5 className='mt-2'>{products[el._id].description}</h5>
                      </div>
                      <div className='col-3 d-flex justify-content-center align-items-center'>
                        <button
                          className='btn btn-primary mx-3'
                          onClick={() => handleDecrease(el)}
                        >
                          -
                        </button>
                        <h5 className='mt-2'>{el.quantity}</h5>
                        <button
                          className='btn btn-primary mx-3'
                          onClick={() => handleIncrease(el)}
                        >
                          +
                        </button>
                      </div>
                      <div className='col-1 d-flex justify-content-center align-items-center'>
                        <h5 className='mt-2'>
                          {products[el._id].price * el.quantity}
                        </h5>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
            <div className='footer'>
              <div className='cart-total'>
                <h4 className='mt-4'>{`${totalPrice} UAH`}</h4>
              </div>
              <button
                className='btn btn-primary btn-lg'
                data-element='orderBtn'
              >
                Order everything
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
