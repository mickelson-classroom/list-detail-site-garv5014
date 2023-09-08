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
        {targetItem?.owners && <OwnerCard owners={itemOwners} />}
        <button
          className="btn btn-danger mt-4 mb-4 col"
          onClick={() => {
            handleDelete();
          }}
          disabled={!targetItem?.id}
        >
          Delete
        </button>
        <AddOwnerModal handleAddOwner={handleAddOwner} disable={!targetItem?.id} />
      </div>
    </div>
    // takes in the list and and index and displays the details of the item at that index
    // there is a button that will delete the item at that index
  );
};
