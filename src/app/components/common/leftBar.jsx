import React from 'react'
import Slider from '../common/slider'
import CheckBox from './checkBox'
import './leftBar.css'
const LeftBar = ({
  handleSortByCategory,
  handleSortByBrand,
  categoryArray,
  brandsArray,
  minPrice,
  maxPrice,
  onChangePrice,
  onChangeRate,
  minRate,
  maxRate
}) => {
  return (
    <div className='col-3'>
      <div className='panel-container position-relative'>
        <div className='my-2 pt-2'>
          <h4>Price</h4>
        </div>
        <div className='row py-3'>
          <Slider
            max={65000}
            minVal={minPrice}
            maxVal={maxPrice}
            onChange={onChangePrice}
          />
        </div>
        <div className='my-2 py-2'>
          <h4>Category</h4>
        </div>
        <div>
          <CheckBox onSort={handleSortByCategory} itemsList={categoryArray} />
        </div>
        <div className='my-2 py-2'>
          <h4>Brand</h4>
        </div>
        <div>
          <CheckBox onSort={handleSortByBrand} itemsList={brandsArray} />
        </div>
        <div className='my-2 py-2'>
          <h4>Rating</h4>
        </div>
        <div className='row'>
          <Slider
            max={5.0}
            minVal={minRate}
            maxVal={maxRate}
            onChange={onChangeRate}
          />
        </div>
      </div>
      <div className='row'>
        <button
          className='btn btn-primary btn-large'
          style={{ color: 'white' }}
        >
          Clear all filters
        </button>
      </div>
    </div>
  )
}

export default LeftBar
