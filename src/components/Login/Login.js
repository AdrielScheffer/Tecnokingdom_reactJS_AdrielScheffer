import { useState } from "react"
import { auth } from "../../firebase/config"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import "./Login.css"
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../../Context/AuthContext';
import { useContext } from "react"



export const Login=()=>{

    const {setUser} = useContext(AuthContext)

    const navigate = useNavigate()

        const handleVolver = () => {
            navigate(-1)
        }

    const [isRegister, setIsRegister] = useState(false)

    const createUser=(email,password)=>{

        createUserWithEmailAndPassword(auth,email, password)
            .then((usuarioFirebase) =>{
                setUser(usuarioFirebase.user)
            })
    }

    const logIn=(email, password)=>{
        signInWithEmailAndPassword(auth,email,password)
            .then((usuarioFirebase)=>{
                setUser(usuarioFirebase.user)
            })
    }

    const submitHandler= (e)=>{
        e.preventDefault()
        const email = e.target.emailField.value;
        const password = e.target.passwordField.value;

        if(isRegister){
            createUser(email,password)
        }
        if(!isRegister){
            logIn(email,password)
        }
        

    }

    

    return(
        <div className="flex__main">
        <div className="login__container">
            <h1 className="login__container-h1">{isRegister ? "Registrate en TecnoKingdom!" : "Inicia sesion para comprar!"}</h1>
            <form onSubmit={submitHandler} className="login__container-form">
                <label>Email</label>
                <input type="email" id="emailField" className="login__container-form-input" placeholder="Email@ejemplo.com"/>
                <label>Contraseña</label>
                <input type="password" id="passwordField" className="login__container-form-input" placeholder="Contraseña"/>
                
                <button type="submit" className="login__container-button" onClick={handleVolver}>{isRegister ? "Registrarme" : "Iniciar sesion"} </button>
            </form>

            <button onClick={()=> setIsRegister(!isRegister)}className="login__container-button-change">
                {isRegister 
                ?
                "Ya tienes cuenta? Inicia sesion!"
                :
                "Registrate haciendo click aqui"}
            </button>




        </div>
        </div>
    )

}