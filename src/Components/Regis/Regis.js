import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from '../Login/LoginPage';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import './Regis.css';

function Regis() {
    const [uid, setUid] = useState();
    const [upass, setUpass] = useState();
    const [cpass, setCpass] = useState();
    const [uemail, setUemail] = useState();
    const [obj, setObj] = useState({});
    const [arr, setArr] = useState([]);

    var handleUid = (evt) => {
        setUid(evt.target.value);
    }

    var handleUpass = (evt) => {
        setUpass(evt.target.value);
    }

    var handleCpass = (evt) => {
        setCpass(evt.target.value);
    }

    var handleUemail = (evt) => {
        setUemail(evt.target.value);
    }


    var handleSaveData = (evt) => {
        evt.preventDefault();
        if (cpass != upass) {
            setCpass("");
            setUpass("");
            document.getElementById("cpass").innerHTML = 'password and confirm password not match'
        }
        else {
            var new_obj = {
                uid: uid,
                upass: upass,
                uemail: uemail
            }
            setObj(new_obj)
            // console.log(obj);
            fetch("http://localhost:1234/show").then(
                res => res.json()
            ).then(
                data => setArr(data)
            )
            var c = 0;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].uid != uid) {
                    c++;
                    if (c == arr.length) {
                        fetch("http://localhost:1234/save", {
                            method: 'POST',
                            body: JSON.stringify(obj),
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })

                        setUid('');
                        setUemail('');
                        setUpass('');
                        alert('you are registered sucesfully');
                        var root = ReactDOM.createRoot(document.getElementById("root"));
                        root.render(
                            <BrowserRouter>
                                <LoginPage></LoginPage>
                            </BrowserRouter>
                        )

                    }
                }
                else {
                    document.getElementById('one').innerHTML = 'you are already registered  or please referesh the page and enter new data for new registration';
                    setUid('');
                    setUemail('');
                    setUpass('');
                }

            }
        }
        // var new_obj = {
        //     uid: uid,
        //     upass: upass,
        //     uemail: uemail
        // }
        // setObj(new_obj)
        // // console.log(obj);
        // fetch("http://localhost:1234/show").then(
        //     res => res.json()
        // ).then(
        //     data => setArr(data)
        // )
        // var c = 0;
        // for (var i = 0; i < arr.length; i++) {
        //     if (arr[i].uid != uid) {
        //         c++;
        //         if (c == arr.length) {
        //             fetch("http://localhost:1234/save", {
        //                 method: 'POST',
        //                 body: JSON.stringify(obj),
        //                 headers: {
        //                     'Content-Type': 'application/json'
        //                 }
        //             })

        //             setUid('');
        //             setUemail('');
        //             setUpass('');
        //             alert('you are registered sucesfully');
        //             var root = ReactDOM.createRoot(document.getElementById("root"));
        //             root.render(
        //                 <BrowserRouter>
        //                 <LoginPage></LoginPage>
        //                 </BrowserRouter>
        //             )

        //         }
        //     }
        //     else {
        //         document.getElementById('one').innerHTML = 'you are already registered  or please referesh the page and enter new data for new registration';
        //         setUid('');
        //         setUemail('');
        //         setUpass('');
        //     }

        // }
    }


    return (
        <div className='regis_main'>
            <p id='one'></p>
            <p id="cpass"></p>
            <center>
                <div className='regis_main2'>
                    <div className='regis_main3'>
                        <h1 className='h1'>Registration</h1>
                        <form onSubmit={handleSaveData}>
                            <input type='number' value={uid} onChange={handleUid} placeholder='enter id' required></input>                    <i className="fa-solid fa-user"></i>
                            <br></br>
                            <input type='password' value={upass} onChange={handleUpass} placeholder='enter password' required></input><i className="fa-solid fa-lock"></i>
                            <br></br>
                            <input type='password' placeholder='enter confirm password' value={cpass} onChange={handleCpass}></input><i className="fa-solid fa-lock"></i>
                            <br></br>
                            <input type='email' value={uemail} onChange={handleUemail} placeholder='enter email' required></input><i className="fa-solid fa-envelope"></i>
                            <br></br>
                            <button type='submit'>double click for save data</button>
                        </form>

                        <div>
                        </div>
                        <br></br>
                        <span className='sp1'>Already Registered <Link to='/login' style=
                            {{ color: 'aliceblue' }}>Login</Link></span>
                    </div>
                </div>
            </center>
        </div>
    )
}

export default Regis;