
import './ItemCount.css'



export const ItemCount= ({stock, counter ,setCounter,handleAgregar})=>{

    
 

 const incrementar = ()=>{
    if(counter<stock){
        setCounter( counter + 1)
        
    }

}
    const decrementar = ()=>{
        if(counter>1){
            setCounter( counter - 1)
            
        }
        


    }

    

return(
    <>
    <span><b>cantidad de unidades</b></span>
    <div className="main__div">
        
        <button onClick={incrementar} className="main__div-button">+</button>
        <span className="main__div-span">{counter}</span>
        <button onClick={decrementar} className="main__div-button">-</button>
        <div className="button__container" id="button">
            <button className="button"onClick={handleAgregar}>Agregar al carrito</button>
        </div>
        
        
                    

    </div>
    
    
    </>


)


}


