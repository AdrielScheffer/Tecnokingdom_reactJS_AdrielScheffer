import { IoIosArrowRoundBack } from "react-icons/io";
import { ItemCount } from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from 'react-router-dom'

export const ItemDetail = ({item})=>{

    const {addItem, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad]= useState(1)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar =()=>{
        
        
        const itemToCart = {
            ...item,
            cantidad
        }
       

        addItem(itemToCart)

    }

    
    return(
        <>

        <div className="back__button-container">
            <button className="back__button" onClick={handleVolver}><IoIosArrowRoundBack className="icon-back"/></button>
        </div> 

        

        <div className="detail__container">
            
            <img src={item.imagen} className='image' alt= 'item' ></img>
            <div className="detail__text">
                <h1>{item.nombre}</h1>
                <p className="desc">{item.descripcionLarga}</p>
                {/* <p className="price">$ {item.precio}</p> */}
                
                
                {
                isInCart(item.id)
                ? 
                <>
                    <div className="finish__container" id="finish">
                    <Link to={"/cart"} className="finish__container-link">Terminar compra</Link>
                    </div>
                </>
            
                : <>
                
                <p className="price">$ {item.precio}</p>
                <div id="item_count"><ItemCount stock={item.stock} counter={cantidad} setCounter={setCantidad} handleAgregar={handleAgregar} id="item_count"/></div>

                
                </>
                    
                }
                
            </div>
            
            
            
              
        </div>
        {
                isInCart(item.id)
                ?
                <></>
                :
                <>
                <div className="button__container" id="button">
                <button className="button"onClick={handleAgregar}>Agregar al carrito</button>
                </div>
                </>
            }
        
        
        

        </>
    )
}