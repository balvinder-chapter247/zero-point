import React, { useState } from 'react';
import InputForms from '../../../common/inputForm';
import ReactTooltip from 'react-tooltip';
import { useEffect } from 'react';
import { Toaster } from '../../../helper/react-toast';
import { ToastContainer } from 'react-toastify';

const AddInputs = () => {
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
        if (inputList.length >= 5) {
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

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { objective: "" }]);
    };
    const handleChangeNormal = () => {
        // console.log("hello")
    }

    return (
        <>
            <div className='learning_objectives'>
                <div className='objective_items'>
                    <div className="obj_group">
                        <div className={
                            `justify-center items-center custom  width-100 ${inputList.length !== 1 ? "" : null}`}>
                            <InputForms
                                labelText=" Learning Objectives-1"
                                labelRequired="*"
                                labelclassName="block font-medium mb-2 text-gray-700"
                                className="block font-medium"
                                type='text'
                                name="objective1"
                                value={form.values}
                                onChange={handleChangeNormal}
                            />
                        </div>
                    </div>
                    <div className="obj_group">
                        <div className={
                            `justify-center items-center custom mt-2 width-100 `}>
                            <InputForms
                                labelText=" Learning Objectives-2"
                                labelRequired="*"
                                labelclassName="block font-medium mb-2 text-gray-700"
                                className="block font-medium"
                                type='text'
                                name="objective1"
                                value={form.values}
                                onChange={handleChangeNormal}
                            />
                        </div>
                    </div>

                    {inputList.map((x, i) => {
                        return (
                            <>
                                <div className="obj_group">
                                   
                                    <div className={
                                        `flex justify-center items-center  custom w-full `}>
                                        <InputForms
                                            labelText={`Learning Objectives-${2 + 1 + i}`}
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
        </>
    )
}
export default AddInputs