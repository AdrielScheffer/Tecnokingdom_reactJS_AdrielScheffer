import { useState } from "react"
import spiner from '../ItemListContainer/images/spiner.gif'
import "./Cart.css"

export const Cart=()=>{

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
         </div>




    )
}