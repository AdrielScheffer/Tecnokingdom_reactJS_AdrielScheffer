import { createContext } from "react";
import { useContext, useState } from "react";

export const CartContext= createContext()

export const useCartContext = () => {
    return useContext(CartContext)
}


export const CartProvider = ({children}) => {
    const [Cart, setCart] = useState([])

    const addItem = (item) => {
      
      setCart( [...Cart, item] )
    }
    const isInCart = (id) => {
        return Cart.some((prod) => prod.id === id)
      }
    
      const totalPrice = () => {
        return Cart.reduce( (acc, prod) => acc += (prod.precio * prod.cantidad), 0)
      }
    
      const cantidadTotal = () => {
        return Cart.reduce( (acc, prod) => acc += prod.cantidad, 0 )
      }
    
      const emptyCart = () => {
        setCart( [] )
      }
  
      const removeItem = (id) => {
          setCart( Cart.filter((prod) => prod.id !== id) )
      }
  
      return (
          <CartContext.Provider value={ 
              {
                  Cart, 
                  addItem, 
                  isInCart, 
                  totalPrice,
                  cantidadTotal, 
                  emptyCart,
                  removeItem
              } 
          }>
              {children}
          </CartContext.Provider>
              )
        }        