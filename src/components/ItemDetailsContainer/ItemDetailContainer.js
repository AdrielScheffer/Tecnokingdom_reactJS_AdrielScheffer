import './ItemDetailContainer.css'
import spiner from '../ItemListContainer/images/spiner.gif'
import { useEffect, useState } from 'react'
import pedirDatos from '../../Data/PedirDatos.js'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'



export const ItemDetailContainer = ()=>{

    const [item,setItem]= useState(null)
    const [loading, setloading] = useState(true)
    
    const {itemId} = useParams()
    console.log(itemId)
    console.log(item)

        useEffect(()=>{

            setloading(true)

            pedirDatos()
                
                .then((resp)=>{
                    
                    setItem(resp.find((item)=> item.id === Number(itemId)))
                })
                .catch((error)=>{
                    console.log("ERROR: ", error)
                    
                    
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
                    <ItemDetail item = {item}> <ItemCount stock={10}/> </ItemDetail>
                    
                    
                
                </>
                
                    
            }
        </div>
        
        
    )

}