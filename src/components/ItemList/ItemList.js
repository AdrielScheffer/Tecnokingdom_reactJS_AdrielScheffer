import Item from '../Item/Item.js'
 
const ItemList = ({items})=>{

    return(
        <div className='main__container-divs'>
            {

                items.map((item)=> <Item key={item.id} item={item}/>)
                    
            }   
        </div>
    )

}

export default ItemList