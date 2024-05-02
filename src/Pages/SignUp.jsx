import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginPic from '../assets/images/login/login.svg'
import { AuthContext } from '../Provider/ContextProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignup =(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const signupInfo = {
            email,password,name
        }
        console.log(signupInfo)

        // create user
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })


    }
    return (
        <div className="hero min-h-screen my-10">
            <div className="hero-content flex-col lg:flex-row items-center justify-between">
                <div className="text-center lg:text-left md:text-center">
                    <img src={loginPic} alt="" />
                </div>
                <div className="card lg:w-1/2 w-full">
                    <h1 className="text-5xl font-bold">Sign Up</h1>
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name"
                                name='name'
                                className="input input-bordered w-full" required />
                        </div>
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

                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>Have you already Account With Us? Please <Link to='/login'> <span className='text-xl text-blue-600 font-bold'>Sign In</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;