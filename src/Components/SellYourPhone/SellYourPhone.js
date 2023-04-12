import {useEffect, useState} from 'react'
import CardPhoneList from "./CardPhoneList";
import {getProducts} from '../../asyncmock'
import CardPhones from './CardPhones';
import { Iphones } from '../../asyncmock';

const SellYourPhone = ({selectYourModel}) => {

    return(
           <div className="mainList">

            <h1>Selecciona el modelo de tu Celular</h1>
          
            <div className='ListGroup'>

                {Iphones.map(prod => <CardPhones click={selectYourModel} key={prod.id} phone={prod.product} img={prod.img} /> )}
        
            </div>

        </div>
    )

}

export default SellYourPhone;