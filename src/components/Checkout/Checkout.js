import { useState } from "react"
import "./Checkout.css"
import { CartContext } from "../../Context/CartContext"
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { db } from "../../firebase/config"
import { collection, addDoc } from "firebase/firestore"
import { Formik} from 'formik'
import * as Yup from 'yup'







export const Checkout = ()=>{

    const schema=Yup.object().shape({
        nombre:Yup.string()
                .required("el campo es requerido")
                .min(4, "nombre demasiado corto")
                .max(20, "El nombre es demasiado corto"),
        email:Yup.string()
                .email("Formato de email incorrecto")
                .required("Campo requerido"),
        direccion:Yup.string()
                    .required("Campo requerido")
                    .min(5, "Direccion demasiado corta")
                    .max(30,"La direccion es demasiado larga")
        
        
                
                    
        
    })
    

    let time = new Date()

    const {Cart, totalPrice, emptyCart} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    
    


    const [values, setValues] = useState({
        nombre:"",
        email:"",
        direccion:"",


    })

    
    const crearOrden=(values)=>{

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
            <Formik
            initialValues={{
                nombre:"",
                email:"",
                telefono:""

            }}
            onSubmit={(values)=>{
                
                
                crearOrden(values)
            }}
            validationSchema={schema}
            >
                {(formik)=>(
                    <form onSubmit={formik.handleSubmit} className="checkout__container-form">
                        <input
                            value={formik.values.nombre}
                            name="nombre"
                            onChange={formik.handleChange}
                            
                            type={"text"} 
                            placeholder="Nombre" 
                            className="input"

                        />
                        {formik.errors.nombre && <p>{formik.errors.nombre}</p>}
                        <input
                            value={formik.values.email}
                            name="email"
                            onChange={formik.handleChange}
                            type={"email"} 
                            placeholder="email@ejemplo.com" 
                            className="input"
                        />
                        {formik.errors.email && <p>{formik.errors.email}</p>}
                        <input
                            value={formik.values.direccion}
                            name="direccion"
                            onChange={formik.handleChange}
                            type={"text"} 
                            placeholder="direccion" 
                            className="input"
                        />
                        {formik.errors.direccion && <p>{formik.errors.direccion}</p>}

                        <button type="submit" className="finish-buy">Enviar</button>
                    </form>


                )}
                
            </Formik>
        </div>
    )
}