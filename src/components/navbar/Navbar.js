import './Navbar.css'
import logo from './images/logo.png'
import {FaPowerOff} from 'react-icons/fa'
import { AiOutlineDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai';




export const Navbar = ({children, user, logOut}) =>{

    

    


    return(
        <header className='background'>
            <nav className='header__nav'>
                <ul className='header__nav-ul'>
                    <div className='header__nav-logo-title'>
                        <div className='header__nav-logo'>
                            <Link to={"/"} ><img src={logo} className="logo"></img></Link>
                            <h2 ><Link to={"/"} className='header__nav-h2'>Tecno Kingdom</Link></h2>
                        </div>
                        
                    </div>
                    <span className='mobile__menu-icon' ><AiOutlineMenu/>
                    <ul className='header__nav-links'>
                        <li className='header__nav-li'>
                            {children}
                        </li>

                        <li className='header__nav-li'>
                            <Link to={'/categorias/placa-video'} className='header__a'><b>Mis Compras</b></Link>
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
                            {user
                            ?
                            <>
                            <Link  to={"/"} className='header__a login'><b>{user.email} </b></Link>
                                <button onClick={logOut} className="logout__button"><FaPowerOff/></button>
                            </>
                            :
                            <Link  to={"/login"} className='header__a login'><b>iniciar sesion</b></Link>






                            }
                            
                        </li>
                        

                        
                    </ul>
                    </span>
                    
                    
                    
                </ul>

                

            </nav>

        </header>






    )


}
