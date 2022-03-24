import React from 'react'
import { useCart } from '../../hooks/useCart'
import './productsTable.css'
const ProductsTable = ({ products, onSearchInput }) => {
  const { addProductToCart } = useCart()
  return (
    <div className='col-9'>
      <div className='row'>
        <div className='col-12'>
          <div className='form-outline'>
            <input
              type='search'
              id='form1'
              placeholder='Search'
              className='search-form'
              onChange={onSearchInput}
            />
            <label className='form-label' htmlFor='form1'></label>
          </div>
        </div>
      </div>
      <div className='card-list'>
        <div className='product-container'>
          {products &&
            products.map((el) => (
              <div className='product-card' key={el._id}>
                <div
                  className='product-image'
                  style={{
                    backgroundImage: `url(${el.image})`
                  }}
                ></div>
                <div className='product-content'>
                  <div className='product-price-wrapper'>
                    <div className='product-rating'>
                      {el.rating}
                      <i className='bi bi-star'></i>
                    </div>
                    <div className='product-price'>{el.price}</div>
                  </div>
                  <h5 className='product-description'>{el.description}</h5>
                </div>
                <div className='row'>
                  <button
                    className='btn btn-primary col-12'
                    style={{ color: 'white' }}
                    onClick={() => addProductToCart(el._id)}
                  >
                    add to cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsTable
