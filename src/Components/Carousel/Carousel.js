import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { useEffect,useState } from "react";
import "./Carousel.css";

function Carousel1() {

    const [car,setCar] = useState([]);
    console.log(car)

    useEffect(()=> {
        axios.get("http://localhost:6040/book/details").then(
            resp => setCar(resp.data)
        ).catch(
            err => alert(err)
        )
    },[])
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max:4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 498 },
            items: 2
        },
        mobile: {
            breakpoint: { max:498, min: 0 },
            items: 1
        },
        mobile:{
            breakpoint:{max:332, min:0},
                items:0
            },
        

    };
    return (
        <div className="car-main">
            {/* <h1>Sliding Animation</h1> */}
            <Carousel 
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            arrows={false}
            >
                    {
                       
                        car.map(obj => 
                                <div className="mul-car1">
                                    <center>
                            <img src={obj ? obj.url : ""} height={100} className="cming"></img>
                            </center>
                            </div>
                            )
                           
                    }
            </Carousel>;
        </div>
    )
}

export default Carousel1;