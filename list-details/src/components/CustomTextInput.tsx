import React, { FC, useState } from "react";

export const CustomTextInput: FC<{
  validationCondition: (value: string) => boolean;
  label: string;
  forHtml: string;
  invalidFeedback?: string;
  validFeedback?: string;
  handleParentChange: (newValue: string) => void;
}> = ({
  validationCondition,
  label,
  forHtml,
  validFeedback,
  invalidFeedback,
  handleParentChange,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (newValue: string) => {
    setInputValue(newValue);
    // Validate the input based on the provided condition
    setIsValid(validationCondition(newValue));
    handleParentChange(newValue);
  };

  return (
    <div>
      <label htmlFor={`${forHtml}`} className="form-label h4 mt-2">
        {label}
      </label>
      <input
        type="text"
        id={`${forHtml}`}
        className={`form-control ${isValid ? "is-valid" : "is-invalid"}`}
        value={inputValue}
        onChange={(e) => {
          e.preventDefault();
          handleChange(e.target.value);
        }}
      />
      {invalidFeedback && (
        <div className="invalid-feedback">{invalidFeedback}</div>
      )}
      {validFeedback && <div className="valid-feedback">{validFeedback}</div>}
    </div>
  );
};
