import React from 'react'
import validate from 'validate.js';
import InnerPageBanner from '../../components/InnerPageBanner';
import InputForms from '../../../src/common/inputForm'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddCourse = () => {
  return (
    <>
      <main className="bg-gray-100">
        <InnerPageBanner title={"Add Course"} />
            <section className='sec-padding'>
                <div className="course-header border-b">
                    <div className="container mx-auto px-4 flex items-center justify-between pb-4">
                        <h2 className="font-bold text-3xl mb-0">Add Course</h2>
                        {/* <button className="px-4 py-3 font-semibold text-sm bg-blue-500 hover:bg-blue-700 text-white rounded shadow-sm">Add New Course +</button> */}
                    </div>
                </div>
            
                <div className="container m-auto px-4">
                    <div className="w-full">
                        <div className='bg-white p-4 pb-8 mt-6 rounded-lg'>
                            <form>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="">
                                        <label className="block text-gray-700 font-bold mb-2">
                                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                            Title</span>
                                        </label>
                                        <InputForms
                                            className="block font-medium"
                                            type='text'
                                            name="title"
                                            value=""
                                            placeholder="Enter Title"
                                        />
                                    </div>
                                    <div className="">
                                        <label className="block text-gray-700 font-bold mb-2">Sub Title</label>
                                        <InputForms
                                            className="block font-medium"
                                            type='text'
                                            name="sub_title"
                                            value=""
                                            placeholder="Enter Sub Title"
                                        />
                                    </div>
                                    <div className="">
                                        <label className="block text-gray-700 font-bold mb-2">
                                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                            Category</span>
                                        </label>
                                        <select className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full">
                                            <option selected>Choose Option</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                    </div>
                                    <div className="">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                            Sub Category</span>
                                        </label>
                                        <select className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full">
                                            <option selected>Choose Option</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                    </div>
                                    <div className="">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                            Level</span>
                                        </label>
                                        <select className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full">
                                            <option selected>Choose Option</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                    </div>
                                    <div className="">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                            Price</span>
                                        </label>
                                        <InputForms
                                            className="block font-medium"
                                            type='text'
                                            name="price"
                                            value=""
                                            placeholder="$99.95"
                                        />
                                    </div>
                                
                                    <div className="">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                                Learning Objectives</span>
                                        </label>
                                        <div className="mb-3 flex items-center">
                                            <InputForms
                                            className="block font-medium w-full"
                                            type='text'
                                            name="learning_objectives"
                                            value=""
                                            placeholder="Enter Objectives"
                                        />
                                            <img className="ml-2 w-4" src="https://img.icons8.com/material-sharp/24/000000/multiply.png"/>
                                        </div>
                                        <div className="mb-3 flex items-center">
                                            <InputForms
                                            className="block font-medium w-full"
                                            type='text'
                                            name="learning_objectives"
                                            value=""
                                            placeholder="Enter Objectives"
                                        />
                                            <img className="ml-2 w-4" src="https://img.icons8.com/material-sharp/24/000000/multiply.png"/>
                                        </div>
                                        <div className="text-center">
                                            <button className='bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded uppercase font-medium text-sm'>Add Objective</button>
                                        </div>
                                    </div>
                                    <div className="">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                                Banner Image</span>
                                        </label>
                                        <input class="form-control
                                            block
                                            w-full
                                            px-3
                                            py-1.5
                                            text-base
                                            font-normal
                                            text-gray-700
                                            bg-white bg-clip-padding
                                            border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-0
                                            focus:text-gray-700 focus:bg-white focus:border-blue-400 focus:outline-none" type="file" />
                                    </div>
                                    <div className='col-span-3'>
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                            Details</span>
                                        </label>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            // data="Enter Description"
                                            placeholder="Enter Description"
                                            config={{ placeholder: 'Enter Description' }}
                                            name='description'
                                            enterMode='CKEDITOR.ENTER_BR'
                                            shiftEnterMode='CKEDITOR.ENTER_P'
                                            onReady={(editor) => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log('Editor is ready to use!', editor);
                                            }}
                                            onChange={(event, editor) => {
                                            const data = editor.getData();
                                            console.log({ event, editor, data });
                                            //   setFormData({ ...formData, description: data });
                                            }}
                                            onBlur={(event, editor) => {
                                            // console.log( 'Blur.', editor );
                                            }}
                                            onFocus={(event, editor) => {
                                            // console.log( 'Focus.', editor );
                                            }}
                                        />
                                    </div>
                                </div>
                                <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-semibold mt-6 uppercase py-2 px-8 rounded">
                                Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default AddCourse