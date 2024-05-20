import { IAllCategories } from "./categoryModel";
import { IAllParts } from "./partModel";

export interface ICreateLaw {
  law_id: number;
  law_name: string
  law_description: string
  written_date: string
  category_id: number 
}

export interface Law {
  law_id: number;
  law_name: string
  law_description: string
  written_date: string
  category_id: number 
}

export interface AllLawsProps {
  laws: Law[]
  parts?: IAllParts[]
  allCategories?: IAllCategories[]
}
export interface IGetAllLaws extends ICreateLaw {}
export interface IUpdateLaw extends ICreateLaw {}