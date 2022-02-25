import React, { useState } from 'react';
import InputForms from '../../../common/inputForm';
import ReactTooltip from 'react-tooltip';
const AddInputs = () => {
    const [inputList, setInputList] = useState([{ objective: "" }]);

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

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { objective: "" }]);
    };

    return (
        <>
            <div className="">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                        Learning Objectives</span>
                </label>
                <div className="mb-3 items-center"></div>
                {inputList.map((x, i) => {
                    return (
                        <>
                            <div className={
                                `flex justify-center items-center  custom mt-2 width-100 ${inputList.length !== 1 ? "mt-2" : null}`}>
                                <InputForms
                                    className="block font-medium"
                                    type='text'
                                    name="objective"
                                    value={x.firstName}
                                    onChange={e => handleInputChange(e, i)}
                                    placeholder="Enter Objective"
                                />
                                <div className="remove_div_input">
                                    {inputList.length !== 1 && <button
                                        className="mr10"
                                        onClick={() => handleRemoveClick(i)}>
                                        <i className="fa-solid fa-trash-can delete-button" data-tip="Remove item" />
                                        <ReactTooltip />
                                    </button>}

                                </div>

                            </div>
                            {inputList.length - 1 === i && <button onClick={handleAddClick}>Add Objective</button>}
                        </>
                    );
                })}
            </div>
        </>
    )
}
export default AddInputs