

const Item = ({item})=>{


    return(
        <div className="main__container-div-element">

            <h3>{item.nombre}</h3>
            <img src={item.imagen} alt="gpu" className="image"/>
            <p>{item.descripcion}</p>
            <p>{item.precio}</p>
            <button className="main__container-div-button">Ver mas</button>
            
        </div>
    )
}
export default Item