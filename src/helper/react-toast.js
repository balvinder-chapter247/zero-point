import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Toaster =(msg)=> {
    const {text,type}=msg;
    if(type=="success")
    toast.success(text)
    else if(type=="error")
    toast.error(text)
    else if(type=="info")
    toast.info(text);
}

// Usage:-
// import { ToastContainer } from 'react-toastify';
// add this in your html coding<ToastContainer />
// Toaster({
//     type:"success",text:"ApiMessage"
// })