
import { IAllCategories, ICreateCategory } from "./categoryModel";
import { IAllParts, Part } from "./partModel";

export interface HandlePartClick {
  (part: Part): void;
}

export interface IGetAllLawsProp {
  ():void
}
export interface GetLawByCategoryId {
  (category: ICreateCategory): void;
}

export interface IMainListItems {
  parts: IAllParts[];
  handlePartClick: HandlePartClick;
  categories: IAllCategories[];
  getLawByCategoryId: GetLawByCategoryId;
}
export interface DropdownState {
  [key: number]: boolean;
}
