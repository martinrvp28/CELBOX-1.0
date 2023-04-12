import './App.css';
import Categories from './Components/Categories/Categories';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Price from './Components/Price/Price'
import ListPhones from './Components/Phones/ListPhones';

import './App.css';

function App() {
  return(

    <>
    <BrowserRouter>

      <NavBar/>
      <Categories/>
      
        <Routes>

          <Route exact path='/' element={<ListPhones/>}/>
          <Route path='/celulares' element={<ListPhones/>}/>
          <Route exact path='/accesorios' element={<Price/>}/>
          <Route exact path='/ofertas' element={<Price/>}/>
          <Route exact path='/plan-recambio' element={<Price/>}/>

        </Routes>
    </BrowserRouter>

    </>
  )

}
export default App;
