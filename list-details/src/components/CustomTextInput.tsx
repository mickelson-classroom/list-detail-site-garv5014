import { FC, useState } from "react";

export const CustomTextInput: FC<{
  validationCondition: (value: string) => boolean;
  label: string;
  forHtml: string;
  invalidFeedback?: string;
  validFeedback?: string;
  handleParentChange: (newValue: string) => void;
  isRequired?: boolean;
  startingValue?: string;
}> = ({
  validationCondition,
  label,
  forHtml,
  validFeedback,
  invalidFeedback,
  handleParentChange,
  isRequired,
  startingValue,
}) => {
  const [inputValue, setInputValue] = useState(startingValue);
  const [isValid, setIsValid] = useState(validationCondition(startingValue || ""));

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
        required={isRequired}
      />
      {invalidFeedback && (
        <div className="invalid-feedback">{invalidFeedback}</div>
      )}
      {validFeedback && <div className="valid-feedback">{validFeedback}</div>}
    </div>
  );
};
