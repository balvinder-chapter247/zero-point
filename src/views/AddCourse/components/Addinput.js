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
        setInputList([...inputList, { firstName: "", lastName: "" }]);
    };

    return (
        <>
            {inputList.map((x, i) => {
                return (
                    <>
                    <div className="justify-content-center custom">
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
        </>
    )
}
export default AddInputs