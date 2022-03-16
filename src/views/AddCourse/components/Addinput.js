import React, { useState } from 'react';
import InputForms from '../../../common/inputForm';
import ReactTooltip from 'react-tooltip';
import { useEffect } from 'react';
import { Toaster } from '../../../helper/react-toast';
import { ToastContainer } from 'react-toastify';

const AddInputs = (props) => {

    useEffect(()=>
    {
        console.log(props,"this is props")
        props.setClick(handleAddClick)
    },[])
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
       
    }

    return (
        <>
         
        </>
    )
}
export default AddInputs