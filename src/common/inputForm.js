import React from 'react'
const InputForms = (
    {
        className,
        labelclassName,
        inputclassName,
        labeltext,
        type = "text",
        id = "",
        placeholder = "",
        name,
        value,
        maxLength,
        required = false,
        readOnly = false,
        disabled = false,
        errorMessage = "",
        onChange,
        icon,
        selected,
        src
    }
) => {
    return (
        <>
        </>
        // <>
        //     <label className={className}>
        //         <input type={type} name={name}
        //             value={value}
        //             onChange={handleChange}
        //             className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full"
        //             placeholder="First Name" />
        //         <span className='form-icon absolute right-2'>
        //             <img src={src} />
        //         </span>
        //     </label>

        //     <span className='error text-red-500 text-sm font-medium'>
        //         {errorMessage}
        //     </span>

        // </>
    )
}
export default InputForms