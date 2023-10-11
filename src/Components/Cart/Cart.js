import { Link, Routes, Route, useActionData } from "react-router-dom";
import Header from "../Header/Header";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "../Home/Home";
import "./Cart.css";
import axios from "axios";

function Cart(props) {
    const [arr, setArr] = useState([])
    const [id, setId] = useState(props.id);
    const [price, setPrice] = useState(props.price);
    const [name, setName] = useState(props.name);
    const [qty, setQty] = useState(props.qty);
    const [url, setUrl] = useState(props.url);
    const [item, setItem] = useState([]);
    var data = 0;
    var f6 = () => {
        axios.get("http://localhost:6040/book/showcart").then(
            res => setItem(res.data)
        ).catch(
            err => alert(err)
        )
    }

    setTimeout(() => {
        axios.get("http://localhost:6040/book/showcart").then(
            res => setItem(res.data)
        ).catch(
            err => alert(err)
        )
    }, 500);
    var f3 = () => {
        var root = ReactDOM.createRoot(document.getElementById("root"))
        root.render(
            <BrowserRouter>
                <Home></Home>
            </BrowserRouter>
        )
    }

    useEffect(() => {
        axios.get("http://localhost:6040/book/showcart").then(
            res => setItem(res.data)
        ).catch(
            err => alert(err)
        )
    }, [])


    useEffect(() => {
        if (id != undefined || name != undefined || price != undefined || qty != undefined) {

            axios.get("http://localhost:6040/book/addtocart?" + `id=${id}&&name=${name}&&price=${price}&&qty=${qty}&&url=${url}`).then(
                res => ''
            ).catch(
                err => alert(err)
            )
            f6()
        }
    }, [])

    // if (id != undefined || name != undefined || price != undefined || qty != undefined) {

    //     axios.get("http://localhost:6040/book/addtocart?" + `id=${id}&&name=${name}&&price=${price}&&qty=${qty}&&url=${url}`).then(
    //         res => alert("Data Saved")
    //     ).catch(
    //         err => alert(err)
    //     )

    // }
    return (
        <div>


            <div className="container">
                <div className="row">
                    <div className="col-sm-11">
                        <center>
                            <h4>Shopping cart</h4>
                        </center>
                    </div>
                    <div className="col-sm-1">
                        <center>
                            <button onClick={f3} className="cart_btn_6"><i class="fa-solid fa-xmark"></i> close</button>
                        </center>
                    </div>
                </div>
            </div>
            <div className="container">
                {
                    item.map(data =>
                        <div className="row  r_cart">
                            <div className="col-lg-3 cls_cart_4">
                                <center>
                                    <img src={data ? data.url : ""} style={{ width: "70px", height: "70px" }} className="img-6"></img>
                                </center>
                            </div>
                            <div className="col-lg-9  cls10">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 cls-ct1"><center> <p className="cart-p1">{data ? data.name : ""}</p> </center> </div>
                                    <div className="col-lg-3 col-md-3 cls-ct1"><center><p className="cart-p1">&#8377;{data ? data.price * data.qty : ""}</p></center></div>
                                    <div className="col-lg-3 col-md-3 cls-ct1"><center>

                                        <button className="btn btn-outline-warning btn-extra1" onClick={() => {
                                            axios.get("http://localhost:6040/book/deletecart/" + data.id).then(
                                                res => ''
                                            ).catch(
                                                err => alert(err)
                                            )
                                            f6()
                                        }
                                        }>
                                            Remove item

                                        </button>
                                    </center>
                                    </div>
                                    <div className="col-lg-3 cls-ct1 col-md-3">

                                        <center>

                                            <button className="btn btn-outline-warning btn5"
                                                onClick={() => {
                                                    axios.get("http://localhost:6040/book/updatecart1/" + data.id).then(
                                                        res => ''
                                                    ).catch(
                                                        err => alert(err)
                                                    )
                                                    f6()
                                                }}
                                            ><span className="sp5">+</span></button><span className="quanty">
                                                {data ? data.qty : ""}</span><button className="btn btn-outline-warning btn6" onClick={() => {
                                                    axios.get("http://localhost:6040/book/updatecart2/" + data.id).then(
                                                        res => ''
                                                    ).catch(
                                                        err => ''
                                                    )
                                                    f6()
                                                }}
                                                ><span className="sp5">-</span></button>

                                        </center>

                                    </div>
                                </div>
                            </div>

                        </div>

                    )}      </div>

            <br></br>

            <div className="container">
                <div className="row">

                    <div className="col-lg-12 cls-amt">
                        {

                            item.map(obj => {
                                data = data + (obj.price) * (obj.qty)
                            })
                        }
                        <center>
                            <h4 className="amt">Total Amount    &#8377;{data}</h4> </center>
                    </div>
                </div>

            </div>

        </div>
    )
}



export default Cart;