import React, { useState } from 'react'
import { useProducts } from '../../hooks/useProduct'
import Pagination from '../common/pagination'
import paginate from '../../utils/paginate'
import LeftBar from '../common/leftBar'
import ProductsTable from '../common/productsTable'
const Products = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { products } = useProducts()
  const productsArray = Object.keys(products).map((el) => {
    return { ...products[el] }
  })
  const productsCount = productsArray.length
  const pageSize = 6
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  const productsCrop = paginate(productsArray, currentPage, pageSize)

  return (
    products && (
      <div className='row'>
        <LeftBar />
        <ProductsTable products={productsCrop} />
        <Pagination
          itemsCount={productsCount}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </div>
    )
  )
}

export default Products
