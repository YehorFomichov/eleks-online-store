import React, { useState } from 'react'
import { useProducts } from '../../hooks/useProduct'
import Pagination from '../common/pagination'
import paginate from '../../utils/paginate'
import Modal from './modal/modal'
import ProductsTable from './productTable/productsTable'
import LeftBar from './leftBar/leftBar'
import { useFilter } from '../../hooks/useFilter'
const initialParams = {
  selectedBrand: [],
  selectedCategory: [],
  maxPrice: 65000,
  maxRate: 5
}
const Products = ({ modalOpen, setModalOpen }) => {
  const { addToFilter } = useFilter()
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedBrand, setSelectedBrand] = useState(
    initialParams.selectedBrand
  )
  const [selectedCategory, setSelectedCategory] = useState(
    initialParams.selectedCategory
  )
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(initialParams.maxPrice)
  const [minRate, setMinRate] = useState(0)
  const [maxRate, setMaxRate] = useState(initialParams.maxRate)
  const [searchQuaery, setSearchQueary] = useState()
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
  const handleSearchInput = ({ target }) => {
    setSearchQueary(target.value)
  }
  const { resetFilters } = useFilter()
  const handleReset = () => {
    setSelectedBrand(initialParams.selectedBrand)
    setSelectedCategory(initialParams.selectedCategory)
    setMinPrice(0)
    setMaxPrice(initialParams.maxPrice)
    setMinRate(0)
    setMaxRate(initialParams.maxRate)
    setCurrentPage(1)
    resetFilters()
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
    addToFilter(value)
    selectedCategory.includes(value)
      ? setSelectedCategory((prevState) =>
          prevState.filter((el) => el !== value)
        )
      : setSelectedCategory((prevState) => [...prevState, value])
  }
  const handleSortByBrand = (value) => {
    addToFilter(value)
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
  const searchedProducts = searchQuaery
    ? filteredProducts.filter((el) => {
        if (el.description.toLowerCase().includes(searchQuaery.toLowerCase()))
          return el
      })
    : filteredProducts
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  const pageSize = 10
  const productsCount = searchedProducts.length
  const productsCrop = paginate(searchedProducts, currentPage, pageSize)

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
          onReset={handleReset}
        />
        <ProductsTable
          products={productsCrop}
          onSearchInput={handleSearchInput}
        />
        <Pagination
          itemsCount={productsCount}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </div>
    )
  )
}

export default Products
