export interface IAllParts  {
  part_id: number
  part_number: string
  part_title: string
}

export interface ICreatePart extends IAllParts {}
export interface IUpdatePart extends IAllParts {}