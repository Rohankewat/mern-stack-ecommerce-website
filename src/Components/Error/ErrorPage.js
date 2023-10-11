import { useState } from "react";
import Home from "../Home/Home";
import ReactDOM from "react-dom/client";
import Regis from "../Regis/Regis";
import LoginPage from "../Login/LoginPage";
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import './ErrorPage.css';

function ErrorPage() {
    const [uid, setUid] = useState();
    const [upass, setUpass] = useState();
    const [uemail, setUemail] = useState();
    const [obj, setObj] = useState({});
    const [arr, setArr] = useState([]);
    var handleUid = (evt) => {
        setUid(evt.target.value);
    }

    var handleUpass = (evt) => {
        setUpass(evt.target.value);
    }

    var handleUemail = (evt) => {
        setUemail(evt.target.value);
    }

    var handleSaveData = (evt) => {
        evt.preventDefault();
        var new_obj = {
            uid: uid,
            upass: upass,
            uemail: uemail
        }
        setObj(new_obj);
        console.log(obj)

        fetch("http://localhost:1234/show").then(
            res => res.json()
        ).then(
            data => setArr(data)
        )
        var c = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].uid == uid) {
                fetch("http://localhost:1234/update", {
                    method: 'POST',
                    body: JSON.stringify(obj),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                alert("Data updated sucessfully");
                var root = ReactDOM.createRoot(document.getElementById("root"));
                setUid('');
                setUemail('');
                setUpass('');
                root.render(
                    <BrowserRouter>
                        <Home />
                    </BrowserRouter>
                )
            }
            else {
                c++;
                if (c == arr.length) {
                    // alert("can not update data becuase user id " + uid + " is not found please do regisration first");
                    // var root = ReactDOM.createRoot(document.getElementById("root"));
                    // root.render(
                    //     <BrowserRouter>
                    //         <Regis></Regis>

                    //     </BrowserRouter>
                    // )
                    document.getElementById('three').innerHTML = 'invalid user id please referesh the page and enter existing user id or go to registration'
                    setUid('');
                    setUpass('');
                    setUemail('');

                }
            }
        }
    }
    return (
        <div className="error_main">
            <p id='three'></p>
            <div className="error_main1">
                <center>
                    <div className="erro_main_3">
                        <h1 className="h1">set new password and new Email</h1>
                        <form onSubmit={handleSaveData}>
                            <input onChange={handleUid} type='number' placeholder="enter your id" required value={uid}></input>
                            <i className="fa-solid fa-user"></i>
                            <br></br>
                            <input onChange={handleUpass} type='password' placeholder="set new password" required value={upass}></input>
                            <i className="fa-solid fa-lock"></i>
                            <br></br>
                            <input onChange={handleUemail} type='email' placeholder="set new email" required value={uemail}></input>
                            <i className="fa-solid fa-envelope"></i>
                            <br></br>
                            <button type="submit">double click for update</button>
                        </form>
                        <br></br>
                        <div className="link2">
                            <Link to='/' style={{ color: 'white' }}>Registration</Link>
                        </div>
                    </div>
                </center>
            </div>
        </div>
    )
}

export default ErrorPage;