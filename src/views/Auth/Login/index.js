import React, { useEffect } from 'react';
import { Toaster } from '../../../helper/react-toast'
import { ToastContainer } from 'react-toastify';
import validate from 'validate.js';
import { LoginSchema } from "../../../validators";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";


const Login = () => {

    ///for histoty push
    const history = useHistory()
    ///State for our form
    const [formState, setFormState] = React.useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
    });

    ///For validating error everytime change in inputs
    useEffect(() => {
        const errors = validate(formState.values, LoginSchema);
        setFormState((formState) => ({
            ...formState,
            isValid: errors ? false : true,
            errors: errors || {},
        }));
    }, [formState.values]);

    ///Handle change for storing input values to state.
    const handleChange = (event) => {
        event.persist();
        setFormState((formState) => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]:
                    event.target.type === "checkbox"
                        ? event.target.checked
                        : event.target.value,
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true,
            },
        }));
    };

    ///Submiting values to api.
    const handleSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = formState.values;
        if (formState.isValid) {
            const login = JSON.parse(localStorage.getItem("registeredUsers"));
            const filterLogin = login.map((e)=> { 
                if(e.email==email && e.password==password) {
                    return true;
                }
                else{
                    return false;
                }
             })
           
            if(filterLogin=="true") {
               
                Toaster({
                    type: "success",
                    text: "You have Login successfully."
                });
                history.push("/dashboard");
                
            }
            else{
                Toaster({
                    type: "error",
                    text: "invalid Email or Password."
                })
            }
            
        }
        setFormState((formState) => ({
            ...formState,
            touched: {
                ...formState.touched,
                ...formState.errors,
            },
        }));
    };

    const hasError = (field) =>
        formState.touched[field] && formState.errors[field] ? true : false;

    return(
        <>
        <main className='bg-gray-100'>
            <div className='auth-banner relative flex items-center'>
                <div className='container mx-auto px-4 pt-8 relative'>
                    <div className='login-box shadow-lg'>
                        <div className='grid grid-cols-3 items-center my-10'>
                            <div className='text-center left text-white p-6'>
                                <h1 className='font-bold text-3xl mb-6'>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <Link to='sign-up' className="block py-2 px-6 rounded-full signin-btn m-auto mt-6 uppercase font-medium">Sign Up</Link>
                            </div>
                            <div className='col-span-2 right bg-white p-8'>
                                <div className='login-signup-box'>
                                    <h1 className='font-bold text-3xl mb-6 text-center'>Sign in to Xero Point</h1>
                                    <form onSubmit={handleSubmit}>
                                        <div className='mb-3'>
                                            <label className="flex items-center relative">
                                                <input type="email" name="email" className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full" 
                                                placeholder="you@example.com"
                                                value={formState.values.email || ""}
                                                onChange={handleChange} />
                                                <span className='form-icon absolute right-2'>
                                                    <img src='https://gofundher.com/assets/img/partner/mail.svg' />
                                                </span>
                                            </label>
                                            {/* <span className='error text-red-500 text-sm font-medium'> { formState.errors.email ? formState.errors.email : null } </span> */}
                                            {
                                                hasError("email") ?
                                                    <span className='error text-red-500 text-sm font-medium'>
                                                        {formState.errors.email[0]}
                                                    </span>
                                                    :
                                                    null
                                            }
                                        </div>
                                        <div className='mb-3'>
                                            <label className="flex items-center relative">
                                                <input type="password" name="password" className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full" 
                                                placeholder="Password" 
                                                value={formState.values.password || ""}
                                                onChange={handleChange} />
                                                <span className='form-icon absolute right-2'>
                                                    <img src='https://gofundher.com/assets/img/partner/lock.svg' />
                                                </span>
                                            </label>
                                            {/* <span className='error text-red-500 text-sm font-medium'> { formState.errors.password ? formState.errors.password : null } </span> */}
                                            {
                                                hasError("password") ?
                                                    <span className='error text-red-500 text-sm font-medium'>
                                                        {formState.errors.password[0]}
                                                    </span>
                                                    :
                                                    null
                                            }
                                        </div>
                                        
                                        <div className='flex items-center justify-between mt-6'>
                                            <div className='text-center'>
                                                <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-full uppercase">Sign In</button>
                                            </div>
                                            <div className='text-center'>
                                                <Link to='forgot-password' className="font-medium">Forgot your Password ?</Link>
                                            </div>
                                        </div>
                                    </form>
                                    
                                    <div className='text-center mt-8 mb-4'>
                                        <h6 className='font-medium'>Login with Social</h6>
                                    </div>
                                    <div className='login-social flex justify-center'>
                                        <a href="#!" className="text-gray-600 icon google">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google"
                                                className="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                                <path fill="currentColor"
                                                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z">
                                                </path>
                                            </svg>
                                        </a>
                                        <a href="#!" className="text-gray-600 icon fb">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"
                                                className="w-2.5" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 320 512">
                                                <path fill="currentColor"
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                                                </path>
                                            </svg>
                                        </a>
                                        <a href="#!" className="text-gray-600 icon linkedin">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in"
                                                className="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512">
                                                <path fill="currentColor"
                                                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                                </path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
        </main>
        </>
    )
}

export default Login;