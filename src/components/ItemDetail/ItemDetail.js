import { IoIosArrowRoundBack } from "react-icons/io";
import { ItemCount } from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom"
import { useState } from "react";

export const ItemDetail = ({item})=>{

    const [cantidad, setCantidad]= useState(1)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar =()=>{
        let elemento = document.getElementById("button")
        elemento.style.display = "none";
        let fin = document.getElementById("finish")
        fin.style.visibility = "visible";
        let counter = document.getElementById("item_count")
        counter.style.visibility = "hidden";
        const itemToCart = {
            ...item,
            cantidad:cantidad
        }
        console.log(itemToCart)

    }

    
    return(
        <>

        {/* 
            Esta forma de volver atras funciona, pero pierde el sentido cuando se accede a un item desde la pagina principal
            y despues se vuelve a una categoria

        <div className="back__button-container">
            <Link className="back__button" to={`/categorias/${item.categoria}`}><IoIosArrowRoundBack className="icon"/>VOLVER</Link>
        </div> */}

        

    


        <div className="back__button-container">
            <button className="back__button" onClick={handleVolver}><IoIosArrowRoundBack className="icon"/>VOLVER</button>
        </div> 

        

        <div className="detail__container">
            
            <img src={item.imagen} className='image' alt= 'item' ></img>
            <div className="detail__text">
                <h1>{item.nombre}</h1>
                <p className="desc">{item.descripcionLarga}</p>
                <p className="price">{item.precio}</p>
                <div id="item_count"><ItemCount stock={10} counter={cantidad} setCounter={setCantidad} handleAgregar={handleAgregar} id="item_count"/></div>
                
                
            </div>
            
              
        </div>
        
        
        

        </>
    )
}