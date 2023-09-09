import { useState, FC } from "react";
import IListItem from "../interfaces/IListItem";

export const AddItem: FC<{ handleAdd: (item: IListItem) => void }> = ({
  handleAdd,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAdd(itemInfo);
  };

  const handleChange = (value: string | boolean, name: string) => {
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
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="Item Name" className="form-label h4 mt-2">
          Name
        </label>
        <input
          type="text"
          name="itemName"
          className="form-control"
          value={itemInfo?.Name}
          placeholder="Name"
          onChange={(e) => handleChange(e.target.value, "Name")}
          required
        />

        <label htmlFor="Item Details" className="form-label h4 mt-2">
          Details
        </label>
        <input
          type="text"
          name="itemDetails"
          className="form-control mb-4"
          value={itemInfo?.Details}
          placeholder="Details"
          onChange={(e) => handleChange(e.target.value, "Details")}
          required
        />

        <label htmlFor="Est_Hrs" className="form-label h4 mt-2">
          Estimated Hours:
        </label>
        <input
          type="number"
          name="Est_Hrs"
          className="form-control mb-4"
          value={itemInfo?.["Est Hrs"]}
          placeholder="Estimated Hours"
          onChange={(e) => handleChange(e.target.value, "Est Hrs")}
          required
        />

        <label htmlFor="Date Created" className="form-label h4 mt-2">
          Date Created:
        </label>
        <input
          type="date"
          name="Date Created"
          className="form-control mb-4"
          value={itemInfo?.["Date Created"]}
          placeholder="Date Created"
          onChange={(e) => handleChange(e.target.value, "Date Created")}
        />

        <label htmlFor="Due_Date " className="form-label h4 mt-2">
          Date Due:
        </label>
        <input
          type="date"
          name="Due_Date "
          className="form-control mb-4"
          value={itemInfo?.["Due Date"]}
          placeholder="Date Due"
          onChange={(e) => handleChange(e.target.value, "Due Date")}
          required
        />
        <div className="form-check form-switch">
          <label htmlFor="isUrgent" className="form-label h4 my-2">
            Urgent
          </label>
          <input
            type="checkbox"
            name="isUrgent"
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
