import React from 'react'
import { useFilter } from '../../hooks/useFilter'

const CheckBox = ({ itemsList, onSort }) => {
  const { checkBoxState } = useFilter()
  return (
    <ul className='list-group'>
      {itemsList &&
        itemsList.map((item) => (
          <li className='list-group-item' key={item._id}>
            <input
              className='form-check-input me-1'
              type='checkbox'
              checked={checkBoxState[item._id] || false}
              value={item._id}
              aria-label='...'
              onChange={() => onSort(item._id)}
            />
            {item.name}
          </li>
        ))}
    </ul>
  )
}

export default CheckBox
