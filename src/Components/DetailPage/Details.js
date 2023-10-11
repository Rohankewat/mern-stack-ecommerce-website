import { useActionData, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./Details.css"
import { Link, BrowserRouter } from 'react-router-dom';
import Cart from "../Cart/Cart";
import ReactDOM from "react-dom/client";


function Details() {
    const { id } = useParams();
    const [item, setBitem] = useState([]);
    const [category, setCategory] = useState()
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [qty, setQty] = useState()
    const [url, setUrl] = useState();

    var f2 = () => {
        var root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(<Cart
            id={id}
            name={name}
            price={price}
            qty={qty}
            url={url}
        />)
    }

    useEffect(() => {
        for (var i = 0; i < item.length; i++) {
            if (item[i].id == id) {
                setName(item[i].name);
                setPrice(item[i].price);
                setQty(item[i].qty);
                setUrl(item[i].url);
            }
        }
    })
    // console.log(id);
    // console.log(name);
    // console.log(qty);
    // console.log(price);
    useEffect(() => {
        axios.get("http://localhost:6040/book/details").then(
            res => setBitem(res.data)
        ).catch(
            err => alert(err)
        )
    }, [])

    useEffect(() => {
        item.map(obj =>
            obj.id == parseInt(id)
                ?

                setCategory(obj.category)
                :
                ""
        )
    })
    return (
        <div>
            <div className="container-fluid">
                {
                    item.map(obj =>
                        obj.id == id ?

                            <div className="row det_row">
                                <div className='col-lg-1 col-sm-1'></div>
                                <div className='col-lg-4 col-sm-4 cls1'>
                                    <center>
                                        <img className="det_img" src={obj ? obj.url : ""}></img>
                                    </center>
                                </div>
                                <div className='col-lg-1 col-sm-1'></div>
                                <div className='col-lg-6 col-sm-6'>
                                    <div className='row'>
                                        <div className='col-lg-12 col-md-12'>
                                            <center>
                                                <p className='det_p1'>{obj ? obj.name : ""}</p>
                                            </center>
                                        </div>
                                        <div className='col-lg-12 col-md-12'>
                                            <center>
                                                <p className='det_p2'>&#8377;{obj ? obj.price : ""}</p>
                                            </center>
                                        </div>
                                        <div className='col-lg-12 col-md-12'>
                                            <center>
                                                <p className='det_p3'>Category : {obj ? obj.category : ""}</p>
                                            </center>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <p className="det_disc">{obj ? obj.disc : ""}</p>
                                        </div>
                                        <div className='col-lg-12 col-md-12'>
                                            <center>
                                                <button className='btn btn-outline-warning' onClick={f2}>Add to cart</button>
                                            </center>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            :
                            ""
                        //  </div>
                    )
                }
                <br></br>
                <br></br>
                <div className="container-fluid">
                    <h4>Related Products</h4>
                    <div className="row">
                        {
                            item.map(obj =>
                                obj.category == category ?

                                    <div className="col-lg-2 card_box col-sm-3  col-md-2">
                                        <Link to={"/detail/" + obj.id} style={{ textDecoration: "none" }}>
                                            <center>
                                                <img className="box_img" src={obj ? obj.url : ""} style={{ width: "100px" }}></img>
                                                <p className="box_p1">{obj ? obj.name : ""}</p>
                                                <p className="box_p2">&#8377;{obj ? obj.price : ""}</p>
                                            </center>
                                        </Link>
                                    </div>
                                    :
                                    ""
                            )
                        }
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Details;