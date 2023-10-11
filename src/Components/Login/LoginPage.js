import { useState } from 'react';
import Home from '../Home/Home';
import ErrorPage from '../Error/ErrorPage';
import ReactDOM from 'react-dom/client';
import { Link, Route, Routes, BrowserRouter, createBrowserRouter } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
    const [uid, setUid] = useState();
    const [upass, setUpass] = useState();
    const [uemail, setUemail] = useState();
    const [obj, setObj] = useState();
    const [arr, setArr] = useState([]);


    var handleUid = (evt) => {
        setUid(evt.target.value)
    }

    var handleUpass = (evt) => {
        setUpass(evt.target.value)
    }

    var handleUemail = (evt) => {
        setUemail(evt.target.value)
    }

    var handleSaveData = (evt) => {
        evt.preventDefault();
        var new_obj = {
            uid: uid,
            upass: upass,
            uemail: uemail
        }
        setObj(new_obj);
        fetch("http://localhost:1234/show").then(
            res => res.json()
        ).then(
            data => setArr(data)
        )
        console.log(arr);
        var c = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].uid == uid && arr[i].upass == upass && arr[i].uemail == uemail) {
                alert('Logged in Sucessfull')
                var root = ReactDOM.createRoot(document.getElementById("root"));
                root.render(
                    <BrowserRouter>
                        <Home></Home>
                    </BrowserRouter>
                )
            }
            else {
                c++;
                if (c == arr.length) {
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i].uid == uid) {
                            document.getElementById("two").innerHTML = "Login Failed"
                            var root = ReactDOM.createRoot(document.getElementById("root"))
                            root.render(
                                <BrowserRouter>
                                    <ErrorPage></ErrorPage>
                                </BrowserRouter>
                            )

                        }
                        else {
                            document.getElementById("two").innerHTML = "Invalid user id"

                        }
                    }


                }

            }
        }
        // fetch("http://localhost:1234/duplicate", {
        //     method: 'POST',
        //     body: JSON.stringify(obj),
        //     headers: {
        //         'Content-type': 'application/json'
        //     }
        // })

    }

    return (
        <div className='login_main'>
            <p id='two'></p>
            <div className='login_main2'>
                <center>
                    <h1 className='h1'>Login</h1>
                    <form onSubmit={handleSaveData}>
                        <input type="number" placeholder="enter user id" value={uid} onChange={handleUid} required></input>
                        <i className="fa-solid fa-user"></i>
                        <br></br>
                        <input type="password" placeholder="enter user pass" value={upass} onChange={handleUpass} required></input>
                        <i className="fa-solid fa-lock"></i>
                        <br></br>
                        <input type="email" placeholder="enter user email" value={uemail} onChange={handleUemail} required></input>
                        <i className="fa-solid fa-envelope"></i>
                        <br></br>
                        <button type='submit'>dobule click for Login</button>
                    </form>
                    <br></br>
                    <div className='link1'>
                        <Link to='/error' style={{ color: 'white' }}>forgot email password</Link>
                    </div>
                </center>
            </div>
        </div>
    )
}

export default LoginPage;