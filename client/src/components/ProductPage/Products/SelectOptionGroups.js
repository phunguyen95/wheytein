import React from 'react'

function SelectOptionGroups({name, value, error, onChange,options}) {
    const selectOptions = options.map(option => (
        <option className="option_style" key={option.label} value={option.value}>
          {option.label}
        </option>
      ));
    return (
        <div className="form-group">
            <select 
            name={name}
            value={value}
            onChange={onChange}
            className="select__form__control">
                {selectOptions}
            </select>
        </div>
    )
}

export default SelectOptionGroups
