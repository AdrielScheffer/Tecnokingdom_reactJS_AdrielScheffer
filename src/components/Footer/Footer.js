import './Footer.css'
import { Link } from "react-router-dom"
import logo from '../Navbar/images/logo.png'

export const Footer = ()=>{

    return(
        <div className='background'>
        <div className="Footer__main-container">
            <div>
                <img className="Footer__logo" src={logo} alt='logo'></img>
                <Link to={"/"} className="Footer_main-container-p"><p >Tecno Kingdom </p></Link>
            </div>
            <Link to={"/"} className="Footer__main-container-link" >Novedades</Link>
            <Link to={"/"} className="Footer__main-container-link" >Iniciar sesion</Link>
            <Link to={"/"} className="Footer__main-container-link" >sobre nosotros</Link>
        </div>
        </div>
    )
}