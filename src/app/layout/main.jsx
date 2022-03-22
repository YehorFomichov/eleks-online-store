import React from 'react'
// import Slider from '../components/common/slider'
const Main = () => {
  const someObj = ['asdf', 'asdf', 'asdverb', 'asdf', 'asdf']
  const handleReset = () => {
    console.log('reset')
  }
  return (
    <div className='container-xl border'>
      <div className='row my-3'>
        <div className='col-10'>
          <h1>Online Store</h1>
        </div>
        <div className='col text-right'>Cart</div>
      </div>
      <div className='row'>
        <div className='col-4 border'>
          <div className='row'>
            <h2>Price</h2>
          </div>
          <div className='row'>slider</div>
          <div className='row'>
            <h3>Category</h3>
          </div>
          <div>CheckBox</div>
          <div className='row'>
            <h3>Brand</h3>
          </div>
          <div>Checkbox</div>
          <div className='row'>
            <h3>Rating</h3>
          </div>
        </div>
        <div className='col-8 border'>
          <div className='row'>
            <div className='col'>SearchBar</div>
          </div>
          <div className='row'>
            {/* <div className='col-6'>1</div>
            <div className='col-6'>2</div> */}
            {someObj.map(() => (
              <div className='col-xl-6 col-xxl-4 px-3 py-1'>
                <div
                  className='row'
                  style={{
                    boxSizing: 'border-box',
                    backgroundPosition: '50%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    display: 'flex',
                    height: '200px',
                    justifyContent: 'center',
                    backgroundImage:
                      'url(https://content2.rozetka.com.ua/goods/images/big_tile/163399632.jpg)'
                  }}
                ></div>
                <div className='row justify-content-between'>
                  <div className='col-3'>23.89</div>
                  <div className='col-3'>15999</div>
                </div>
                <div className='row'>
                  <h5>
                    Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal
                    Black
                  </h5>
                </div>
                <div className='row'>
                  <button className='btn btn-primary col-12'>
                    add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
