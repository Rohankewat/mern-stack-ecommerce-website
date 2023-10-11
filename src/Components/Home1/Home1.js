import Popular from '../Popular/Popular'
import './Home1.css';
import { Link } from 'react-router-dom';

function Home1() {
    var readMore = () => {
        document.getElementById("p2").innerHTML = "The sales staff of a company approach and contact those people who are interested in buying the product or service that you’re offering.They may have contacted you on social media, liked your offer, downloaded the information, or visited our website."
    }

    var readLess = () => {
        document.getElementById("p2").innerHTML = "The sales staff of a company approach and contact those people who are interested."
    }
    return (
        <div>
            <div className="container-fluid col home_one">
                <img className='main_img_2' src={require('../images/best_img.png')}></img>
                <center>
                    <h1 className='home_h1'>SALE</h1>
                    <div className="content">
                        <div className='container-fluid  col-md-3' >
                            <p id="p2" >The sales staff of a company approach and contact those people who are interested</p>
                        </div>
                        <div className="row">
                            <div className='col-md-12'>
                                <button className='btn btn-outline-primary'
                                    onClick={readMore}>Read more</button></div>
                            <div className='col-md-12'>
                                <button className='btn btn-outline-secondary' onClick={readLess}>Read less</button></div>
                        </div>
                    </div>
                </center>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-2 col-md-2'></div>
                    <div className='col-lg-2 col-md-2 col-sm-6'>
                        <center>
                            <Link to='/headphones'>
                                <img src={require("../images/head_phones.webp")} style={{ width: "100px" }} className='img_cat'></img>
                            </Link>
                        </center>
                    </div>
                    <div className='col-lg-2  col-md-2 col-sm-6'>
                        <center>
                            <Link to='/earbuds'><img src={require("../images/ear_buds.jpg")} style={{ width: "100px" }} className='img_cat'></img></Link>
                        </center>
                    </div>
                    <div className='col-lg-2  col-md-2 col-sm-6'>
                        <center>
                            <Link to='/smartphones'><img src={require("../images/mobile.jpg")} style={{ width: "100px" }} className='img_cat'></img></Link>
                        </center>
                    </div>
                    <div className='col-lg-2  col-md-2 col-sm-6'>
                        <center>
                            <Link to='/watches'><img src={require("../images/watch.jpg")} style={{ width: "100px" }} className='img_cat'></img></Link>

                        </center>
                    </div>
                    <div className='col-lg-2 col-md-2'></div>
                </div>
            </div>
            <div>
                <Popular />
            </div>
        </div>
    )
}

export default Home1;