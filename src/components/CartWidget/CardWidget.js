import {RiShoppingCartLine} from 'react-icons/ri'
import './CartWidget.css'


export const CardWidget = ()=>{

    return(

        <div className='cardwidget__main'>
            <a href='#' className='cardwidget__a'><RiShoppingCartLine className='icon'/>Carrito</a>
        </div>


    )
}