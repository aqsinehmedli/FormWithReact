import React from 'react';

const FormItem = ({label,name,type,placeholder,handleInputChnage}) => {
    return(
        <div className='flex flex-col'>
            <label htmlFor="{name}">{label}</label>
            <input type={type} name={name} placeholder={placeholder} onChange={(e) => {
                handleInputChnage(e.target.name,e.target.value)
            }} className='border p-2 rounded=md' />
        </div>
    )
}
export default FormItem