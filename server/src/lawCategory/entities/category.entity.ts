import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'LawCategory'})
export class LawCategory {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column()
  category_title: string;

  part_id: number;
}
