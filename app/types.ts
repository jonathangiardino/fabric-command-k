import { Dispatch, SetStateAction } from "react";

export interface CommandMenuProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export interface Item {
  id: string;
  label: string;
  icon: string;
  space?: string;
  onSelected?: () => void;
}

export interface Group {
  id: string;
  label: string;
  items: Item[];
}
