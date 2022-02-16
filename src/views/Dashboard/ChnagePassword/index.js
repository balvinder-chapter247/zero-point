import React, { useEffect } from 'react';
import { Toaster } from '../../../helper/react-toast'
import { ToastContainer } from 'react-toastify';
import validate from 'validate.js';
import { ChangePasswordSchema } from "../../../validators";

const ChangePassword = () => {

    ///State for our form
    const [formState, setFormState] = React.useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
    });

    useEffect(() => {
        const errors = validate(formState.values, ChangePasswordSchema);
        setFormState((formState) => ({
            ...formState,
            isValid: errors ? false : true,
            errors: errors || {},
        }));
    }, [formState.values]);

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
        }))
    };
    

    const handleSubmit = (event) => {
        event.preventDefault();
        if(formState.isValid) {
            const { password } = formState.values;
            let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));
            if(registeredUsers) {
                let tempArray = registeredUsers;
                localStorage.setItem("registeredUsers", JSON.stringify(tempArray));
                Toaster({
                    type: "Success",
                    text: "You have successfully change your password."
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
    }

    const hasError = (field) =>
        formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 gap-4'>
                <div className=''>
                    <label className="mb-2 block text-sm font-medium">Current Password</label>
                    <input type="password" name="password"
                        value={formState.values.password || ""} 
                        onChange={handleChange}
                        className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full"
                        placeholder="Current Password" />
                        {
                            hasError("password") ?
                                <span className='error text-red-500 text-sm font-medium'>
                                    {formState.errors.password[0]}
                                </span>
                                :
                                null
                        }
                </div>
                <div className=''>
                    <label className="mb-2 block text-sm font-medium">New Password</label>
                    <input type="password" name="new_password"
                        value={formState.values.new_password || ""} 
                        onChange={handleChange}
                         className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full"
                        placeholder="New Password" />
                        {
                            hasError("new_password") ?
                                <span className='error text-red-500 text-sm font-medium'>
                                    {formState.errors.new_password[0]}
                                </span>
                                :
                                null
                        }
                </div>
                <div className=''>
                    <label className="mb-2 block text-sm font-medium">Confirm New Password</label>
                    <input type="password" name="confirm_new_password"
                        value={formState.values.confirm_new_password || ""}
                        onChange={handleChange} 
                        className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full"
                        placeholder="Confirm New Password" />
                        {
                            hasError("confirm_new_password") ?
                                <span className='error text-red-500 text-sm font-medium'>
                                    {formState.errors.confirm_new_password[0]}
                                </span>
                                :
                                null
                        }
                </div>
            </div>
            <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-semibold mt-6 uppercase py-2 px-8 rounded">
                Reset Password</button>
        </form>
    </div>
  )
}

export default ChangePassword
