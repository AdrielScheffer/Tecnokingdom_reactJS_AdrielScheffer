import { useState } from "react"
import spiner from '../ItemListContainer/images/spiner.gif'
import "./Cart.css"
import { CartContext } from "../../Context/CartContext"
import { useContext } from "react"

export const CartPage=()=>{

    const {Cart} = useContext(CartContext)

    const [loading, setLoading] = useState(true)

    const loadChange = ()=>{
        setLoading(false)
    }

    
    
    
    

    setTimeout(()=>{ loadChange()}, 2000)

    return(

        loading
        ?<div className="spiner__load"><img src={spiner} alt="spiner" className='spiner'></img></div>
        
        :<div className="cart__container">
            <h1 className="cart__container-h2">Carrito</h1>
            
            {
                Cart.map((item) => (
                <div key={item.id} className="cart__item">
                    <h5>{item.nombre}</h5>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Precio: { item.precio * item.cantidad}</p>
                    
                   
                </div>
                ))
            }
             
            
         </div>

    



    )
}