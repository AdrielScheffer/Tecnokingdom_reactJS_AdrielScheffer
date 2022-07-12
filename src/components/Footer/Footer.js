import './Footer.css'
import { Link } from "react-router-dom"
import logo from '../Navbar/images/logo.png'

export const Footer = ()=>{

    return(
        <div className='background__footer'>
        <div className="Footer__main-container">
            <div>
            <Link to={"/"} ><img className="Footer__logo" src={logo} alt='logo'></img></Link>
                <Link to={"/"} className="Footer_main-container-p"><p >Tecno Kingdom </p></Link>
            </div>
            
            <Link to={"/login"} className="Footer__main-container-link" >Iniciar sesion</Link>
            <Link to={"/"} className="Footer__main-container-link" >sobre nosotros</Link>
        </div>
        </div>
    )
}