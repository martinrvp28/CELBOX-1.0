import SellYourPhone from "../SellYourPhone/SellYourPhone"
import Quiz from "../SellYourPhone/Quiz/Quiz"
import { useState, useEffect } from "react";



const Price = () => {


    const [showComponent, setShowComponent] = useState(true);

    const [phoneModel, setPhoneModel] = useState('');

    useEffect(() => {
        setShowComponent(true);
    }, []);
    

    const selectedModel = (model) => {
        
        setPhoneModel(model);
        {console.log(model)}
        setShowComponent(false);

    };



    return(

        <>
            {showComponent ?  <SellYourPhone selectYourModel={selectedModel}/> : <Quiz model={phoneModel}/>}
        </>

    )


}

export default Price;