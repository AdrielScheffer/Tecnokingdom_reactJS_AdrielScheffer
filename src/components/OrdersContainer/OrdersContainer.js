import { collection, getDocs,query,where } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { useContext } from "react"
import OrdersDetail from '../OrdersDetail/OrdersDetail.js';

export const OrdersContainer=()=>{

    const [items,setItems]= useState([])
    
    const {user} = useContext(AuthContext)

    
        
        useEffect(()=>{

            

            

            const ordersRef = collection(db, "orders")
            const q = query(ordersRef, where("email","==",user.email))

            getDocs(q)
                .then((resp)=>{
                    
                    const Newitems = (resp.docs.map((doc)=>{
                        
                        return{
                            id: doc.id,
                            ...doc.data()
                        }
                    }))
                    setItems(Newitems)      
                                 
                })
                
            

        },[])
    
                
            

        
    
    if(user){


    

    return(

        
        <div className='main__container-orders'>
            <h1 className='h1-orders'>Compras</h1>

            <p className='p-orders'>Listado de sus compras:</p>
            

                <OrdersDetail order={items}/>
    
            




        </div>
    )
    }else{

        return(
            <div className='main__container-orders'>
            <h1 className='h1-orders'>Debes loguearte para ver sus compras</h1>

            
    
            




        </div>


        )
    }
}