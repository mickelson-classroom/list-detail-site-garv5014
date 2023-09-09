export default interface IListItem {
  id: string;
  Name: string;
  Details: string;
  "Est Hrs": number;
  "Date Created": string;
  "Due Date": string;
  isUrgent: boolean;
  owners: string[];
}
