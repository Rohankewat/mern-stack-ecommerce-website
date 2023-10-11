import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import './Headphones.css';

function Watches() {
    const [item, setItem] = useState([])
    useEffect(() => {
        axios.get("http://localhost:6040/book/watch").then(
            resp => setItem(resp.data)
        ).catch(
            err => alert(err)
        )
    }, [])
    return (
        <div>
            <div className="container">
                <h3>Watches</h3>
                <div className="row justify-content-center">
                    {
                        item.map(obj =>
                            <div className="col-lg-3 col-md-4  cls_head_1">
                                <Link to={"/detail/" + obj.id} style={{ textDecoration: "none" }}>
                                    <center>
                                        <img src={obj ? obj.url : ""} style={{ width: "100px" }} className='img_head_1'></img>
                                        <p className="head_p1">{obj ? obj.name : ""}</p>
                                        <p className="head_p2">&#8377;{obj ? obj.price : ""}</p>
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

export default Watches;