import CardPhones from './CardPhones'
import './SellYourPhone.css'

const CardPhoneList = ({products}) => {

    return(

        <div className='ListGroup'>

        {products.map(prod => <CardPhones key={prod.id} phone={prod.product} img={prod.img} /> )}
        
        </div>
    )
}

export default CardPhoneList;