import { useState } from "react"
import "./Checkout.css"
import { CartContext } from "../../Context/CartContext"
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { db } from "../../firebase/config"
import { collection, addDoc } from "firebase/firestore"
import { Formik} from 'formik'
import * as Yup from 'yup'
import { AuthContext } from '../../Context/AuthContext';








export const Checkout = ()=>{

    

        

    const {user} = useContext(AuthContext)

    const schema=Yup.object().shape({
        nombreCompleto:Yup.string()
                .required("el campo es requerido")
                .min(4, "nombre demasiado corto")
                .max(20, "El nombre es demasiado corto"),
        email:Yup.string()
                .email("Formato de email incorrecto")
                .required("Campo requerido"),
        telefono:Yup.number()
                    .required("Campo requerido")
                    .positive("el numero debe ser positivo")
                    .min(10000000, "El numero es demasiado corto")
                    .max(100000000000, "El numero es demasiado largo")
                    
        
        
                
                    
        
    })
    

    let time = new Date()

    const {Cart, totalPrice, emptyCart} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    
    


    const [values, setValues] = useState({
        nombreCompleto:"",
        email:"",
        telefono:"",


    })

    
    const crearOrden=(values)=>{

        const orden={
            email:values.email,
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
            <h2>Finalizar compra</h2>
            <p>ingrese sus datos:</p>
            <Formik
            initialValues={{
                nombre:"",
                email:user.email,
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
                            value={formik.values.nombreCompleto}
                            name="nombreCompleto"
                            onChange={formik.handleChange}
                            
                            type={"text"} 
                            placeholder="Nombre completo" 
                            className="input"

                        />
                        {formik.errors.nombreCompleto && <p className="errors">{formik.errors.nombreCompleto}</p>}
                        <input
                            value={formik.values.email}
                            name="email"
                            onChange={formik.handleChange}
                            type={"email"} 
                            placeholder={user.email} 
                            className="input"
                            readOnly={true}
                        />
                        {formik.errors.email && <p className="errors">{formik.errors.email}</p>}
                        <input
                            value={formik.values.telefono}
                            name="telefono"
                            onChange={formik.handleChange}
                            type={"number"} 
                            placeholder="telefono" 
                            className="input"
                        />
                        {formik.errors.telefono && <p className="errors">{formik.errors.telefono}</p>}

                        <button type="submit" className="finish-buy">Enviar</button>
                    </form>


                )}
                
            </Formik>
        </div>
    )
}