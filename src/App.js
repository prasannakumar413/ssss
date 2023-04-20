import "./App.css";
import Logo from "./Logo";
import Welcome from './Welcome';
import Signin from "./Signin";
import Signup from "./Signup";
import Profile from "./Profile";
import Otp from "./Otp";
import Verification from "./Verification";
import Success from "./Success";
import Tpage from "./Tpage";
import Client from "./Client";


import {BrowserRouter,Routes,Route} from "react-router-dom";

function App()
{
    return (
    <BrowserRouter>
    <Routes>
        <Route path='' element ={<Logo/>}></Route>
        <Route path='Welcome' element ={<Welcome/>}></Route>
        <Route path='Signin' element ={<Signin/>}></Route>
        <Route path='Signup' element ={<Signup/>}></Route>
        <Route path='Profile' element ={<Profile/>}></Route>
        <Route path='Otp' element ={<Otp/>}></Route>
        <Route path='Verification' element ={<Verification/>}></Route>
        <Route path='Success' element ={<Success/>}></Route>
        <Route path='Tpage' element ={<Tpage/>}></Route>
        <Route path='Client' element ={<Client/>}></Route>
    </Routes> 
    </BrowserRouter>
    )
}

export default App;
