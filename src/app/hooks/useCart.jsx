import React, { useContext, useState } from 'react'

const CartContext = React.createContext()

export const useCart = () => {
  return useContext(CartContext)
}
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const addProductToCart = (id) => {
    if (cart.length === 0) {
      setCart([{ _id: id, quantity: 1 }])
    } else if (cart.some((el) => el._id === id)) {
      const newCart = cart.map((el) => {
        if (el._id !== id) return el
        const newEl = { ...el, quantity: el.quantity + 1 }
        return newEl
      })
      setCart(newCart)
    } else setCart((prevState) => [...prevState, { _id: id, quantity: 1 }])
  }
  const increaseQuantity = (el) => {
    el.quantity += 1
  }
  const decreaseQuantity = (el) => {
    return el.quantity !== 0 ? (el.quantity -= 1) : el.quantity
  }
  return (
    <CartContext.Provider
      value={{ cart, addProductToCart, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
