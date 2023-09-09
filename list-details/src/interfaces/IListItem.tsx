export default interface IListItem {
  id: string;
  name: string;
  details: string;
  estHrs: number;
  dateCreated: string;
  dateDue: string;
  isUrgent: boolean;
  owners: string[];
}
