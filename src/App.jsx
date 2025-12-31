import {Route,Routes,Link} from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Cart from './components/cart';
import Login from './components/Login';


function App() {
return (
  <div id='contener-nav'>
  <nav id='nav'>
    <Link to="/">home </Link>
    <Link to="/About">about </Link>
    <Link to="/Products">Products </Link>
    <Link to="/Cart">Cart </Link>
    <Link to="/Login">Login </Link>
  </nav>

  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/About' element={<About/>}/>
    <Route path='/Products' element={<Products/>}/>
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/Login' element={<Login/>}/>
  </Routes>
  </div>
)
  
}

export default App
