import './ItemListContainer.css'
import spiner from './images/spiner.gif'
import { useEffect, useState } from 'react'
import pedirDatos from '../../Data/PedirDatos.js'
import ItemList from '../ItemList/ItemList.js'



export const ItemListContainer = ()=>{

    const [items,setitems]= useState([])
    const [loading, setloading] = useState(true)

        useEffect(()=>{

            setloading(true)

            pedirDatos()
                .then((resp)=>{
                    setitems(resp)
                    
                })
                .catch((error)=>{
                    console.log("ERROR: ", error)
                    
                    
                })
                .finally(()=>{
                    setloading(false)
                })

        },[])

    
    return(
        <div className='main__container'>
            {
                loading
                ? <img src={spiner} alt="spiner"></img>
            
                : <ItemList items={items}/>
                
                    
            }
        </div>
        
    )
}