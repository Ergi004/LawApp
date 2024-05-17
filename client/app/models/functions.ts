import { IAllCategories, ICreateCategory } from "./categoryModel";
import { IGetAllLaws } from "./lawModel";
import { IAllParts, Part } from "./partModel";

export interface HandlePartClick {
  (part: Part): void;
}

export interface IGetAllLawsProp {
  (): void;
}
export interface GetLawByCategoryId {
  (category: ICreateCategory): void;
}

export interface IMainListItems {
  parts: IAllParts[];
  handlePartClick: HandlePartClick;
  categories: IAllCategories[];
  getLawByCategoryId?: GetLawByCategoryId;
  getAllLaws: IGetAllLawsProp;
}
export interface IMyAppBarProps {
  parts: IAllParts[];
  handlePartClick: HandlePartClick;
  categories: IAllCategories[];
  getLawByCategoryId?: GetLawByCategoryId;
  getAllLaws: IGetAllLawsProp;
  myLaws?: IGetAllLaws[];
  setMyLaws?: any
}
export interface DropdownState {
  [key: number]: boolean;
}
