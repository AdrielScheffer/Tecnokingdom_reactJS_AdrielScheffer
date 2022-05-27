import { useState } from "react"
import './ItemCount.css'

export const ItemCount= ({stock})=>{

 
 let [contador, setContador] = useState(1)

 const incrementar = ()=>{
    if(contador<stock){
        setContador( contador + 1)
        console.log(contador)
    }
    


}
    const decrementar = ()=>{
        if(contador>1){
            setContador( contador - 1)
            console.log(contador)
        }
        


    }
return(
    <div className="main__div">
        <button onClick={incrementar} className="main__div-button">+</button>
        <span className="main__div-span">{contador}</span>
        <button onClick={decrementar} className="main__div-button">-</button>
    </div>


)


}