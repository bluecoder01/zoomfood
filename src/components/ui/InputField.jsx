import React from "react";
import "./index.scss"

function InputField({ field, label, type, value, onChange, isValid, errorMessage}) {

  return (
    <div className={`input-field ${field}`}>
      {label && <label htmlFor={field}>{label}</label>}
      <input type={type} id="type" value={value}  onChange={onChange}/>
      {!isValid && <p className="error">{errorMessage}</p>}
    </div>
  );
}

export default InputField;
