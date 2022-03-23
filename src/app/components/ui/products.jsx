import React, { useState } from 'react'
import { useProducts } from '../../hooks/useProduct'
import Pagination from '../common/pagination'
import paginate from '../../utils/paginate'
import LeftBar from '../common/leftBar'
import ProductsTable from '../common/productsTable'
const Products = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedBrand, setSelectedBrand] = useState([])
  const [selectedCategory, setSelectedCategory] = useState([])
  const { products } = useProducts()
  const productsArray = Object.keys(products).map((el) => {
    return { ...products[el] }
  })
  const { categories, brands } = useProducts()
  const categoryArray = Object.keys(categories).map((el) => {
    return categories[el]
  })
  const brandsArray = Object.keys(brands).map((el) => {
    return brands[el]
  })
  const handleSortByCategory = (value) => {
    selectedCategory.includes(value)
      ? setSelectedCategory((prevState) =>
          prevState.filter((el) => el !== value)
        )
      : setSelectedCategory((prevState) => [...prevState, value])
  }
  const handleSortByBrand = (value) => {
    selectedBrand.includes(value)
      ? setSelectedBrand((prevState) => prevState.filter((el) => el !== value))
      : setSelectedBrand((prevState) => [...prevState, value])
  }
  const filteredProducts =
    selectedBrand.length > 0 && selectedCategory.length > 0
      ? productsArray.filter((el) => {
          if (
            selectedBrand.includes(el.brand) &&
            el.category.some((cat) => selectedCategory.includes(cat))
          ) {
            return el
          }
        })
      : selectedBrand.length > 0
      ? productsArray.filter((el) => {
          if (selectedBrand.includes(el.brand)) {
            return el
          }
        })
      : selectedCategory.length > 0
      ? productsArray.filter((el) => {
          if (el.category.some((cat) => selectedCategory.includes(cat)))
            return el
        })
      : productsArray

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  const pageSize = 6
  const productsCount = filteredProducts.length
  const productsCrop = paginate(filteredProducts, currentPage, pageSize)

  return (
    products && (
      <div className='row'>
        <LeftBar
          handleSortByCategory={handleSortByCategory}
          handleSortByBrand={handleSortByBrand}
          categoryArray={categoryArray}
          brandsArray={brandsArray}
        />
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
