import { FC, useEffect, useState } from "react";
import IListItem from "../interfaces/IListItem";
import { OwnerCard } from "./OwnerCards";
import { AddOwnerModal } from "./AddOwnerModal";

export const ListItemDetails: FC<{
  targetItem: IListItem | undefined;
  handleDelete: () => void;
  owners?: string[];
  handleAddOwner: (owner: string) => void;
}> = ({ targetItem, handleDelete, owners, handleAddOwner }) => {
  const [itemOwners, setItemOwners] = useState<string[]>(owners || []);

  useEffect(() => {
    setItemOwners(targetItem?.owners || []);
  }, [targetItem]);
  return (
    <div className="container">
      <div className="row justify-content-evenly">
        {targetItem?.details && (
          <p className=" h3 mt-4 mb-4">{targetItem?.details}</p>
        )}
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Owners
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {targetItem?.owners && <OwnerCard owners={itemOwners} />}
              </div>
            </div>
          </div>
        </div>
        <button
          className="btn btn-danger mt-4 mb-4 col"
          onClick={() => {
            handleDelete();
          }}
          disabled={!targetItem?.id}
        >
          Delete
        </button>
        <AddOwnerModal
          handleAddOwner={handleAddOwner}
          disable={!targetItem?.id}
        />
      </div>
    </div>
    // takes in the list and and index and displays the details of the item at that index
    // there is a button that will delete the item at that index
  );
};
