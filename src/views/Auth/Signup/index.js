import React from 'react';

const Signup = () => {
    return(
        <>
        <main className='bg-gray-100'>
            <div className='container m-auto py-8'>
                <div className='login-box'>
                    <div className='grid grid-cols-3 items-center my-10'>
                        <div className='text-center left text-white p-6'>
                            <h1 className='font-bold text-3xl mb-6'>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <a href='' className="block py-2 px-6 rounded-full signin-btn m-auto mt-6 uppercase font-medium">Sign In</a>
                        </div>
                        <div className='col-span-2 right bg-white p-6'>
                            <div className='login-signup-box'>
                                <h1 className='font-bold text-3xl mb-6 text-center'>Create Account</h1>
                                
                                <form>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <label class="flex items-center mb-3 relative">
                                            <input type="text" name="" class="bg-white border border-slate-300 focus:border-sky-500 focus:outline-none px-3 py-2 rounded-md w-full" 
                                            placeholder="First Name" />
                                            <span className='form-icon absolute right-2'>
                                                <img src='https://gofundher.com/assets/img/partner/user.svg' />
                                            </span>
                                        </label>
                                        <label class="flex items-center mb-3 relative">
                                            <input type="text" name="" class="bg-white border border-slate-300 focus:border-sky-500 focus:outline-none px-3 py-2 rounded-md w-full" 
                                            placeholder="Last Name" />
                                            <span className='form-icon absolute right-2'>
                                                <img src='https://gofundher.com/assets/img/partner/user.svg' />
                                            </span>
                                        </label>
                                    </div>
                                    
                                    <label class="flex items-center mb-3 relative">
                                        <input type="text" name="" class="bg-white border border-slate-300 focus:border-sky-500 focus:outline-none px-3 py-2 rounded-md w-full" 
                                        placeholder="you@example.com" />
                                        <span className='form-icon absolute right-2'>
                                            <img src='https://gofundher.com/assets/img/partner/user.svg' />
                                        </span>
                                    </label>
                                    <label class="flex items-center mb-3 relative">
                                        <input type="text" name="" class="bg-white border border-slate-300 focus:border-sky-500 focus:outline-none px-3 py-2 rounded-md w-full" 
                                        placeholder="Password" />
                                        <span className='form-icon absolute right-2'>
                                            <img src='https://gofundher.com/assets/img/partner/user.svg' />
                                        </span>
                                    </label>
                                    <label class="flex items-center mb-3 relative">
                                        <input type="text" name="" class="bg-white border border-slate-300 focus:border-sky-500 focus:outline-none px-3 py-2 rounded-md w-full" 
                                        placeholder="Confirm Password" />
                                        <span className='form-icon absolute right-2'>
                                            <img src='https://gofundher.com/assets/img/partner/user.svg' />
                                        </span>
                                    </label>
                                    <div className='text-center'>
                                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold mt-4 py-2 px-8 rounded-full uppercase">Sign Up</button>
                                    </div>
                                </form>
                                
                                <div className='login-sepreter relative'>
                                    {/* <div className='or'><span className='relative'>OR</span></div> */}
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
        </main>
        </>
    )
}

export default Signup;