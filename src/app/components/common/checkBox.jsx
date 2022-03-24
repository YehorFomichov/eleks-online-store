import React from 'react'

const CheckBox = ({ itemsList, onSort }) => {
  return (
    <ul className='list-group'>
      {itemsList &&
        itemsList.map((item) => (
          <li className='list-group-item' key={item._id}>
            <input
              className='form-check-input me-1'
              type='checkbox'
              // checked={itemsList > 0 || false}
              value={item._id}
              aria-label='...'
              onClick={() => onSort(item._id)}
            />
            {item.name}
          </li>
        ))}
    </ul>
  )
}

export default CheckBox
