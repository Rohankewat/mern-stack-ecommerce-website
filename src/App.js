import Regis from "./Components/Regis/Regis";
// import Home from "./Components/Home/Home";
import LoginPage from "./Components/Login/LoginPage";
import ErrorPage from "./Components/Error/ErrorPage";
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

// practise express js 4 index.js
function App() {
  return (
    <div className="app_main_con">
      <center>
        <div className="app_linking">
          {/* <Link to='/' id="six">Registration</Link> */}
          {/* <Link to='/login' id="six">Already Registered Login</Link> */}
          {/* <Link to='/error' id="six">Forgot email or password</Link> */}
        </div>
        <Routes>
          <Route index element={<Regis />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/error' element={<ErrorPage />}></Route>
        </Routes>
      </center>
    </div>

  )

}

export default App;