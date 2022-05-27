import React from 'react';
import './Login.css'
import useFirebase from "./../hooks/useFirebase";

const Login = () => {
    const { singInWihGoogle } = useFirebase()
    return (
        <div className='signIn'>
            <h2>please <small className='gray'>Login</small> </h2>
            <div>
                <button className='google-signIn' onClick={singInWihGoogle}>Google sign in</button>
            </div>
            <br />
            <div className='signIn-form'>
                <form>
                    <input type="email" placeholder='Enter email' name="" id="" />
                    <br />
                    <input type="password" name="" placeholder='Enter password' id="" />
                    <br />
                    <input type="submit" value="Login" />

                </form>
            </div>
        </div>
    );
};

export default Login;