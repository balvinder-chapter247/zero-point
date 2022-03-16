import React, { useState, useEffect, useRef } from 'react'
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
import ReactTooltip from 'react-tooltip';


const category = [
    { optionValue: "Programming", label: "Programming" },
    { optionValue: "Data Analytics", label: "Data Analytics" },
];
const subCategory = [
    { optionValue: "Web Development", label: "Web Development" },
    { optionValue: "Data Science", label: "Data Science" },
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

    const manageEditorState = (editorState) => {
        const editorData = editorState.getData();
        setFormState((formState) => ({
            ...formState,
            values: {
                ...formState.values,
                details: editorData

            },
            touched: {
                ...formState.touched,
                details: true,
            },
        }));

    }
    const manageImageFile = (event) => {
        const imageFilepath = event.target.files[0] || ""
        setFormState((formState) => ({
            ...formState,
            values: {
                ...formState.values,
                courseImage: imageFilepath

            },
            touched: {
                ...formState.touched,
                courseImage: true,
            },
        }));
    }
    const [inputList, setInputList] = useState([{ objective: "" }]);
    const [form, setFormValue] = useState(
        {
            values: ""
        }
    )

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    ///For disable button after 7 objectives
    const [isDisabledAdding, setIsDisabledAdding] = useState(false)
    useEffect(() => {
        
        if (inputList.length >= 4) {
            setIsDisabledAdding(true);
            Toaster(
                {
                    type: "info",
                    text: "You reached max limit of adding objectives."
                }
            )
        }
        else setIsDisabledAdding(false)
    }, [inputList])

    const handleAddClick = () => {
        setInputList([...inputList, { objective: "" }]);
    };


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
                                                    <label className="block text-gray-700 text-sm  font-bold mb-2">
                                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                                            Title</span>
                                                    </label>
                                                    <InputForms
                                                        className="block font-medium"
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
                                                    <label className="block text-gray-700 text-sm  font-bold mb-2">
                                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                                            Subtitle</span>
                                                    </label>
                                                    <InputForms
                                                        className="block font-medium mb-0"
                                                        type='text'
                                                        name="sub_title"
                                                        value={formState.values.sub_title || ""}
                                                        onChange={handleChange}
                                                        errorMessage={hasError("sub_title") ?
                                                            formState.errors.sub_title[0] : null}
                                                        placeholder=""
                                                    />
                                                </div>
                                                <div className="">
                                                    <label className="block text-gray-700 text-sm  font-bold mb-2">
                                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                                            Category</span>
                                                    </label>
                                                    <select className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full"
                                                        name='category'
                                                        value={formState.values.category || ""}
                                                        onChange={handleChange}
                                                    >
                                                        <option>Choose Option</option>
                                                        <option value="category 1">Option 1</option>
                                                        <option value="category 2">Option 2</option>
                                                        <option value="category 3">Option 3</option>
                                                    </select>
                                                    <div>
                                                        <span className='error text-red-500 text-sm font-medium'>
                                                            {hasError("category") ?
                                                                formState.errors.category[0] : null}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                                            Sub Category</span>
                                                    </label>
                                                    <select className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full"
                                                        name='sub_category'
                                                        value={formState.values.sub_category || ""}

                                                        onChange={handleChange}
                                                    >
                                                        <option selected>Choose Option</option>
                                                        <option value="Sub Category 1">Option 1</option>
                                                        <option value="Sub Category 2">Option 2</option>
                                                        <option value="Sub Category 3">Option 3</option>
                                                    </select>
                                                    <div>
                                                        <span className='error text-red-500 text-sm font-medium'>
                                                            {hasError("sub_category") ?
                                                                formState.errors.sub_category[0] : null}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                                            Level</span>
                                                    </label>
                                                    <select className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full"
                                                        name='level'
                                                        value={formState.values.level || ""}

                                                        onChange={handleChange}
                                                    >
                                                        <option>Choose Option</option>
                                                        <option value="Level 1">Level 1</option>
                                                        <option value="Level 2">Level 2</option>
                                                        <option value="Level 3">Level 3</option>
                                                    </select>
                                                    <div>
                                                        <span className='error text-red-500 text-sm font-medium'>
                                                            {hasError("level") ?
                                                                formState.errors.level[0] : null}
                                                        </span>
                                                    </div>
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
                                                        value={formState.values.price || ""}
                                                        errorMessage={hasError("price") ?
                                                            formState.errors.price[0] : null}
                                                        onChange={handleChange}
                                                        placeholder=""
                                                    />
                                                </div>

                                                <div className="">
                                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
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
                                            focus:text-gray-700 focus:bg-white focus:border-blue-400 focus:outline-none"
                                                        type="file"
                                                        name="bannerImage"


                                                        onChange={manageImageFile}
                                                    />
                                                    <span className='error text-red-500 text-sm font-medium'>
                                                        {hasError("courseImage") ?
                                                            formState.errors.courseImage[0] : null}
                                                    </span>
                                                </div>
                                                <div>

                                                </div>
                                                {/* <span className='error text-red-500 text-sm font-medium'>
                                                    {hasError("bannerImage") ?
                                                        formState.errors.bannerImage[0] : null}
                                                </span> */}
                                            </div>
                                        </div>

                                        {/* Learning objective section starts here */}
                                        <div className='learning_objectives'>
                                            <div className='objective_items'>
                                                <div className="obj_group">
                                                    <div className={
                                                        `justify-center items-center custom  width-100 ${inputList.length !== 1 ? "" : null}`}>
                                                        <label className="block text-gray-700 text-sm  font-bold mb-2">
                                                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                                                Learning Objectives-1</span>
                                                        </label>
                                                        <InputForms

                                                            labelRequired="*"
                                                            labelclassName="block font-medium mb-2 text-gray-700"
                                                            className="block font-medium"
                                                            type='text'
                                                            value={formState.values.objective1 || ""}
                                                            errorMessage={hasError("objective1") ?
                                                                formState.errors.objective1[0] : null}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="obj_group">
                                                    <div className={
                                                        `justify-center items-center custom mt-2 width-100 `}>
                                                        <label className="block text-gray-700 text-sm  font-bold mb-2">
                                                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                                                Learning Objectives-2</span>
                                                        </label>
                                                        <InputForms

                                                            labelRequired="*"
                                                            labelclassName="block font-medium mb-2 text-gray-700"
                                                            className="block font-medium"
                                                            type='text'
                                                            value={formState.values.objective2 || ""}
                                                            errorMessage={hasError("objective2") ?
                                                                formState.errors.objective2[0] : null}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="obj_group">
                                                    <div className={
                                                        `justify-center items-center custom mt-2 width-100 `}>
                                                        <label className="block text-gray-700 text-sm  font-bold mb-2">
                                                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                                                Learning Objectives-3</span>
                                                        </label>
                                                        <InputForms

                                                            labelRequired="*"
                                                            labelclassName="block font-medium mb-2 text-gray-700"
                                                            className="block font-medium"
                                                            type='text'
                                                            value={formState.values.objective3 || ""}
                                                            errorMessage={hasError("objective3") ?
                                                                formState.errors.objective3[0] : null}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                
                                                { inputList.map((x, i) => {
                                                    return (
                                                        <>
                                                            <div className="obj_group">
                                                                <label className="block text-gray-700 text-sm  font-bold mb-2">
                                                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                                                        {`Learning Objectives-${3 + 1 + i}`}</span>
                                                                </label>

                                                                <div className={
                                                                    `flex justify-center items-center  custom w-full `}>
                                                                    <InputForms

                                                                        labelRequired="*"
                                                                        labelclassName="block font-medium mb-2 text-gray-700"
                                                                        className="block font-medium w-full"
                                                                        type='text'
                                                                        name="objective"
                                                                        value={x.firstName}
                                                                        onChange={e => handleInputChange(e, i)}
                                                                    />
                                                                    <div className="remove_div_input">
                                                                        {inputList.length !== 1 && <div
                                                                            className="mx-2"
                                                                            onClick={() => handleRemoveClick(i)}>
                                                                            <i className="fa-solid fa-trash-can delete-button" data-tip="Remove item" />
                                                                            <ReactTooltip />
                                                                        </div>}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    );
                                                })}
                                                {/* <AddInputs setClick={click => clickChild = click}/> */}
                                            </div>
                                            <div className='add_btn' data-tip={isDisabledAdding ? "You can add max 7" : ""}>
                                                <button type='button' onClick={handleAddClick}
                                                    className={`blue-btn text-white font-semibold mt-4 py-2 px-4 rounded ${isDisabledAdding ? "disabled" : ""}`}
                                                    disabled={isDisabledAdding}
                                                >
                                                    Add Objectives
                                                </button>
                                            </div>
                                        </div>
                                        <ToastContainer
                                            position="right"
                                            autoClose={5000}
                                            hideProgressBar={false}
                                            newestOnTop={false}
                                            closeOnClick
                                            rtl={false}
                                            pauseOnFocusLoss
                                            draggable
                                            pauseOnHover
                                        />

                                        {/* Learning objective section end here */}

                                        <div className='col-span-3 mt-2'>
                                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                                    Details</span>
                                            </label>
                                            <CKEditor
                                                editor={ClassicEditor}

                                                name='details'
                                                value={formState.values.details || ""}
                                                errorMessage={hasError("details") ?
                                                    formState.errors.details[0] : null}
                                                // onChange={handleChange}
                                                enterMode='CKEDITOR.ENTER_BR'
                                                shiftEnterMode='CKEDITOR.ENTER_P'
                                                onReady={(editor) => {
                                                    // You can store the "editor" and use when it is needed.
                                                    console.log('Editor is ready to use!', editor);
                                                }}
                                                onChange={(event, editor) => {
                                                    manageEditorState(editor)

                                                }}
                                                onBlur={(event, editor) => {
                                                    // console.log( 'Blur.', editor );
                                                }}
                                                onFocus={(event, editor) => {
                                                    // console.log( 'Focus.', editor );
                                                }}
                                            />
                                            <div>
                                                <span className='error text-red-500 text-sm font-medium'>
                                                    {hasError("details") ?
                                                        formState.errors.details[0] : null}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <button type='submit' className="blue-btn text-white font-semibold mt-6 py-2 px-8">
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