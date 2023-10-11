import { useEffect, useState } from 'react';
import axios from 'axios'
import './Search.css';
import { Link } from 'react-router-dom';

function Serach() {
    const [val, setVal] = useState("");
    const [item, setItem] = useState([])
    var f1 = (evt) => {
        setVal(evt.target.value.toUpperCase());
    }
    // console.log(val);

    useEffect(() => {
        axios.get("http://localhost:6040/book/details").then(
            res => setItem(res.data)
        ).catch(
            err => alert(err)
        )
    }, [])
    return (
        <div className='container'>
            <center>
                <input onChange={f1} className='sea_inpt' placeholder='search products'></input>
            </center>
            {/* <div className='row'> */}

            {
                item.map(obj =>
                    (obj.category.toUpperCase().slice(0, 3) == val || obj.category.toUpperCase() == val || obj.category.toUpperCase().slice(0, 1) == val) ?
                        <div className='row cls_r1'>
                            <div className='col-lg-2 col-md-2 cls_sea'>
                                <Link to={"/detail/" + obj.id} style={{ textDecoration: "none" }}>
                                    <center>
                                        <img src={obj ? obj.url : ""} style={{ width: "80px" }} className='search_image'></img>
                                    </center>
                                </Link>
                            </div>
                            <div className='col-lg-10 col-md-10 cls_sea'>
                                <Link to={"/detail/" + obj.id} style={{ textDecoration: "none" }}>
                                    <p className='searc_p1'>{obj ? obj.name : ""} | {obj ? obj.disc.slice(0, 150) : ""}</p>
                                    <p className='searc_p2'>&#8377;{obj ? obj.price : ""} | Rating {obj ? obj.rating : ""}
                                    </p>
                                </Link>
                            </div>
                        </div>
                        : ""
                )
            }
        </div>
        // </div>
    )
}

export default Serach;