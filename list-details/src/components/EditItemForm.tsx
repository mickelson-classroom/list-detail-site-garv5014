import { FC, useEffect, useState } from "react";
import IListItem from "../interfaces/IListItem";
import { CustomTextInput } from "./CustomTextInput";
import SelectDropdown from "./SelectDropdown";
import RadioButton from "./RadioButtons";

export const EditItemForm: FC<{
  item: IListItem;
  handleEdit: (item: IListItem) => void;
  toggleEdit: () => void;
}> = ({ item, handleEdit, toggleEdit }) => {
  const [edit, setEdit] = useState<boolean>(false);

  useEffect(() => {
    setEdit(!edit);
  }, [edit]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleEdit(itemInfo);
  };

  const handleChange = (value: string | boolean, name: string) => {
    setItemInfo((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const [itemInfo, setItemInfo] = useState<IListItem>(item);

  return (
    <>
      <div className="card">
        <div className="card-header h2">You are Editing Task: {item.Name}</div>
        <div className="card-body">
          <div className="row">
            <form onSubmit={handleSubmit} className="form needs-validation">
              <CustomTextInput
                validationCondition={(value: string) => value.length !== 0}
                label={"Name"}
                startingValue={itemInfo.Name}
                forHtml={"Item_Name"}
                handleParentChange={(newValue: string) =>
                  handleChange(newValue, "Name")
                }
                validFeedback="Looks good!"
                invalidFeedback="Please enter a name"
                isRequired={true}
              />

              <CustomTextInput
                validationCondition={(value: string) => value.length !== 0}
                label={"Details"}
                startingValue={itemInfo.Details}
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

              <RadioButton
                options={[
                  { value: "true", label: "Yes" },
                  { value: "false", label: "No" },
                ]}
                selectedOption={itemInfo.isUrgent.toString()}
                onChange={(newValue: string) => {
                  handleChange(newValue, "isUrgent");
                }}
                label={"Is This Urgent?"}
              />

              <button type="submit" className="btn btn-primary my-2">
                Add
              </button>
            </form>
            <button
              className="btn btn-success mt-4 mb-4 col"
              onClick={() => {
                toggleEdit();
              }}
            >
              Exit No Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
