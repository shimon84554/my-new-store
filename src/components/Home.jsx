import LogoMain from '../assets/LogoMain.png'
import { Route, Routes ,Link} from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>welcome !</h1>
            <img src={LogoMain} alt="main logo" id='imageLogo' />
        </div>
    )
}
function Paths() {
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
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Products' element={<Products />} />
                <Route path='/Cart' element={<Cart />} />
                <Route path='/Login' element={<Login />} />
            </Routes>
        </div>
    )
}



export default Paths;