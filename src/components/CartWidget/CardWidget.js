import {RiShoppingCartLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import './CartWidget.css'
import { CartContext } from "../../Context/CartContext"
import { useContext } from "react"



export const CardWidget = ()=>{

    const {cantidadTotal, Cart} = useContext(CartContext)

    if (Cart.length === 0) return (

    <>
    
    </>
    
    )

    return(

        <div className='cardwidget__main'>
        <span className='cart__number'>{cantidadTotal()}</span>
            <Link to={"/cart"} className='cardwidget__a'><RiShoppingCartLine className='icon'/>Carrito</Link>
        </div>
       
    )
}