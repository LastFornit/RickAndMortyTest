import React from "react";

const SelectField = ({
  label,
  value,
  onChange,
  defaultOption,
  options,
  name,
}) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  const getInputClasses = () => {
    return "form-select";
  };

  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.keys(options).map((optionName) => ({
          name: options[optionName].name,
          value: options[optionName]._id,
        }))
      : options;

  return (
    <div className="mb-4 control-filter control-panel">
      <label htmlFor="validationCustom04" className="form-label">
        {label}
      </label>
      <select
        className={getInputClasses()}
        id="validationCustom04"
        name={name}
        value={value}
        onChange={handleChange}
      >
        {/* <option disabled value="">
          {defaultOption}
        </option> */}
        {optionsArray &&
          optionsArray.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectField;
