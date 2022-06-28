import { useState } from "react"
import "./Checkout.css"
import { CartContext } from "../../Context/CartContext"
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { db } from "../../firebase/config"
import { collection, addDoc } from "firebase/firestore"



export const Checkout = ()=>{

    const Swal = require('sweetalert2')

    let time = new Date()

    const {Cart, totalPrice, emptyCart} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre:"",
        email:"",
        telefono:"",


    })

    const handleInputChange=(e)=>{

        setValues({
            ...values,
            [e.target.name]:e.target.value

        })


    }
    const handleSubmit=(e)=>{


        e.preventDefault()

        if (values.nombre.length < 5){
            Swal.fire({
                title: 'Error!',
                text: 'El nombre es demasiado corto',
                icon: 'error',
                confirmButtonText: 'Aceptar'
              })
            
            return 
        }
        if (values.email.length < 5){
            Swal.fire({
                title: 'Error!',
                text: 'El email es invalido',
                icon: 'error',
                confirmButtonText: 'Aceptar'
              })
            return 
        }
        if (values.telefono.length < 5){
            Swal.fire({
                title: 'Error!',
                text: 'El telefono es incorrecto',
                icon: 'error',
                confirmButtonText: 'Aceptar'
              })
            return 
        }


        const orden={
            buyer: values,
            items: Cart.map(({id, cantidad,nombre,precio})=>({id, cantidad,nombre,precio})),
            date: time,
            total: totalPrice()
        }
        
        const ordersRef = collection(db, "orders")

        addDoc(ordersRef, orden)
            .then((doc) =>{
                setOrderId(doc.id)
            })

    }


    if (orderId){
        emptyCart()
        
        return(
            <div className="checkout__container">
                <h1 className="order__h2">Gracias por su compra</h1>
                <p className="order__id">su numero de orden es:<p>{orderId}</p></p>
            </div>
        )
    }

    if(Cart.length === 0){
        return <Navigate to={"/"}/>
    }


    return(
        <div className="checkout__container">
            <h2>Checkout</h2>
            <p>ingrese sus datos:</p>
            <form onSubmit={handleSubmit} className="checkout__container-form">
                <input
                    value={values.nombre}
                    name="nombre"
                    onChange={handleInputChange}
                    
                    type={"text"} 
                    placeholder="Nombre" 
                    className="input"

                />
                <input
                    value={values.email}
                    name="email"
                    onChange={handleInputChange}
                    type={"email"} 
                    placeholder="email@ejemplo.com" 
                    className="input"
                />
                <input
                    value={values.telefono}
                    name="telefono"
                    onChange={handleInputChange}
                    type={"number"} 
                    placeholder="telefono" 
                    className="input"
                />

                <button type="submit" className="finish-buy">Enviar</button>
            </form>
        </div>
    )
}