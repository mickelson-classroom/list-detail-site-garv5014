import React, { FC } from "react";

const RadioButton: FC<{
  options: [{ value: any; label: string }];
  selectedOption: string;
  onChange: () => void;
}> = ({ options, selectedOption, onChange }) => {
  return (
    <div>
      <label>Select an option:</label>
      <div>
        {options.map((option) => (
          <div key={option.value} className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="genericRadioGroup"
              id={option.value}
              value={option.value}
              checked={selectedOption === option.value}
              onChange={onChange}
            />
            <label className="form-check-label" htmlFor={option.value}>
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioButton;
