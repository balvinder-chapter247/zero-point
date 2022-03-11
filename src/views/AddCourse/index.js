import React, { useState, useEffect } from 'react'
import validate from 'validate.js';
import { toast, ToastContainer } from 'react-toastify';
import { Toaster } from '../../helper/react-toast';
import { AddCourseSchema } from '../../validators';
import InnerPageBanner from '../../components/InnerPageBanner';
import InputForms from '../../../src/common/inputForm'
import SelectForm from '../../common/selectForm';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import AddInputs from './components/Addinput';
import { Link } from "react-router-dom";
import Category from './components/SelectValue';

const category = [
    {optionValue:"Programming", label:"Programming"},
    {optionValue:"Data Analytics", label:"Data Analytics"},
];
const subCategory = [
    {optionValue:"Web Development", label:"Web Development"},
    {optionValue:"Data Science", label:"Data Science"},
];

const AddCourse = () => {

    // const [category, setCategory] = React.useState();

    ///State for our form
    const [formState, setFormState] = React.useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
    });

    ///For validating error everytime change in inputs
    useEffect(() => {
        const errors = validate(formState.values, AddCourseSchema);
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
        console.log(formState.values.category, "test");
    };

    ///Submiting values to api.
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        
        if (formState.isValid) {
            let addedCourse = JSON.parse(localStorage.getItem("addedCourse"));
            let tempArray = addedCourse;
            tempArray.push(formState.values);
            localStorage.setItem("addedCourse", JSON.stringify(tempArray));
            {
                Toaster({
                    type: "success",
                    text: "Course Added Successfully."
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
    };

    const hasError = (field) =>
        formState.touched[field] && formState.errors[field] ? true : false;


    return (
        <>
            <main className="bg-gray-100">
                <InnerPageBanner title={"Add Course"} />
                <section className='sec-padding'>
                    <div className="course-header border-b">
                        <div className="container mx-auto px-4 flex items-center justify-between pb-4">
                            <h2 className="font-bold text-3xl mb-0">Add Course</h2>
                            <Link to="course-builder">
                                <button className="px-4 py-3 text-sm blue-btn text-white rounded shadow-sm">Edit in Builder</button>
                            </Link>
                        </div>
                    </div>

                    <div className="container m-auto ">
                        <div className="w-full">
                            <div className='bg-white p-4 pb-8 mt-6 rounded-lg'>
                                <form onSubmit={handleSubmit}>
                                    <div className="grid md:grid-cols-3 gap-4">
                                    <div className='col-span-2'>
                                       <div className="grid md:grid-cols-2 gap-4">
                                       <div className="">
                                            <InputForms
                                                labelText="Title"
                                                labelclassName="block font-medium mb-2 text-gray-700"
                                                labelRequired="*"
                                                type='text'
                                                name="title"
                                                value={formState.values.title || ""}
                                                errorMessage={hasError("title") ?
                                                    formState.errors.title[0] : null}
                                                onChange={handleChange}
                                                placeholder=""
                                            />
                                        </div>
                                        <div className="">
                                            <InputForms
                                                labelText="Sub Title"
                                                labelclassName="block font-medium mb-2 text-gray-700"
                                                className="block font-medium mb-0"
                                                type='text'
                                                name="sub_title"
                                                value={formState.values.sub_title || ""}
                                                onChange={handleChange}
                                                placeholder=""
                                            />
                                        </div>
                                        <div className="">
                                            <SelectForm className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full"
                                                labelText="Category"
                                                labelclassName="block font-medium mb-2 text-gray-700"
                                                labelRequired="*"
                                                name='category'
                                                value={formState.values.category || ""}
                                                errorMessage={hasError("category") ?
                                                    formState.errors.category[0] : null}
                                                onChange={handleChange}
                                                options={category}
                                            />
                                        </div>
                                        <div className="">
                                            <SelectForm className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full"
                                                labelText="Sub Category"
                                                labelclassName="block font-medium mb-2 text-gray-700"
                                                labelRequired="*"
                                                name='sub_category'
                                                value={formState.values.sub_category || ""}
                                                errorMessage={hasError("sub_category") ?
                                                    formState.errors.sub_category[0] : null}
                                                onChange={handleChange}
                                                options={subCategory}
                                            />
                                        </div>
                                        <div className="">
                                            <SelectForm className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full"
                                                labelText="Lavel"
                                                labelclassName="block font-medium mb-2 text-gray-700"
                                                labelRequired="*"
                                                name='lavel'
                                                value={formState.values.lavel || ""}
                                                errorMessage={hasError("lavel") ?
                                                    formState.errors.lavel[0] : null}
                                                onChange={handleChange}
                                                optionValue="lavel_1"
                                                optionName="Lavel 1"
                                            />
                                        </div>
                                        <div className="">
                                            <InputForms
                                                labelText="Price (USD)"
                                                labelRequired="*"
                                                labelclassName="block font-medium mb-2 text-gray-700"
                                                className="block font-medium"
                                                type='text'
                                                name="price"
                                                value={formState.values.price || ""}
                                                errorMessage={hasError("price") ?
                                                    formState.errors.price[0] : null}
                                                onChange={handleChange}
                                                placeholder="0.00"
                                            />
                                        </div>

                                        <div className="">
                                            <label className="block font-medium mb-2 text-gray-700">
                                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                                    Banner Image</span>
                                            </label>
                                            <input className="form-control
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
                                       </div> 
                                    </div>
                                    <div className='learning_objectives'>
                                        {/* Learning objective section starts here */}
                                        <AddInputs />
                                        {/* Learning objective section end here */}
                                    </div>
                                        
                                    <div className='col-span-3 mt-2'>
                                        <label className="block font-medium mb-2 text-gray-700">
                                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                                Details</span>
                                        </label>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            name='details'
                                            value={formState.values.details || ""}
                                            errorMessage={hasError("details") ?
                                                formState.errors.details[0] : null}
                                            onChange={handleChange}
                                            enterMode='CKEDITOR.ENTER_BR'
                                            shiftEnterMode='CKEDITOR.ENTER_P'
                                            onReady={(editor) => {
                                                // You can store the "editor" and use when it is needed.
                                                console.log('Editor is ready to use!', editor);
                                            }}
                                            // onChange={(event, editor) => {
                                            //     const data = editor.getData();
                                            //     console.log({ event, editor, data });
                                            //     //   setFormData({ ...formData, description: data });
                                            // }}
                                            onBlur={(event, editor) => {
                                                // console.log( 'Blur.', editor );
                                            }}
                                            onFocus={(event, editor) => {
                                                // console.log( 'Focus.', editor );
                                            }}
                                        />
                                    </div>
                                </div>
                                    <button type='submit' className="blue-btn text-white mt-6 py-2 px-8">
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