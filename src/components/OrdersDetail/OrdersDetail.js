import Order from "../Order/Order.js"

const OrdersDetail = ({order})=>{

    return(
        <div className='main__container-divs'>
            
            {

                order.map((data)=> <Order key={data.id} item={data}/>)
                    
            }   
        </div>
    )

}

export default OrdersDetail