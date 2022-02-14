import React, { useEffect } from 'react';
// import { Toaster } from '../../helper/react-toast'
// import { ToastContainer } from 'react-toastify';
// import validate from 'validate.js';
// import { ProfileSettingSchema } from "../../validators";
import { TabGroup } from '@statikly/funk'
import InnerPageBanner from '../../components/InnerPageBanner'
import ProfileSetting from './ProfileSetting';
import ChangePassword from './ChnagePassword';
import MyTransactions from './MyTransactions';
import TransactionData from './DataFake/TransactionData';

const Dashboard = () => {

    

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
                                className="w-full text-left py-3 px-4 transition-colors duration-150 focus-visible:none"
                                activeClassName="bg-blue-500 text-white"
                                inactiveClassName="text-black"
                            >
                                <i class="fas fa-user"></i>
                                Profile Setting
                            </TabGroup.Tab>
                            <TabGroup.Tab
                                index={1}
                                className="w-full text-left py-3 px-4 transition-colors duration-150"
                                activeClassName="bg-blue-500 text-white"
                                inactiveClassName="text-black"
                            >
                                <i class="fas fa-lock"></i>
                                Change Password
                            </TabGroup.Tab>
                            <TabGroup.Tab
                                index={2}
                                className="w-full text-left py-3 px-4 transition-colors duration-150"
                                activeClassName="bg-blue-500 text-white"
                                inactiveClassName="text-black"
                            >
                                <i class="fas fa-exchange-alt"></i>
                                My Transactions
                            </TabGroup.Tab>
                            <TabGroup.Tab
                                index={3}
                                className="w-full text-left py-3 px-4 transition-colors duration-150"
                                activeClassName="bg-blue-500 text-white"
                                inactiveClassName="text-black"
                            >
                                <i class="fas fa-credit-card"></i>
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
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Add Card</button>
                        </div></div>
                        
                        <div className='payment-method'>
                        
                        <div className=''>
                            {/* <h6 className='font-medium text-lg mb-4'>Select Payment Method</h6> */}
                            <div class="form-check flex items-center rounded bg-gray-100 px-4 py-2 mb-3 w-full">
                                    <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
                                    type="radio" name="flexRadioDefault" id="card1" />
                                    <label class="form-check-label inline-block cursor-pointer text-gray-800 flex w-full items-center" for="card1">
                                        <img src='./images/mastercard.png' className='w-12 ml-2 mr-4' />
                                        Mastercard ...4242
                                        <span className='exp ml-auto'>Exp. 10/2025</span>
                                    </label>
                                </div>
                                <div class="form-check flex items-center rounded bg-gray-100 px-4 py-2 mb-3 w-full">
                                    <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
                                    type="radio" name="flexRadioDefault" id="card2" />
                                    <label class="form-check-label inline-block cursor-pointer text-gray-800 flex w-full items-center" for="card2">
                                        <img src='./images/visacard.png' className='w-12 ml-2 mr-4' />
                                        Visa  ...4242
                                        <span className='exp ml-auto'>Exp. 10/2026</span>
                                    </label>
                                </div>
                                {/* <div class="form-check flex items-center px-4 py-2 mb-3 w-full">
                                    <label class="form-check-label inline-block cursor-pointer text-gray-800 flex w-full items-center ml-6" for="card2">
                                        <img src='./images/demo-card.png' className='w-12 ml-2 mr-4' />
                                        Add New Card
                                    </label>
                                </div> */}
                                <div className='flex justify-between mt-12'>
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Use Card</button>
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
    </>
  )
}

export default Dashboard
