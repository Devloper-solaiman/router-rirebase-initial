import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div className='register-form'>
            <h2 className='green'>Please <small className='blue'>Register</small></h2>
            <form >
                <input type="text" placeholder='Full Name' name="" id="" />
                <br />
                <input type="email" placeholder='Enter email' name="" id="" />
                <br />
                <input type="number" placeholder='+880 ' name="" id="" />
                <br />
                <input type="password" name="" placeholder='Enter password' id="" />
                <br />
                <input type="password" name="" placeholder='Conform Password' id="" />
                <br />
                <input type="submit" value="Register" />

            </form>
        </div>
    );
};

export default Register;