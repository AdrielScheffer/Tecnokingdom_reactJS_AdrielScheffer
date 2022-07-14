import { IoIosArrowRoundBack } from "react-icons/io";
import { ItemCount } from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom"
import { useContext, useState, useEffect} from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext';


export const ItemDetail = ({item})=>{

    const {user} = useContext(AuthContext)

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

    const handleUserLogic=(user,item)=>{
        if(user && isInCart(item.id)){
            return(
                <>
                    <div className="finish__container" id="finish">
                        <Link to={"/cart"} className="finish__container-link">Terminar compra</Link>
                    </div>
                    <div className="continue__buy">
                    <Link to={"/"} className="continue__buy-link">Seguir comprando</Link>

                    </div>
                </>
            )
        }else if(user && !isInCart(item.id)){
            return(
                <>
                <p className="price">$ {item.precio}</p>
                <div id="item_count"><ItemCount stock={item.stock} counter={cantidad} setCounter={setCantidad} handleAgregar={handleAgregar} id="item_count"/></div>
                </>
            )
        }else{
            return(
                <>
                <p className="price">$ {item.precio}</p>
                <div><Link to={"/login"} className="login__link">Debes registrate para poder comprar</Link></div>
                </>
            )
        }

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
                
                {handleUserLogic(user, item)}
            </div>
            
            
            
              
        </div>
        {
                !isInCart(item.id) && user
                ?
                <>
                <div className="button__container" id="button">
                <button className="button"onClick={handleAgregar}>Agregar al carrito</button>
                </div>
                
                </>
                :
                <>
                
                </>
            }
        
        
        

        </>
    )
}