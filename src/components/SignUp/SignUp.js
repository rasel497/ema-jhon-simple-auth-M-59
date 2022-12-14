import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './SignUp.css';


const SignUp = () => {
    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext)

    const handleOnSubmit = (event) => {
        event.preventDefault(); // for no reload

        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length < 6) {
            setError('Password must shoud be 6 characters or more.');
            return;
        }

        if (password !== confirm) {
            setError('Your password did not match');
            return;
        }

        // create user ke eikhne pathai dibo
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => console.error(error));

    }

    return (

        <div className='form-container'>
            <h2 className='form-title'>Register</h2>
            <form onSubmit={handleOnSubmit}>
                {/* <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' placeholder='your name' />
                </div> */}

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
                    <input type="password" name='confirm' placeholder='re-type password' required />
                </div>

                <input className='btn-submit' type="submit" value="SIGN UP" id="" />
            </form>

            <p>Already, have an account? <Link to='/login'>Please Login</Link></p>
            <p className='text-error'>{error}</p>
        </div>

    );
};

export default SignUp;