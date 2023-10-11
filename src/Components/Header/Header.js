import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';
function Header() {
    const [value, setValue] = useState();
    var f1 = (event) => {
        event.preventDefault();
        setValue(event.target.value);
    }

    return (
        <div>
            <div className="container-fluid" style={{ backgroundColor: "#171717", color: 'white' }}>

                <div className="row bg-warning">
                    <div className="col-md-1" style={{ textAlign: "center", backgroundColor: "#171717" }}>

                        <div className='one' >
                            <Link to='/' style={{ textDecoration: "none" }}><p className='p1'>Home</p></Link>
                        </div>

                    </div>

                    <div className="col-md-1" style={{ textAlign: "center", backgroundColor: "#171717" }}>

                        <div className='one'>
                            <Link to='/about' style={{ textDecoration: "none" }}><p className='p1'>Contact</p>
                            </Link>
                        </div>

                    </div>

                    <div className="col-md-1" style={{ textAlign: "center", backgroundColor: "#171717" }}>

                        <div className='one'>
                            <Link to='/categories' style={{ textDecoration: "none" }}><p className='p1' >Categories</p></Link>
                        </div>

                    </div>

                    <div className="col-md-6" style={{ textAlign: "center", backgroundColor: "#171717" }}>

                        <div className='img_1'>
                            <form method='post' action={`https://www.bing.com/search?pglt=41&q=${value}`} target="_blank">
                                <input type='text' onChange={f1} className='inpt1' placeholder='search anything'></input>
                                <button className='header_btn'><i class="fa-solid fa-magnifying-glass"></i></button>
                            </form>

                        </div>

                    </div>

                    <div className="col-md-1 " style={{ textAlign: "center", backgroundColor: "#171717" }}>

                        <Link to='/search' style={{ textDecoration: "none" }}><p className='p1'><i class="fa-solid fa-magnifying-glass cls"></i></p></Link>

                    </div>

                    <div className="col-md-1" style={{ backgroundColor: "#171717", textAlign: "center" }}>
                        <div className='one'>
                            <Link to='/loc' style={{ textDecoration: "none" }}><p className='p1'>Address</p></Link>
                        </div>
                    </div>

                    <div className="col-md-1" style={{ backgroundColor: "#171717", textAlign: "center" }}>
                        <Link to='/cart' style={{ textDecoration: "none" }}><p className='p1'><i class="fa-solid fa-cart-shopping"></i></p></Link>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header;