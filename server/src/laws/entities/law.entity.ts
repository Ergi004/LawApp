import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity({name: 'Laws'})
export class Laws {
  @PrimaryGeneratedColumn()
  law_id: number
  @Column()
  law_name: string
  @Column()
  law_description: string
  @Column()
  written_date: string
  @Column()
  category_id: number
}
