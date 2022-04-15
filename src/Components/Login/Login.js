import React, { useState } from 'react';
import './Login.css';
import avatar from '../images/login/avatar.svg'
import wave from "../images/login/wave.png"
import bg from '../images/login/bg.svg'
import { FaUserAlt } from 'react-icons/fa';
import { AiFillLock } from 'react-icons/ai';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';


const Login = () => {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
        general: ""
        
    })

    console.log(userInfo.email)
    console.log(errors.emailError);
    console.log(errors);

    

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleEmail = e => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        
        if(validEmail){
            setUserInfo({...userInfo, email: e.target.value}) 
            setErrors({...errors, emailError: ""})      
        } else {
            setErrors({...errors, emailError: "Invalid email"})
            setUserInfo({...userInfo, email: ""})
        }
        
    }
    console.log(userInfo);
    
    const handlePassword = e => {
        const passRegex = /.{6,}/;
        const validPassword = passRegex.test(e.target.value);
        console.log(validPassword);
        if(validPassword){
            setUserInfo({...userInfo, password: e.target.value})
            setErrors({...errors, passwordError: ""})
        }else{
            setErrors({...errors, passwordError: "Password too short"})
            setUserInfo({...userInfo, password: ""});
        }
        

    }

    const handleOnSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password);
    }

    return (
        <div className="mb-30">
            <img class="wave" src={wave} />
            <div class="container">
                <div class="img">
                    <img src={bg} />
                </div>
                <div class="login-content">
                    <form onSubmit={handleOnSubmit}>
                        <img className="w-full mx-auto" src={avatar} />
                        <h2 class="title">Welcome</h2>
                        <div class="input-div one">
                            <div class="i">
                                <FaUserAlt />
                            </div>
                            <div class="div">
                                <h5>Email</h5>
                                <input
                                    onChange={handleEmail}
                                    className="outline-none"
                                    type="text"
                                    class="input" />
                            </div>
                            
                        </div>
                        {errors?.emailError && <p className="text-red-500 text-xs">{errors.emailError}</p>}
                        <div class="input-div pass">
                            <div class="i">
                                <AiFillLock />
                            </div>
                            <div class="div">
                                <h5>Password</h5>
                                <input
                                    onChange={handlePassword}
                                    className="outline-none" type="password"
                                    class="input" />
                            </div>
                        </div>
                        {errors?.passwordError && <p className="text-red-500 text-xs">{errors.passwordError}</p>}
                        <a href="#">Forgot Password?</a>
                        <input type="submit" class="login-btn" value="Login" />
                    </form>
                </div>
            </div>

        </div>


    );
};

export default Login;