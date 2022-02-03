import React, { useEffect } from "react"
import { toast, ToastContainer } from 'react-toastify';
import validate from 'validate.js';
import { SuscriptionSchema } from "../../validators";
import 'react-toastify/dist/ReactToastify.css';

const SuscriptionBox = () => {
    ///State for our form
    const [formState, setFormState] = React.useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
    });

    ///For validating error everytime change in inputs
    useEffect(() => {
        const errors = validate(formState.values, SuscriptionSchema);
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

        if (formState.isValid) {
            toast.success("Successfully subscribed.")
        }
        setFormState((formState) => ({
            ...formState,
            touched: {
                ...formState.touched,
                ...formState.errors,
            },
        }));
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="text-black">
                    <div className="container  flex justify-center items-center">
                        <div className="relative">
                            <input type="email"
                                className="h-10 w-96 pl-5 pr-5  focus:shadow focus:outline-none"
                                placeholder="Subscribe to our Newsletter"
                                name='email'
                                value={formState.values.email || ""}
                                onChange={handleChange} />
                            <div className="absolute top-1 right-1">
                                <button className="h-8 w-20 text-white theme-bg-color"
                                    type="submit">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <div>
                            {
                                formState.errors.email ? formState.errors.email : null
                            }
                        </div>
                    </div>
                </div>
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
        </>
    )
}
export default SuscriptionBox