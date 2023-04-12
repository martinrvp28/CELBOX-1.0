import {Link} from 'react-router-dom';
import './Categories.css'

const Categories = ({ onMostrarPlanRecambio }) => {

    return(
        <div className='catBar'>
            
            <div className='catList'>

                <Link className='itemCat' to='/celulares'>
                    <img src='./img/icon-mobile.svg' alt=''></img>
                    <button>CELULARES</button>
                </Link>

                <Link className='itemCat' to='/accesorios'>
                    <img src='./img/icon-headphones.svg' alt=''></img>
                    <button>ACCESORIOS</button>
                </Link>

                <Link className='itemCat' to='/ofertas'>
                    <img src='./img/icono-verify.svg' alt=''></img>
                    <button>OFERTAS</button>
                </Link>

                <Link to='/plan-recambio' className='itemCat'>
                    <img src='./img/icon-refresh.svg' alt=''></img>
                    <button onClick={onMostrarPlanRecambio}>PLAN RECAMBIO</button>
                </Link>

            </div>

            

            <img className='cartImg' src='./img/cart.svg'></img>

        </div>
        
    )

}

export default Categories;