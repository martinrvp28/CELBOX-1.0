import './SellYourPhone.css'



const CardPhones = ({click,id, phone, img}) => {


    return (

        <button onClick={() => click(phone)} className='CardItem'>

            <img src={img} alt=''></img>
            <h2>{phone}</h2>

        </button>
    )

}

export default CardPhones;