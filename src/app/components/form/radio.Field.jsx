import React from "react";

const RadioField = ({ options, name, onChange, value, label }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  return (
    <div className="mb-4 m-2 control-filter gender-wrapper control-panel">
      <label className="form-label">{label}</label>
      <div className="container">
        <div className="row">
          {options.map((option) => (
            <div
              key={option.name + "_" + option.value}
              className="form-check form-check-inline col-6 col-sm-3 ms-2 me-4"
            >
              <input
                className="form-check-input"
                type="radio"
                name={name}
                id={option.name + "_" + option.value}
                checked={option.value === value}
                value={option.value}
                onChange={handleChange}
              />
              <label
                className="form-check-label"
                htmlFor={option.name + "_" + option.value}
              >
                {option.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RadioField;
