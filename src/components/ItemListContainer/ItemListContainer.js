import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList.js'
import { useParams } from 'react-router-dom'
import { collection, getDocs,query,where } from 'firebase/firestore'
import { db } from '../../firebase/config'




export const ItemListContainer = ()=>{

    const [items,setitems]= useState([])
    
    const {categoryId} = useParams()

        useEffect(()=>{

            

            const productosRef = collection(db, "Productos")
            const q = categoryId ?  query(productosRef, where("categoria","==",categoryId)): productosRef

            getDocs(q)
                .then((resp)=>{
                    
                    const Newitems = (resp.docs.map((doc)=>{
                        return{
                            id: doc.id,
                            ...doc.data()
                        }
                    }))
                    setitems(Newitems)                    
                })
                
            

        },[categoryId])

    
    return(
        <div className='main__container'>
            
            
            <ItemList items={items}/>
                
                    
            
        </div>
        
    )
}