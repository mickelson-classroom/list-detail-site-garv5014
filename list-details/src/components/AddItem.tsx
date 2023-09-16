import { useState, FC } from "react";
import IListItem from "../interfaces/IListItem";
import { CustomTextInput } from "./CustomTextInput";
import { Select } from "@mui/material";
import SelectDropdown from "./SelectDropdown";

export const AddItem: FC<{ handleAdd: (item: IListItem) => void }> = ({
  handleAdd,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleAdd(itemInfo);
    setItemInfo({
      id: crypto.randomUUID(),
      Name: "",
      Details: "",
      owners: [],
      "Est Hrs": "",
      "Date Created": "",
      "Due Date": "",
      isUrgent: false,
    });
  };

  const handleChange = (value: string | boolean, name: string) => {
    console.log(value, name);
    setItemInfo((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const [itemInfo, setItemInfo] = useState<IListItem>({
    id: crypto.randomUUID(),
    Name: "",
    Details: "",
    owners: [],
    "Est Hrs": "",
    "Date Created": "",
    "Due Date": "",
    isUrgent: false,
  });

  return (
    <div className="row">
      <form
        onSubmit={handleSubmit}
        className="form needs-validation"
        noValidate
      >
        <CustomTextInput
          validationCondition={(value: string) => value.length !== 0}
          label={"Name"}
          forHtml={"Item_Name"}
          handleParentChange={(newValue: string) =>
            handleChange(newValue, "Name")
          }
          validFeedback="Looks good!"
          invalidFeedback="Please enter a name"
        />

        <CustomTextInput
          validationCondition={(value: string) => value.length !== 0}
          label={"Details"}
          forHtml={"Item_Details"}
          handleParentChange={(newValue: string) =>
            handleChange(newValue, "Details")
          }
          validFeedback="Looks good!"
          invalidFeedback="Please enter some item details"
        />

        <SelectDropdown
          options={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
            { value: "4", label: "4" },
          ]}
          value={itemInfo?.["Est Hrs"]}
          onChange={(newValue) => {
            handleChange(newValue, "Est Hrs");
          }}
        />

        <div>
          <label htmlFor="Date_Created" className="form-label h4 mt-2">
            Date Created:
          </label>
          <input
            type="date"
            id="Date_Created"
            className={`form-control mb-4 ${
              itemInfo?.["Date Created"] > Date.now().toLocaleString()
                ? "is-valid"
                : "is-invalid"
            }`}
            value={itemInfo?.["Date Created"]}
            placeholder="Date Created"
            onChange={(e) => handleChange(e.target.value, "Date Created")}
          />
          <div className="invalid-feedback">
            Please enter a date after today
          </div>
        </div>

        <div>
          <label htmlFor="Due_Date " className="form-label h4 mt-2">
            Date Due:
          </label>
          <input
            type="date"
            id="Due_Date "
            className={`form-control mb-4 ${
              itemInfo?.["Due Date"] > Date.now().toLocaleString()
                ? "is-valid"
                : "is-invalid"
            }`}
            value={itemInfo?.["Due Date"]}
            placeholder="Date Due"
            onChange={(e) => handleChange(e.target.value, "Due Date")}
            required
          />
          <div className="invalid-feedback">
            Please enter a date after today
          </div>
        </div>

        <div className="form-check form-switch">
          <label htmlFor="isUrgent" className="form-label h4 my-2">
            Urgent
          </label>
          <input
            type="checkbox"
            id="isUrgent"
            role="switch"
            className="form-check-input mt-3"
            onChange={(e) => handleChange(e.target.checked, "isUrgent")}
          />
        </div>

        <button type="submit" className="btn btn-primary ">
          Add
        </button>
      </form>
    </div>
  );
};
