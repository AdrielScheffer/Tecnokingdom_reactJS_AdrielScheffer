import './ItemListContainer.css'
import image from './images/rx6600.jpg'

export const ItemListContainer = ({props})=>{

    return(
        <div className="product__div">
            
            <section>
                <h3>{props.name}</h3>
                <div className='image__container'>
                    <img src={image} className='image_test'></img>
                </div>
                <p className="product__div-description">{props.description}</p>
            </section>



        </div>
    )
}