import './Navbar.css'
import logo from './images/logo.png'
import {IoLogInOutline} from 'react-icons/io5'
import { AiOutlineDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';




export const Navbar = ({children}) =>{


    return(
        <header className='background'>
            <nav className='header__nav'>
                <ul className='header__nav-ul'>
                    <div className='header__nav-logo-title'>
                        <div className='header__nav-logo'>
                            <img src={logo} className="logo"></img>
                            <h2 ><Link to={"/"} className='header__nav-h2'>Tecno Kingdom</Link></h2>
                        </div>
                        
                    </div>
                    <ul className='header__nav-links'>
                        <li className='header__nav-li'>
                            {children}
                        </li>

                        <li className='header__nav-li'>
                            <Link to={'/categorias/placa-video'} className='header__a'><b>Novedades</b></Link>
                        </li>
                        
                        <div className='header__nav-li'>
                            <div className='header__a product'><AiOutlineDown className='product__icon'/><b>Productos</b>
                                <ul className='submenu'>
                                    <li><Link to={"/categorias/motherboards"} className='header__a' >motherboards</Link></li>
                                    <li><Link to={'/categorias/procesadores'} className='header__a' >procesadores</Link></li>
                                    <li><Link to={'/categorias/ram'} className='header__a' >memorias ram</Link></li>
                                    <li><Link to={'/categorias/placa-video'} className='header__a' >placas de video</Link></li>
                                    <li><Link to={'/categorias/almacenamiento'} className='header__a' >almacenamiento</Link></li>
                                    
                                    <li><Link to={'/categorias/fuentes'} className='header__a' >fuentes</Link></li>
                                    
                                    
                                </ul>
                            </div>
                        </div>
                            
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
