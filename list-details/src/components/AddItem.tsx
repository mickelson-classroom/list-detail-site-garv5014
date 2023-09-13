import { useState, FC } from "react";
import IListItem from "../interfaces/IListItem";
import { CustomTextInput } from "./CustomTextInput";

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
      "Est Hrs": 0,
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
    "Est Hrs": 0,
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



        <div>
          <label htmlFor="Est_Hrs" className="form-label h4 mt-2">
            Estimated Hours:
          </label>
          <input
            type="number"
            id="Est_Hrs"
            className={`form-control mb-4 ${
              itemInfo?.["Est Hrs"] > 0 ? "is-valid" : "is-invalid"
            }`}
            value={itemInfo?.["Est Hrs"]}
            placeholder="Estimated Hours"
            onChange={(e) => handleChange(e.target.value, "Est Hrs")}
            required
          />
          <div className="invalid-feedback">
            Please enter a valid number great then 0
          </div>
        </div>
        
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
