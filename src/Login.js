import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth,provider} from './firebase';
function Login() {

    const login=()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            console.log(result);
        })
        .catch((e)=>alert(e.message))

    }
    return (
        <div className="login">
            <div className="login__logo">
            <img src="https://lh3.googleusercontent.com/proxy/ucdLiSPgybP-cnltwI-02JixBaa6BoPg7k_mUeMq8kcKzHbFPsf4ZsjP-7ahujOBBiGdO2-oX_CSVw8g1SMir4tbrJ0WzJgIP_Au3qrgFd4I5rMyH8paabcATTGGbuY"
             alt="iMessage" />
    
             <h1>iMessage</h1>
            </div>

         <Button onClick={login}>Sign In</Button>
        </div>
    )
}

export default Login
