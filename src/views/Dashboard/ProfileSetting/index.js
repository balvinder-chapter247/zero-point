import React, { useEffect } from 'react';
import { Toaster } from '../../../helper/react-toast'
import { ToastContainer } from 'react-toastify';
import validate from 'validate.js';
import { ProfileSettingSchema } from "../../../validators";
import InputForms from '../.././../common/inputForm'

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

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formState.isValid) {
            const { first_name, last_name, email } = formState.values;
            let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));
            if (registeredUsers) {
                let tempArray = registeredUsers;
                // tempArray.push(formState.values);
                localStorage.setItem("registeredUsers", JSON.stringify(tempArray));
                Toaster({
                    type: "Success",
                    text: "You have successfully update your profile."
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
                <div className='grid grid-cols-2 gap-4'>
                    <div className=''>
                        <InputForms
                            className="mb-2 block text-sm font-medium"
                            type='text'
                            name="first_name"
                            value={formState.values.first_name || ""}
                          
                            errorMessage={hasError("first_name") ?
                                formState.errors.first_name[0] : null}
                            onChange={handleChange}
                            placeholder="First Name"
                        />

                    </div>
                    <div className=''>
                        <InputForms
                            className="mb-2 block text-sm font-medium"
                            type='text'
                            name="last_name"
                            value={formState.values.last_name || ""}
                           
                            errorMessage={hasError("last_name") ?
                                formState.errors.last_name[0] : null}
                            onChange={handleChange}
                            placeholder="Last Name"
                        />

                    </div>
                    <div className=''>
                        <InputForms
                            className="mb-2 block text-sm font-medium"
                            type='email'
                            name="email"
                            value={formState.values.email || ""}
                          
                            errorMessage={hasError("email") ?
                                formState.errors.email[0] : null}
                            onChange={handleChange}
                            placeholder="your@email.com"
                        />

                    </div>
                    <div className=''>
                        <InputForms
                            className="mb-2 block text-sm font-medium"
                            type='text'
                            name="phone_number"
                            value={formState.values.phone_number || ""}
                           
                            errorMessage={null}
                            onChange={handleChange}
                            placeholder="321-112-1141"
                        />
                    </div>
                    <div className=''>
                        <InputForms
                            className="mb-2 block text-sm font-medium"
                            type='text'
                            name="address"
                            value={formState.values.address || ""}
                
                            errorMessage={null}
                            onChange={handleChange}
                            placeholder="Address"
                        />
                    </div>
                    <div className=''>
                        <InputForms
                            className="mb-2 block text-sm font-medium"
                            type='text'
                            name="city"
                            value={formState.values.city || ""}
                           
                            errorMessage={null}
                            onChange={handleChange}
                            placeholder="City"
                        />
                    </div>
                </div>
                <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-semibold mt-6 uppercase py-2 px-8 rounded">
                    Submit</button>
            </form>
        </div>
    )
}

export default ProfileSetting
