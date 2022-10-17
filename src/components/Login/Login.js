import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='your email' required />
                </div>

                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='your password' required />
                </div>

                <input className='btn-submit' type="submit" value="LOGIN" id="" />
            </form>

            <p>New to eama john? <Link to='/signup'>Create a new Account</Link></p>
        </div>
    );
};

export default Login;