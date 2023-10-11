import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './Popular.css';

function Popular() {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get("http://localhost:6040/book/popular").then(
            res => setItems(res.data)
        ).catch(
            err => alert(err)
        )
    }, [])
    return (
        <div>
            <div className="container">
                <h2 className="h_21">Popular Products</h2>
                <div className="row row_1 justify-content-center">
                    {
                        items.map(obj =>

                            <div className="col-lg-2  col_1 col-md-3 col-sm-3">
                                <Link to={"/detail/" + obj.id} style={{ textDecoration: "none" }}>
                                    <center>
                                        <img src={obj ? obj.url : ""} style={{ width: "130px", height: "130px" }} className="img_2"></img>
                                        <p className="sp3">{obj ? obj.name : ""}</p>
                                        <p className="sp4">&#8377;{obj.price}</p>
                                    </center>
                                </Link>
                            </div>


                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default Popular