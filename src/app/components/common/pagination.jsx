import _ from 'lodash'
import React from 'react'

const Pagination = ({ itemsCount, pageSize, onPageChange }) => {
  const pageCount = Math.ceil(itemsCount / pageSize)
  if (pageCount === 1) return null
  const pages = _.range(1, pageCount + 1)
  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination justify-content-center'>
        <li className='page-item disabled'>
          <a className='page-link'>Previous</a>
        </li>
        {pages.map((el, index) => (
          <li className='page-item' key={'page_' + index}>
            <a className='page-link' onClick={() => onPageChange(el)}>
              {el}
            </a>
          </li>
        ))}
        <li className='page-item'>
          <a className='page-link'>Next</a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
