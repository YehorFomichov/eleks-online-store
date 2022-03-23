import React from 'react'
import Slider from '../common/slider'
import CheckBox from './checkBox'

const LeftBar = ({
  handleSortByCategory,
  handleSortByBrand,
  categoryArray,
  brandsArray
}) => {
  return (
    <div className='col-3'>
      <div className='row'>
        <h2>Price</h2>
      </div>
      <div className='row py-5'>
        <Slider
          min={0}
          max={1000}
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
      </div>
      <div className='row'>
        <h3>Category</h3>
      </div>
      <div>
        <CheckBox onSort={handleSortByCategory} itemsList={categoryArray} />
      </div>
      <div className='row'>
        <h3>Brand</h3>
      </div>
      <div>
        <CheckBox onSort={handleSortByBrand} itemsList={brandsArray} />
      </div>
      <div className='row'>
        <h3>Rating</h3>
        <div className='row py-5'>
          <Slider
            min={0}
            max={5}
            onChange={({ min, max }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
        </div>
      </div>
    </div>
  )
}

export default LeftBar
