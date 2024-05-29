import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Law } from '../../laws/entities/law.entity';

@Entity({ name: 'LawCategory' })
export class LawCategory {
  @PrimaryGeneratedColumn()
  category_id: number;
  @Column()
  category_title: string;
  @Column()
  category_number: string;
  @Column()
  part_id: number;
  @OneToMany((type) => Law, (law) => law.category_id)
  law: Law[];
}
