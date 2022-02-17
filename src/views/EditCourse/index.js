import React from "react";
import { Link } from 'react-router-dom';
import InnerPageBanner from "../../components/InnerPageBanner";

const EditCourse = () => {
    return(
        <>
        <main className="bg-gray-100">
        <InnerPageBanner title={"Fit and Fierce Over 40"} />
            <section className='sec-padding'>
                <div className="course-header border-b">
                    <div className="container mx-auto px-4 flex items-center justify-between pb-4">
                        <h2 className="font-bold text-3xl mb-0">Fit and Fierce Over 40</h2>
                        <button className="px-4 py-3 font-semibold text-sm bg-blue-500 hover:bg-blue-700 text-white rounded shadow-sm">Edit in Builder</button>
                    </div>
                </div>
            
                <div className="container m-auto px-4">
                    <div className="w-full">
                        <form className="py-4">
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                        Title</span>
                                    </label>
                                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Subtitle
                                    </label>
                                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter Subtitle" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                        Category</span>
                                    </label>
                                    <select className="bg-white border rounded focus:border-gray-300 w-full font-medium text-sm focus:border-gray-500 block py-2 px-3">
                                        <option selected>Choose Option</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                        Sub Category</span>
                                    </label>
                                    <select className="bg-white border rounded focus:border-gray-300 w-full font-medium text-sm focus:border-gray-500 block py-2 px-3">
                                        <option selected>Choose Option</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                        Level</span>
                                    </label>
                                    <select className="bg-white border rounded focus:border-gray-300 w-full font-medium text-sm focus:border-gray-500 block py-2 px-3">
                                        <option selected>Choose Option</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                        Price</span>
                                    </label>
                                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="$100.00" />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                            Learning Objectives</span>
                                    </label>
                                    <div className="mb-3 flex items-center">
                                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter Objectives" />
                                        <img className="ml-2 w-4" src="https://img.icons8.com/material-sharp/24/000000/multiply.png"/>
                                    </div>
                                    <div className="mb-3 flex items-center">
                                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter Objectives" />
                                        <img className="ml-2 w-4" src="https://img.icons8.com/material-sharp/24/000000/multiply.png"/>
                                    </div>
                                    <div className="mb-3 flex items-center">
                                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter Objectives" />
                                        <img className="ml-2 w-4" src="https://img.icons8.com/material-sharp/24/000000/multiply.png"/>
                                    </div>
                                    <div className="text-center">
                                        <button className='bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded uppercase font-medium text-sm'>Add Objective</button>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                            Banner Image</span>
                                    </label>
                                    <img className="h-48 w-full object-cover" src="https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                                </div>
                            </div>
                            <div className="gap-6">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                            Details</span>
                                    </label>
                                </div>
                            </div>
                            <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-semibold mt-6 uppercase py-2 px-8 rounded">
                            Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}

export default EditCourse;