import { Link } from 'react-router-dom';

export const EmptyCart = ()=>{

    return(
        <div className='cart__container'>
        <div className='empty__cart'>
            <h1 className='empty__cart-title'>TU CARRITO ESTA VACIO</h1>

            <Link to={"/"} className="button empty__cart-button">Ir a comprar</Link>


        </div>
        </div>





    )
}