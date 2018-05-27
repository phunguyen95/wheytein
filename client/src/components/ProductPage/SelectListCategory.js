import React from 'react'

function SelectListGroup({name, value, error, onChange,input,checked}) {
   
    return (
        <div className="wrapped_check_box_container">
            <div className="wrapped_check_box">
            <input type="checkbox" className="form__checkbox" 
            name={name}
            onChange={onChange}
            checked={checked}
            >
            </input>
            </div>
            <div className="brand__checkbox">
                <span>{input}</span>
            </div>
        </div>
    )
}

export default SelectListGroup;
