import './ItemListContainer.css'
import spiner from './images/spiner.gif'
import { useEffect, useState } from 'react'
import pedirDatos from '../../Data/PedirDatos.js'
import ItemList from '../ItemList/ItemList.js'
import { useParams } from 'react-router-dom'



export const ItemListContainer = ()=>{

    const [items,setitems]= useState([])
    const [loading, setloading] = useState(true)
    const {categoryId} = useParams()

        useEffect(()=>{

            setloading(true)

            pedirDatos()
                
                .then((resp)=>{
                    if (!categoryId){
                        setitems(resp)}
                    else{
                        setitems(resp.filter((item) => item.categoria == categoryId))
                    }
                    
                    
                    
                })
                .catch((error)=>{
                    console.log("ERROR: ", error)
                    
                    
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