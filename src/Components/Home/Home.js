// import Company from '../Company/Company';
import Contact from '../Contact/Contact';
import Regis from '../Regis/Regis';
import { Link, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Categories from '../Categories/Categories';
import './Home.css';
import Home1 from '../Home1/Home1';
import Serach from '../Search/Search';
import Cart from '../Cart/Cart';
import Details from '../DetailPage/Details';
import Headphones from '../Headphones/Headphones';
import Earbuds from '../Earbuds/Earbuds';
import Smartphones from '../Smartphones/Smartphones';
import Watches from '../Watches/Watches';
import About from '../About/About';
import Location from '../Location/Location';
import Carousel from '../Carousel/Carousel';


function Home() {
    return (
        <div>
            <center>
                {/* <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/company'>Company</Link> */}
            </center>
            <Header />
            <br></br>
            <Carousel />
            <Routes>
                <Route path='/' element={<Home1 />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/categories' element={<Categories />}></Route>
                <Route path='/search' element={<Serach />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/detail/:id' element={<Details />}></Route>
                <Route path='/headphones' element={<Headphones />}></Route>
                <Route path='/earbuds' element={<Earbuds />}></Route>
                <Route path='/smartphones' element={<Smartphones />}></Route>
                <Route path='/watches' element={<Watches />}></Route>
                <Route path='/loc' element={<Location />}></Route>
                {/* <Route path='/contact' element={<Contact/>}></Route> */}
                {/* <Route path='/company' element={<Company/>}></Route>          */}
            </Routes>
            <br></br>
            <br></br>
            <Contact />
            <div>
            </div>
        </div>
    )
}

export default Home;