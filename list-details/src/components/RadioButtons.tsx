import React, { FC } from "react";

const RadioButton: FC<{
  options: Array<{ value: any; label: string }>;
  selectedOption: string;
  onChange: (newValue: string) => void;
  label: string;
}> = ({ options, selectedOption, onChange, label }) => {
  return (
    <div>
      <label className="h3">{label}</label>
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
              onChange={(e) => {
                onChange(e.target.value);
              }}
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
