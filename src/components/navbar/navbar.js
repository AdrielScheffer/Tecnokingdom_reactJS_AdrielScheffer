import './navbar.css'
import logo from './images/logo.png'
import {IoLogInOutline} from 'react-icons/io5'
import { AiOutlineDown } from 'react-icons/ai';




export const Navbar = ({children}) =>{

    return(
        <header>
            <nav className='header__nav'>
                <ul className='header__nav-ul'>
                    <div className='header__nav-logo-title'>
                        <div className='header__nav-logo'>
                            <img src={logo} className="logo"></img>
                            <h2 className='header__nav-h2'>Tecno Kingdom</h2>
                        </div>
                        
                    </div>
                    <ul className='header__nav-links'>
                        <li className='header__nav-li'>
                            {children}
                        </li>

                        <li className='header__nav-li'>
                            <a  href='#' className='header__a'><b>Novedades</b></a>
                        </li>
                        
                        <li className='header__nav-li'>
                            <a  href='#' className='header__a product'><AiOutlineDown className='product__icon'/><b>Productos</b>
                                <ul className='submenu'>
                                    <li><a className='header__a' href='#'>motherboards</a></li>
                                    <li><a className='header__a' href='#'>procesadores</a></li>
                                    <li><a className='header__a' href='#'>memorias ram</a></li>
                                    <li><a className='header__a' href='#'>placas de video</a></li>
                                    <li><a className='header__a' href='#'>almacenamiento</a></li>
                                    <li><a className='header__a' href='#'>monitores</a></li>
                                    <li><a className='header__a' href='#'>fuentes</a></li>
                                    <li><a className='header__a' href='#'>gabinetes</a></li>
                                    <li><a className='header__a' href='#'>accesorios</a></li>
                                </ul>
                            </a>
                        </li>
                            
                        <li className='header__nav-li'>
                            <a  href='#' className='header__a'><b>Sobre nosotros</b></a>
                        </li>
                        <li className='header__nav-li'>
                            <a  href='#' className='header__a login'><IoLogInOutline className='login__icon'/><b>iniciar sesion</b></a>
                        </li>
                        
                    </ul>
                    
                </ul>



            </nav>

        </header>






    )


}