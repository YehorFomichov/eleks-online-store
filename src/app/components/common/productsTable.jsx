import React from 'react'

const ProductsTable = ({ products }) => {
  return (
    <div className='col-8'>
      <div className='row'>
        <div className='col-12'>
          <div className='form-outline'>
            <input type='search' id='form1' className='form-control' />
            <label className='form-label' htmlFor='form1'></label>
          </div>
        </div>
      </div>
      <div className='row'>
        {/* <div className='col-6'>1</div>
      <div className='col-6'>2</div> */}
        {products &&
          products.map((el) => (
            <div className='col-xl-6 col-xxl-4 px-3 py-1' key={el._id}>
              <div
                className='row'
                style={{
                  boxSizing: 'border-box',
                  backgroundPosition: '50%',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  display: 'flex',
                  height: '200px',
                  boxShadow: '2px solid black',
                  justifyContent: 'center',
                  backgroundImage: `url(${el.image})`
                }}
              ></div>
              <div className='row justify-content-between p-2'>
                <div className='col-3'>{el.rating}</div>
                <div className='col-3'>{el.price}</div>
              </div>
              <div className='row'>
                <div className='col-12 text-truncate'>{el.description}</div>
              </div>
              <div className='row'>
                <button className='btn btn-primary col-12'>add to cart</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default ProductsTable
