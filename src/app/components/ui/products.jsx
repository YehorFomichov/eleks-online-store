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
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(65000)
  const [minRate, setMinRate] = useState(0)
  const [maxRate, setMaxRate] = useState(5)
  const handleChangePrice = (event) => {
    if (event.target.name === 'min') {
      const value = Math.min(+event.target.value, maxPrice - 1)
      setMinPrice(value)
    }
    if (event.target.name === 'max') {
      const value = Math.max(+event.target.value, minPrice + 1)
      setMaxPrice(value)
    }
  }
  const handleChangeRate = (event) => {
    if (event.target.name === 'min') {
      const value = Math.min(+event.target.value, maxRate - 1)
      setMinRate(value)
    }
    if (event.target.name === 'max') {
      const value = Math.max(+event.target.value, minRate + 1)
      setMaxRate(value)
    }
  }
  const { products } = useProducts()
  const productsArray = Object.keys(products)
    .map((el) => {
      return { ...products[el] }
    })
    .filter((el) => {
      if (
        el.price > minPrice &&
        el.price < maxPrice &&
        el.rating > minRate &&
        el.rating < maxRate
      )
        return el
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
          minPrice={minPrice}
          maxPrice={maxPrice}
          minRate={minRate}
          maxRate={maxRate}
          onChangePrice={handleChangePrice}
          onChangeRate={handleChangeRate}
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
