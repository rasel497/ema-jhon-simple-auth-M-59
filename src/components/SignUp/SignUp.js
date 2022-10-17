import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';


const SignUp = () => {
    return (

        <div className='form-container'>
            <h2 className='form-title'>Register</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' placeholder='your name' />
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='your email' required />
                </div>

                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='your password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name='confirm' placeholder='your password' required />
                </div>

                <input className='btn-submit' type="submit" value="SIGN UP" id="" />
            </form>

            <p>Already, have an account? <Link to='/login'>Please Login</Link></p>
        </div>

    );
};

export default SignUp;