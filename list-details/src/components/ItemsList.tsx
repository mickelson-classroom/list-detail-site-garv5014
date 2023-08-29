import IListItem from "../interfaces/IListItem";

export const ItemsList = (props: { list: IListItem[]; handleClick(): void }) => {

  return (
    <div>
      {props.list.map((item:IListItem) => (
        <button key={item.id} onClick={props.handleClick}>{item.name}</button>
      ))}
    </div>
  );

};
