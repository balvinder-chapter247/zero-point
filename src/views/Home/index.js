import React from 'react';
import { Toaster } from '../../helper/react-toast';
import { ToastContainer } from 'react-toastify';

const Home = () => {
  
    const thise = () => {
        Toaster(
            {
                text: "this is text",
                type: "success"
            }
        );
    }
    return (
        <>
            <p onClick={thise}>Home</p>
            <ToastContainer />
        </>
    )

}


export default Home