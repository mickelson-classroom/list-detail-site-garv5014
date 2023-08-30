import IListItem from "../interfaces/IListItem";

export const ListItemDetails = (props: {
  targetItem: IListItem;
  handleDelete: () => void;
}) => {
  return (
    <>
      <p>{props.targetItem.details}</p>
      <button onClick={() => {props.handleDelete()}} disabled={props.targetItem.id === 0 ? true : false}>Delete</button>
    </>
    // takes in the list and and index and displays the details of the item at that index
    // there is a button that will delete the item at that index
  );
};
