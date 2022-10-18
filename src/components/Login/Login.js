import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css';


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate(); //1.2 use when we login tokhn amdrke root/home page niye jbe

    const handleOnSubmit = (event) => {
        // event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/'); ////2.2 use when we login tokhn amdrke root/home page niye jbe
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleOnSubmit}>
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