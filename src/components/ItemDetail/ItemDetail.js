import { IoIosArrowRoundBack } from "react-icons/io";

import { useNavigate } from "react-router-dom"

export const ItemDetail = ({item,children})=>{

    console.log(children)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
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
                <div>{children}</div>
                
            </div>
            
                
        </div>
        <div className="button__container">
                <button className="button">Agregar al carrito</button>
            </div>

        </>
    )
}