import { Link } from 'react-router-dom';
import Popular from '../Popular/Popular';
function Categories() {
    return (
        <div>
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
            <Popular />
        </div>
    )
}

export default Categories;