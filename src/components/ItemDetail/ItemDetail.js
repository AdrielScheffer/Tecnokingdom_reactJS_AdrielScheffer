import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export const ItemDetail = ({item,children})=>{

    console.log(children)

    return(
        <>

        <div className="back__button-container">
            <Link className="back__button" to={`/categorias/${item.categoria}`}><IoIosArrowRoundBack className="icon"/>VOLVER</Link>
        </div>


        <div className="detail__container">
            
            <img src={item.imagen} className='image'></img>
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