import { FC, useEffect, useState } from "react";
import IListItem from "../interfaces/IListItem";

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

  const [itemInfo, setItemInfo] = useState<IListItem>({
    id: crypto.randomUUID(),
    Name: item.Name,
    Details: item.Details,
    owners: item.owners,
    "Est Hrs": item["Est Hrs"],
    "Date Created": item["Date Created"],
    "Due Date": item["Due Date"],
    isUrgent: false,
  });

  return (
    <>
      <div className="card">
        <div className="card-header h2">
          {" "}
          You are Editing Task: {item.Name}{" "}
        </div>
        <div className="card-body">
          <div className="row">
            <form
              onSubmit={handleSubmit}
              className="form needs-validation"
              noValidate
            >
              <div>
                <label htmlFor="Item_Name" className="form-label h4 mt-2">
                  New Name
                </label>
                <input
                  type="text"
                  name="Item_Name"
                  className={`form-control ${
                    itemInfo?.Name ? "is-valid" : "is-invalid"
                  }`}
                  value={itemInfo?.Name}
                  placeholder="Name"
                  onChange={(e) => handleChange(e.target.value, "Name")}
                  required
                />
                <div className="invalid-feedback">
                  Please enter a valid name.
                </div>
                <div className="valid-feedback">Good job</div>
              </div>

              <div>
                <label htmlFor="Item_Details" className="form-label h4 mt-2">
                  Details
                </label>
                <input
                  type="text"
                  id="Item_Details"
                  className={`form-control mb-4 ${
                    itemInfo?.Details ? "is-valid" : "is-invalid"
                  }`}
                  value={itemInfo?.Details}
                  placeholder="Details"
                  onChange={(e) => handleChange(e.target.value, "Details")}
                />
                <div className="valid-feedback">Word! Nice!</div>
                <div className="invalid-feedback"> This field is required</div>
              </div>

              <div>
                <label htmlFor="Est_Hrs" className="form-label h4 mt-2">
                  Estimated Hours:
                </label>
                <input
                  type="number"
                  id="Est_Hrs"
                  className={`form-control mb-4 ${
                    itemInfo?.["Est Hrs"] > '0' ? "is-valid" : "is-invalid"
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
                  Date Edited:
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

              <button type="submit" className="btn btn-success ">
                Update
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
