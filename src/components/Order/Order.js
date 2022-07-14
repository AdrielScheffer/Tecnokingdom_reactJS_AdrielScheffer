import "./Order.css"

const Order = ({item})=>{


    return(
        <>
        
        <div className="container__order">

            {item.items.map(product =>
                <div key={product.id}>
                    <h3>{product.nombre}</h3>
                    <p className="text">precio: ${product.precio}</p>
                    <p className="text">cantidad: {product.cantidad}</p>
                    
                    
                    <hr className="order-hr"/>
                
                
                </div>)
                
                }
            <p className="text">numero de orden:{item.id}</p>
            <p className=''>Total final: ${item.total}</p>
            
            
        
        </div>

        </>
        
    )
}
export default Order