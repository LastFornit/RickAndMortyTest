import React from "react";

const TextField = ({ label, name, value, onChange }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  const getInputClasses = () => {
    return "form-control";
  };

  return (
    <div className="mb-4  m-2 control-filter control-panel">
      <label htmlFor={name}> {label}</label>
      <div className="input-group has-validation  ">
        <input
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className={getInputClasses()}
        />
      </div>
    </div>
  );
};

export default TextField;
