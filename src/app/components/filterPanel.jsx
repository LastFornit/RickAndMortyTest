import React, { useState } from "react";
import RadioField from "./form/radio.Field";
import SelectField from "./form/selectField";
import TextField from "./form/textField";

const initialData = {
  name: "",
  status: "",
  species: "",
  type: "",
  gender: "",
};

const FilterPanel = ({ onFilterChange }) => {
  const [data, setData] = useState(initialData);

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const getFilterParamsAsString = () => {
    let resultRequest = "";
    Object.keys(data).forEach((param) => {
      if (data[param]) {
        resultRequest += resultRequest.length > 0 ? "&" : "";
        resultRequest += `${param}=${data[param]}`;
      }
    });

    return resultRequest;
  };

  const handleFilterClear = () => {
    onFilterChange("");
    setData(initialData);
  };
  // It's possible to filter Characters by name, status, species, type and gender.
  return (
    <div className="filter-panel-wrapper">
      <div className="d-flex ">
        <TextField
          label="name"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <TextField
          label="species"
          name="species"
          value={data.species}
          onChange={handleChange}
        />
        <TextField
          label="type"
          name="type"
          value={data.type}
          onChange={handleChange}
        />
        <SelectField
          label="Gender"
          defaultOption="any"
          name="gender"
          options={[
            { label: "any", value: "" },
            { label: "female", value: "female" },
            { label: "male", value: "male" },
            { label: "genderless", value: "genderless" },
            { label: "unknown", value: "unknown" },
          ]}
          onChange={handleChange}
          value={data.gender}
        />
        <RadioField
          options={[
            { name: "any", value: "" },
            { name: "unknown", value: "unknown" },
            { name: "alive", value: "alive" },
            { name: "dead", value: "dead" },
          ]}
          value={data.status}
          name="status"
          onChange={handleChange}
          label="status"
        />
        <div className="d-grid gap-2 d-md-flex justify-content-md-end btn-filter-wrapper">
          <button
            key="button_applay"
            type="submit"
            className="btn btn-primary btn-filter"
            onClick={() => onFilterChange(getFilterParamsAsString())}
          >
            Applay filter
          </button>
          <button
            key="button_clear"
            type="button"
            className="btn btn-primary btn-filter"
            onClick={() => handleFilterClear()}
          >
            Clear filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
