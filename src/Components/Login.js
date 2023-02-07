import React from "react";
import { Link } from "react-router-dom";
export default function Login(){
    return <>
        <form className="loginform" action="">
        <div className="headingsContainer">
            <h2>Sign in</h2>
            <p>Sign in with your username and password</p>
        </div>

        <div className="mainContainer">
            <label for="username">Your username</label>
            <input className="logininput" type="text" placeholder="Enter Username" name="username" required/>

            <br/><br/>

            <label for="pswrd">Your password</label>
            <input className="logininput" type="password" placeholder="Enter Password" name="pswrd" required/>

            <div className="subcontainer">
                <p className="forgotpsd"> <Link to="">Forgot Password?</Link></p>
            </div>


            <button className="formbtn" type="submit">Login</button>

            <p className="register">Don't have an account?  <Link to="">Sign up here!</Link></p>

        </div>

    </form>
    <br/><br/><br/>
    </>

}