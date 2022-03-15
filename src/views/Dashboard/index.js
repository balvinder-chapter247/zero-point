import React, { useState, useEffect } from 'react';
import { Toaster } from '../../helper/react-toast'
import { ToastContainer } from 'react-toastify';
import validate from 'validate.js';
import { AddNewCardSchema } from "../../validators";
import { TabGroup } from '@statikly/funk'
import InnerPageBanner from '../../components/InnerPageBanner'
import ProfileSetting from './ProfileSetting';
import ChangePassword from './ChnagePassword';
import MyTransactions from './MyTransactions';
import TransactionData from './DataFake/TransactionData';
import InputForms from '../../common/inputForm';
// import Cards from 'reactjs-credit-card';
// import 'react-credit-cards/lib/styles.scss';

import InputMask from 'react-input-mask';

const Dashboard = () => {

    ///State for our form
    const [formState, setFormState] = React.useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
    });

    ///For validating error everytime change in inputs
    useEffect(() => {
        const errors = validate(formState.values, AddNewCardSchema);
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
        console.log(formState);
        if (formState.isValid) {
            const { card_number } = formState.values;
            let addNewCard = JSON.parse(localStorage.getItem("addNewCard"));
            if(addNewCard){
                const result = addNewCard.map(e => e.card_number);
                const foundCard = result.includes(card_number)
                if (foundCard) {
                    Toaster({
                        type: "error",
                        text: "You have already Add this card."
                    })
                }
                else{
                    Toaster({
                        type: "success",
                        text: "New Card Added Successfully."
                    })
                    // localStorage.removeItem("addNewCard");
                    let tempArray = addNewCard;
                    tempArray.push(formState.values);
                    localStorage.setItem("addNewCard", JSON.stringify(tempArray));
                }
            } else {
                let tempArray = [];
                tempArray.push(formState.values);
                localStorage.setItem("addNewCard", JSON.stringify(tempArray));

                {
                    Toaster({
                        type: "success",
                        text: "New Card Added Successfully."
                    })
                }
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


    const [addedCard, setAddedCard] = useState([]);
    useEffect(() => {
        let addedCard = JSON.parse(localStorage.getItem("addNewCard"));
            setAddedCard(addedCard);
    }, []);
        
   
  return (
    <>
    <main className="bg-gray-100">
        <InnerPageBanner title={"Account Setting"} />
        <section className="account-setting-sec">
            <div className="container m-auto px-4 sec-padding">
                <TabGroup numTabs={3} direction={TabGroup.direction.VERTICAL}>
                <div className="grid grid-cols-4 gap-4">
                    <div className=''>
                        <div className='tablist bg-white'>
                            <TabGroup.TabList>
                            <TabGroup.Tab
                                index={0}
                                className="w-full text-left py-3 px-4 focus-visible:none"
                                activeClassName="bg-blue-gradient text-white"
                                inactiveClassName="text-black"
                            >
                                <i className="fas fa-user"></i>
                                Profile Setting
                            </TabGroup.Tab>
                            <TabGroup.Tab
                                index={1}
                                className="w-full text-left py-3 px-4"
                                activeClassName="bg-blue-gradient text-white"
                                inactiveClassName="text-black"
                            >
                                <i className="fas fa-lock"></i>
                                Change Password
                            </TabGroup.Tab>
                            <TabGroup.Tab
                                index={2}
                                className="w-full text-left py-3 px-4"
                                activeClassName="bg-blue-gradient text-white"
                                inactiveClassName="text-black"
                            >
                                <i className="fas fa-exchange-alt"></i>
                                My Transactions
                            </TabGroup.Tab>
                            <TabGroup.Tab
                                index={3}
                                className="w-full text-left py-3 px-4"
                                activeClassName="bg-blue-gradient text-white"
                                inactiveClassName="text-black"
                            >
                                <i className="fas fa-credit-card"></i>
                                {/* <FontAwesomeIcon icon="fas fa-credit-card" /> */}
                                Save Payment
                            </TabGroup.Tab>
                            </TabGroup.TabList>
                        </div>
                    </div>
                    <div className='col-span-3'>
                        <div className='tabpanel bg-white p-4'>
                        <TabGroup.TabPanel
                        index={0}
                        className="transition-all transform"
                        activeClassName="opacity-100 duration-500 translate-x-0"
                        inactiveClassName="absolute opacity-0 -translate-x-2"
                        >
                        <h4 className='account-title mb-6 pb-2'>Profile Setting</h4>
                        <ProfileSetting />
                        </TabGroup.TabPanel>
                        <TabGroup.TabPanel
                        index={1}
                        className="transition-all transform"
                        activeClassName="opacity-100 duration-500 translate-x-0"
                        inactiveClassName="absolute opacity-0 -translate-x-2"
                        >
                        <h4 className='account-title mb-6 pb-2'>Change Password</h4>
                        <ChangePassword />
                        
                        </TabGroup.TabPanel>
                        <TabGroup.TabPanel
                        index={2}
                        className="transition-all transform"
                        activeClassName="opacity-100 duration-500 translate-x-0"
                        inactiveClassName="absolute opacity-0 -translate-x-2"
                        >
                        <h4 className='account-title mb-6 pb-2'>My Transactions</h4>
                        <MyTransactions />
                        </TabGroup.TabPanel>
                        <TabGroup.TabPanel
                        index={3}
                        className="transition-all transform"
                        activeClassName="opacity-100 duration-500 translate-x-0"
                        inactiveClassName="absolute opacity-0 -translate-x-2"
                        >
                        <div className='account-title mb-6 pb-2'>
                            <div className="flex justify-between items-center">
                                <h4 className='mb-0'>Save Payment</h4>
                                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Add Card</button> */}
                            </div>
                        </div>
                        
                        <div className='payment-method'>
                            <div className='grid grid-cols-6 gap-4'>
                                <div className='col-span-6'>
                                    {/* <h6 className='font-medium text-lg mb-4'>Select Payment Method</h6> */}
                                    {
                                        addedCard && addedCard.length ?
                                        <>
                                            {
                                                addedCard.map((cardItem, i) => 

                                                <div className="form-check flex items-center rounded bg-gray-100 px-4 py-2 mb-3 w-full">
                                                   
                                                    <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
                                                    type="radio" checked name="flexRadioDefault" id={`Card${i}`} />
                                                    <label className="form-check-label inline-block cursor-pointer text-gray-800 flex w-full items-center" for={`Card${i}`}>
                                                        <img src='./images/mastercard.png' className='w-12 ml-2 mr-4' />
                                                        <div className=''>
                                                            <span className='card-number block text-sm font-medium'>{cardItem.card_number}</span>
                                                            <span className='card-name block text-sm'>MasterCard</span>
                                                        </div>
                                                        <span className='delete ml-auto hover:text-red-500'>
                                                            <i className="fa fa-trash-alt" aria-hidden="true"></i>
                                                        </span>
                                                    </label>
                                                </div>
                                            )}
                                            <div className='flex justify-between mt-6'>
                                                <button type="button" class="blue-btn py-2 px-4 rounded" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                                Add New Card
                                                </button>
                                            </div>
                                        </> : 
                                        <div className='text-center'>
                                            <img src="./images/no-credit-card.png" className='w-16 mx-auto pb-2' />
                                            <p>There are no card added.</p>
                                            <div className='mt-6'>
                                                <button type="button" class="blue-btn py-2 px-4 rounded" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                                Add New Card
                                                </button>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        </TabGroup.TabPanel>
                        </div>
                    </div>
                </div>
                </TabGroup>
            </div>
        </section>
    </main>

    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
        <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
            <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5 class="text-xl font-medium leading-normal text-gray-800 mb-0" id="exampleModalScrollableLabel">
                Add New Card
                </h5>
                <button type="button"
                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body relative p-4">
            
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-3 gap-4">
                        <div className='col-span-3'>
                            <label class="block font-medium mb-2 text-gray-700">Card Number<span class="required">*</span></label>
                            <InputMask
                            className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded w-full"
                            mask="9999 9999 9999 9999"
                            maskChar={null}
                            name="card_number"
                            placeholder="Card Number"
                            value={formState.values.card_number || ""}
                            onChange={handleChange}
                            // onChange={handleInput}
                            />
                            <span className='error text-red-500 text-sm font-medium'>
                                {hasError("card_number") ?
                                formState.errors.card_number[0] : null}
                            </span>
                        </div>
                        <div className=''>
                            <label class="block font-medium mb-2 text-gray-700">Expiry<span class="required">*</span></label>
                            <InputMask
                                className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded w-full"
                                mask="99/99"
                                name="expiry"
                                maskChar={null}
                                placeholder="MM/YY"
                                value={formState.values.expiry || ""}
                                onChange={handleChange}
                                // onChange={handleInput}
                                />
                            <span className='error text-red-500 text-sm font-medium'>
                                {hasError("expiry") ?
                                formState.errors.expiry[0] : null}
                            </span>
                        </div>
                        <div className=''>
                            <label class="block font-medium mb-2 text-gray-700">CVV / CVC<span class="required">*</span></label>
                            <InputMask
                                className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded w-full"
                                mask="9999"
                                name="cvv"
                                maskChar={null}
                                type='password'
                                placeholder="***"
                                value={formState.values.cvv || ""}
                                onChange={handleChange}
                                iconClassName={"fas fa-question-circle"}
                                dataTip="The CVV / CVC Number is the last three digits on the back of your cards"
                                />
                            <span className='error text-red-500 text-sm font-medium'>
                                {hasError("cvv") ?
                                formState.errors.cvv[0] : null}
                            </span>
                        </div>
                        {/* <div className='cvv'>
                            <img src='./images/cvv.png' alt='' />
                        </div> */}
                        <div className='col-span-3'>
                            <button type="submit" className="blue-btn py-2 px-8" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Save</button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard
