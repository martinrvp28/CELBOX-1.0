import './PhoneInfoCard.css'

const PhoneInfoCard = ({model, img, price, cap}) => {

    return (

        <div className='cardContainer'>


            <img src={img} alt=''></img>
            <h1>{model}</h1>   
            <h2>USD {price}</h2>

            <div className='capacityContainer'>

            {cap.map(capacity =><button>{capacity}</button>)}

            </div>


        </div>
    )

}

export default PhoneInfoCard;