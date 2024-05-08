export interface ICreateCategory {
  part_id?: number
  category_id?: number
  category_number: string
  category_title: string  
}
export interface IAllCategories extends ICreateCategory{}
export interface IUpdateCategory extends ICreateCategory{}