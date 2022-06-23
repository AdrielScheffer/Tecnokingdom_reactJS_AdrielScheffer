import './ItemListContainer.css'
import spiner from './images/spiner.gif'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList.js'
import { useParams } from 'react-router-dom'
import { collection, getDocs,query,where } from 'firebase/firestore'
import { db } from '../../firebase/config'




export const ItemListContainer = ()=>{

    const [items,setitems]= useState([])
    const [loading, setloading] = useState(true)
    const {categoryId} = useParams()

        useEffect(()=>{

            setloading(true)

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
                .finally(()=>{
                    setloading(false)
                })
            

        },[categoryId])

    
    return(
        <div className='main__container'>
            {
                loading
                ? <img src={spiner} alt="spiner" ></img>
            
                : <ItemList items={items}/>
                
                    
            }
        </div>
        
    )
}