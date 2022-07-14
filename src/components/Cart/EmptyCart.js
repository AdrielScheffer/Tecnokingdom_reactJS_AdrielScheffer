import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import { useContext } from "react"

export const EmptyCart = ()=>{

    const {user} = useContext(AuthContext)

    return(
        <div className='cart__container'>
        <div className='empty__cart'>
            {!user
            ?
            <>
                <h3 className='empty__cart-title'>Tenes que registrarte o loguearte para comprar</h3>
                <Link to={"/login"} className="button empty__cart-button">iniciar sesion</Link>
            </>
            :
            <>
            <h1 className='empty__cart-title'>TU CARRITO ESTA VACIO</h1>
            <Link to={"/"} className="button empty__cart-button">Ir a comprar</Link>
            </>
            }


        </div>
        </div>





    )
}