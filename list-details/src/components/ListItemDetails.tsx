import IListItem from "../interfaces/IListItem";

export const ListItemDetails = (props: {list: IListItem[], targetIndex: number; handleDelete():void}) => {
  return (
  <>
    <p>
        {props.list[props.targetIndex].details}
    </p>
    <button onClick={props.handleDelete}>Delete</button>
  </>
    // takes in the list and and index and displays the details of the item at that index
    // there is a button that will delete the item at that index

  )
}
