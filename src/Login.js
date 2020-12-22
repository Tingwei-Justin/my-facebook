import React from 'react'
import "./Login.css"
import logo from "./img/f_logo_RGB-Blue_1024.png"
import logoWord from "./img/Facebook-Logo.wine.svg"
import { Button } from '@material-ui/core'
import { auth, provider } from "./firebase"
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'




const Login = () => {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        // sign in 

        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
                // console.log(result);
                // This gives you a Google Access Token. You can use it to access the Google API.
                // var token = result.credential.accessToken;
            })
            .catch(error => {
                alert(error.message);
                // Handle Errors here.
                // var errorCode = error.code;
                // var errorMessage = error.message;
                // The email of the user's account used.
                // var email = error.email;
                // // The firebase.auth.AuthCredential type that was used.
                // var credential = error.credential;
            });
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src={logo}
                    alt=""
                />
                <img
                    src={logoWord}
                    alt=""
                />
            </div>

            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
