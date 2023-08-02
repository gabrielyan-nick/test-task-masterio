import { TChipColors } from "./theme.types";

export interface IData {
  about: IListItemData[];
  connections: {
    avatar: string;
    connections: string;
    isFriend: boolean;
    name: string;
  }[];
  contacts: IListItemData[];
  overview: IListItemData[];
  teams: IListItemData[];
  teamsTech: {
    avatar: string;
    chipText: string;
    title: string;
    ChipColor: TChipColors;
    members: number;
  }[];
}

export interface IListItemData {
  property: string;
  value: string;
  icon: string;
}
