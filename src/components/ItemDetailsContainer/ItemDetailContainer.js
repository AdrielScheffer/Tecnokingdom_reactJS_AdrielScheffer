import './ItemDetailContainer.css'
import spiner from '../ItemListContainer/images/spiner.gif'
import { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'



export const ItemDetailContainer = ()=>{

    const [item,setItem]= useState(null)
    const [loading, setloading] = useState(true)
    
    const {itemId} = useParams()
    

        useEffect(()=>{

            setloading(true)

            const docRef = doc(db, "Productos", itemId)

            getDoc(docRef)
                .then((doc)=>{
                    setItem({id:doc.id, ...doc.data()})

                })
                .finally(()=>{
                    setloading(false)

                })


        },[])

    
    return(
        
        <div className='main__detail-container'>
            {
                loading
                ? <img src={spiner} alt="spiner" className='spiner'></img>
            
                : <>
                    <ItemDetail item = {item}>  </ItemDetail>
                    
                    
                
                </>
                
                    
            }
        </div>
        
        
    )

}