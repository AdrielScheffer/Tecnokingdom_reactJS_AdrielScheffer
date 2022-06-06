import { Link} from 'react-router-dom';

const Item = ({item})=>{


    return(
        <div className="main__container-div-element">

            <h3>{item.nombre}</h3>
            <img src={item.imagen} alt="gpu" className="image"/>
            <p>{item.descripcion}</p>
            <p>{item.precio}</p>
            <Link className='main__container-div-button' to={`/producto/${item.id}`}>Ver mas</Link>
            
        </div>
    )
}
export default Item