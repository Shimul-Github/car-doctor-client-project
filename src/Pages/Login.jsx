import React, { useContext } from 'react';
import loginPic from '../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/ContextProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext)

    const handleLogin =(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginInfo = {
            email,password
        }
        console.log(loginInfo)

        // Sign in by Firebase
        signIn(email,password)
        .then(result=>{
            console.log(result.user)
            alert('User Signed In Properly')

        })
        .catch(error=>{
            console.log(error)
            alert('UnMatched Credentials with Firebase')
        })
    }
    return (
        <div className="hero min-h-screen my-10">
            <div className="hero-content flex-col lg:flex-row items-center justify-between">
                <div className="text-center lg:text-left md:text-center">
                    <img src={loginPic} alt="" />
                </div>
                <div className="card lg:w-1/2 w-full">
                <h1 className="text-5xl font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" 
                            name='email'
                            className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" 
                            name='password'
                            className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                           
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'>If You Have No Account With Us Please <Link to='/signup'> <span className='text-xl text-blue-600 font-bold'>Sign Up</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;