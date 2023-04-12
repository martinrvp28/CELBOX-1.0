import IphonesSell from "./PhonesInfo";
import PhoneInfoCard from "./PhoneInfoCard";


const ListPhones = () => {

    
return(
        <div className="listPhones">
            {IphonesSell.map(iphone => <PhoneInfoCard key={iphone.id} model={iphone.model} img={iphone.img} price={iphone.price} cap={iphone.cap}/>  )}
        </div>

)


}


export default ListPhones