import { useState } from "react"
import spiner from '../ItemListContainer/images/spiner.gif'
import "./Cart.css"
import { CartContext } from "../../Context/CartContext"
import { useContext } from "react"
import { MdOutlineDeleteOutline } from "react-icons/md"
import { EmptyCart } from "./EmptyCart"
import { Link } from "react-router-dom"

export const CartPage=()=>{

    const {Cart, removeItem, totalPrice} = useContext(CartContext)

    const [loading, setLoading] = useState(true)

    const loadChange = ()=>{
        setLoading(false)
    }

    
    
    
    

    setTimeout(()=>{ loadChange()}, 1000)


    if (Cart.length === 0) return(
    
    <EmptyCart></EmptyCart>
    
    )


    return(

        loading
        ?<div className="spiner__load"><img src={spiner} alt="spiner" className='spiner'></img></div>
        
        :<div className="cart__container">
            
            
            {
                Cart.map((item) => (
                <div key={item.id} className="cart__item">
                   
                        <img src={item.imagen} alt={item.nombre} className="cart__item-image"></img>
                        <div>
                            <h5 className="data">{item.descripcion}</h5>
                            <p className="data">Cantidad: {item.cantidad}</p>
                            <p className="data">Precio total: { item.precio * item.cantidad} ({item.cantidad} x {item.precio})</p>
                        </div>
                   
                    
                    <div ><MdOutlineDeleteOutline className="cart_item-option" onClick={() => removeItem(item.id)}/></div>
                   
                </div>
            
                ))
            }

            
                <Link to={"/checkout"} className="finish-buy">Total: $ {totalPrice()} Comprar</Link> 
            
            
             
            
         </div>

    



    )
}