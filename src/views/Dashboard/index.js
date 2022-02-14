import React from 'react'
import { TabGroup } from '@statikly/funk'
import InnerPageBanner from '../../components/InnerPageBanner'

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
                                className="w-full text-left py-3 px-4 transition-colors duration-150"
                                activeClassName="bg-blue-500 text-white"
                                inactiveClassName="text-black"
                            >
                                Profile Setting
                            </TabGroup.Tab>
                            <TabGroup.Tab
                                index={1}
                                className="w-full text-left py-3 px-4 transition-colors duration-150"
                                activeClassName="bg-blue-500 text-white"
                                inactiveClassName="text-black"
                            >
                                Change Password
                            </TabGroup.Tab>
                            <TabGroup.Tab
                                index={2}
                                className="w-full text-left py-3 px-4 transition-colors duration-150"
                                activeClassName="bg-blue-500 text-white"
                                inactiveClassName="text-black"
                            >
                                My Transactions
                            </TabGroup.Tab>
                            <TabGroup.Tab
                                index={3}
                                className="w-full text-left py-3 px-4 transition-colors duration-150"
                                activeClassName="bg-blue-500 text-white"
                                inactiveClassName="text-black"
                            >
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
                        <form>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className=''>
                                    <label className="mb-2 block text-sm font-medium">First Name</label>
                                    <input type="text" name="first_name"
                                        value="" className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full"
                                        placeholder="First Name" />
                                    
                                </div>
                                <div className=''>
                                    <label className="mb-2 block text-sm font-medium">Last Name</label>
                                    <input type="text" name="first_name"
                                        value="" className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full"
                                        placeholder="Last Name" />
                                    
                                </div>
                                <div className=''>
                                    <label className="mb-2 block text-sm font-medium">Email</label>
                                    <input type="text" name="first_name"
                                        value="" className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full"
                                        placeholder="Email" />
                                    
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
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold mt-6 uppercase py-2 px-8 rounded">
                                Submit</button>
                        </form>
                        </TabGroup.TabPanel>
                        <TabGroup.TabPanel
                        index={1}
                        className="transition-all transform"
                        activeClassName="opacity-100 duration-500 translate-x-0"
                        inactiveClassName="absolute opacity-0 -translate-x-2"
                        >
                        <h4 className='account-title mb-6 pb-2'>Change Password</h4>
                        <form>
                            <div className='grid grid-cols-1 gap-4'>
                                <div className=''>
                                    <label className="mb-2 block text-sm font-medium">Current Password</label>
                                    <input type="text" name="first_name"
                                        value="" className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full"
                                        placeholder="Current Password" />
                                </div>
                                <div className=''>
                                    <label className="mb-2 block text-sm font-medium">New Password</label>
                                    <input type="text" name="first_name"
                                        value="" className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full"
                                        placeholder="New Password" />
                                </div>
                                <div className=''>
                                    <label className="mb-2 block text-sm font-medium">Confirm Password</label>
                                    <input type="text" name="first_name"
                                        value="" className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full"
                                        placeholder="Confirm Password" />
                                </div>
                            </div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold mt-6 uppercase py-2 px-8 rounded">
                                Reset Password</button>
                        </form>
                        </TabGroup.TabPanel>
                        <TabGroup.TabPanel
                        index={2}
                        className="transition-all transform"
                        activeClassName="opacity-100 duration-500 translate-x-0"
                        inactiveClassName="absolute opacity-0 -translate-x-2"
                        >
                        <h4 className='account-title mb-6 pb-2'>My Transactions</h4>
                        <div class="flex flex-col">
                            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="overflow-hidden">
                                    <table class="min-w-full">
                                    <thead class="bg-white border-b">
                                        <tr>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            S.No.
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Name
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Date
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Discount
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Total Amount
                                        </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Nafish
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                DD-MM-YYYY
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                10%
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                $100
                                            </td>
                                        </tr> */}
                                    </tbody>
                                    </table>
                                    <div className='no-transaction text-center pt-12'>
                                        <img src="./images/no-transactions.png" className='w-16 mx-auto pb-2' />
                                        <p>No Transaction made yet.</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        </TabGroup.TabPanel>
                        <TabGroup.TabPanel
                        index={3}
                        className="transition-all transform"
                        activeClassName="opacity-100 duration-500 translate-x-0"
                        inactiveClassName="absolute opacity-0 -translate-x-2"
                        >
                        <h4 className='account-title mb-6 pb-2'>Save Payment</h4>
                        <div className='payment-method'>
                        <div className='grid grid-cols-5 gap-4'>
                        <div class="col-span-3">
                        <div className='p-6 rounded card-box'>
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
                                <div class="form-check flex items-center px-4 py-2 mb-3 w-full">
                                    <label class="form-check-label inline-block cursor-pointer text-gray-800 flex w-full items-center ml-6" for="card2">
                                        <img src='./images/demo-card.png' className='w-12 ml-2 mr-4' />
                                        Add New Card
                                    </label>
                                </div>
                                <div className='flex justify-between mt-12'>
                                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                    Cancel</button>
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Use Card</button>
                                </div>
                        </div>
                                
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
