import React from "react";
import { Link } from "react-router-dom";
import { useEffect,useState } from 'react';
import jwt_decode from 'jwt-decode';
import './Client.css';
import Profile from './Profile';


function Client() {
function handleCallbackResponse(response) {
   console.log("Encoded JWT ID token: "+ response.credential);
   var userObject=jwt_decode(response.credential);
   console.log(userObject);
   document.getElementById("signInDiv").hidden=true;
}

useEffect(() => {
  /*global google*/
  google.accounts.id.initialize({
    client_id:"736809625590-ppmsncqs0m0fflk2ing9lhrolun5e2m6.apps.googleusercontent.com",
    callback: handleCallbackResponse
  })
  google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    {
      theme:"outline",
      size:"large"
    }
  );

  google.accounts.id.prompt();
},[]);


  return (
    <div className='bg1'>
    <div className="App1">
     <div id="signInDiv"></div>
     <br></br><br></br>
     <Link to="/Profile" className='con'>CONTINUE</Link>
    </div>
    </div>
  );
}

export default Client;
