import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import LogInBg from '../../../images/LogIn.jpg';
import { Button } from 'react-bootstrap';


if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}
const LogIn = () => {


    const handleGoogleSignIn = () => {

    }

    return (
        <div className = "container">
            <div className="row align-items-center" style = {{height: '100vh'}}>
               
            <div className = "col-md-6 d-none d-md-block align-self-middle">
                    <img src={LogInBg} className = "img-fluid" alt="" />
                </div>
               
                <div style= {{background: 'white'}} className="col-md-6 shadow p-5">
                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input type="text" name="" className= "form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input type="password" name="" className= "form-control" />
                    </div>
                    <div className="form-group mt-5" >
                       <Button onClick= {handleGoogleSignIn}> Google Sign In</Button>
                       </div>
                </div>
  
            </div>
        </div>
    );
};

export default LogIn;