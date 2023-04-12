import './NavBar.css'
import {BrowserRouter,Link} from 'react-router-dom'

const NavBar = () => {

    
    
    return(

        <div className='NavBar'>

    
            <Link to='/'>
            <img src="./img/logo.svg" alt="image" ></img>
            </Link>
            <h1>CELBOX</h1>

        </div>
    )
}

export default NavBar;