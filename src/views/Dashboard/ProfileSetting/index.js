import React, { useEffect } from 'react';
import { Toaster } from '../../../helper/react-toast'
import { ToastContainer } from 'react-toastify';
import validate from 'validate.js';
import { ProfileSettingSchema } from "../../../validators";

const ProfileSetting = () => {

    ///State for our form
    const [formState, setFormState] = React.useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
    });

    useEffect(() => {
        const errors = validate(formState.values, ProfileSettingSchema);
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

    useEffect(() => {
        let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));
        if(registeredUsers) {
            setFormState((formState) => ({
                ...formState,
                values: {
                    ...formState.values,
                    first_name: registeredUsers[0].first_name,
                    last_name: registeredUsers[0].last_name,
                    email: registeredUsers[0].email,
                    password: registeredUsers[0].password
                    },
            }));
        }
        
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(formState.isValid) {
            let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));
                let tempArray = [...registeredUsers, formState.values];
                // tempArray.push(formState.values);
                localStorage.setItem("registeredUsers", JSON.stringify(tempArray));
                Toaster({
                    type: "Success",
                    text: "You have successfully update your profile."
                })
        }

        setFormState((formState) => ({
            ...formState,
            touched: {
                ...formState.touched,
                ...formState.errors,
            },
        }));
    }

    const hasError = (field) => formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 gap-4'>
            <div className=''>
                <label className="mb-2 block text-sm font-medium">First Name</label>
                <input type="text" name="first_name"
                    value={formState.values.first_name || ""} 
                    onChange={handleChange}
                    className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full"
                    placeholder="First Name" />
                    {
                        hasError("first_name") ?
                            <span className='error text-red-500 text-sm font-medium'>
                                {formState.errors.first_name[0]}
                            </span>
                            :
                            null
                    }
            </div>
            <div className=''>
                <label className="mb-2 block text-sm font-medium">Last Name</label>
                <input type="text" name="last_name"
                    value={formState.values.last_name || ""}
                    onChange={handleChange}
                    className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full"
                    placeholder="Last Name" />
                    {
                        hasError("last_name") ?
                            <span className='error text-red-500 text-sm font-medium'>
                                {formState.errors.last_name[0]}
                            </span>
                            :
                            null
                    }
            </div>
            <div className=''>
                <label className="mb-2 block text-sm font-medium">Email</label>
                <input type="text" name="email"
                    value={formState.values.email || ""}
                    onChange={handleChange}
                    className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full"
                    placeholder="Email" />
                    {
                        hasError("email") ?
                            <span className='error text-red-500 text-sm font-medium'>
                                {formState.errors.email[0]}
                            </span>
                            :
                            null
                    }
            </div>
            <div className=''>
                <label className="mb-2 block text-sm font-medium">Phone Number</label>
                <input type="text" name="first_name"
                    value="" className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full"
                    placeholder="Phone Number" />
            </div>
            <div className=''>
                <label className="mb-2 block text-sm font-medium">Address</label>
                <input type="text" name="first_name"
                    value="" className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full"
                    placeholder="Address" />
            </div>
            <div className=''>
                <label className="mb-2 block text-sm font-medium">City</label>
                <input type="text" name="first_name"
                    value="" className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full"
                    placeholder="City" />
            </div>
        </div>
        <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-semibold mt-6 uppercase py-2 px-8 rounded">
            Submit</button>
    </form>
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
    </div>
    
  )
}

export default ProfileSetting
