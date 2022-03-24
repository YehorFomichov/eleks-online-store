import React, { useContext, useState } from 'react'

const FilterContext = React.createContext()

export const useFilter = () => {
  return useContext(FilterContext)
}
const FilterProvider = ({ children }) => {
  const [checkBoxState, setCheckBoxState] = useState({})
  const addToFilter = (id) => {
    if (!Object.keys(checkBoxState).includes(id)) {
      setCheckBoxState((prevState) => {
        return { ...prevState, [id]: true }
      })
    } else
      setCheckBoxState((prevState) => {
        return { ...prevState, [id]: !prevState[id] }
      })
  }
  const resetFilters = () => {
    setCheckBoxState((prevState) => {
      const newObj = {}
      Object.keys(prevState).forEach((id) => (newObj[id] = false))
      return newObj
    })
  }
  return (
    <FilterContext.Provider
      value={{ checkBoxState, addToFilter, resetFilters }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export default FilterProvider
