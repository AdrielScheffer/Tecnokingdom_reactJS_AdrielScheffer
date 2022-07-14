import {RiShoppingCartLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import './CartWidget.css'
import { CartContext } from "../../Context/CartContext"
import { useContext } from "react"
import { AuthContext } from '../../Context/AuthContext';


export const CardWidget = ()=>{

    const {user} = useContext(AuthContext)

    const {cantidadTotal, Cart} = useContext(CartContext)

    
    
    

    return(

        <div className='cardwidget__main'>
        <span className='cart__number'>{cantidadTotal()}</span>
            <Link to={"/cart"} className='cardwidget__a'><RiShoppingCartLine className='icon'/></Link>
        </div>
       
    )
}