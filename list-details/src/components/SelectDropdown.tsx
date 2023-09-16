import React, { FC } from "react";
type Option = { value: string; label: string };

const SelectDropdown: FC<{
  options: Array<Option>;
  value: string;
  onChange: (newValue:string) => void;
}> = ({ options, value, onChange, }) => {
  
  return (
    <div className="form-group">
      <label htmlFor="genericSelect">Select an option:</label>
      <select
        className="form-select"
        id="genericSelect"
        value={value}
        onChange={(e) => {
          e.preventDefault();
          onChange(e.target.value);
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDropdown;
