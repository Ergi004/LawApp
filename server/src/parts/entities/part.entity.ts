import { LawCategory } from '../../lawCategory/entities/category.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'Part' })
export class Part {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  part_id: number;

  @Column()
  part_number: string;

  @Column()
  part_title: string;
  @OneToMany((type) => LawCategory, (lawCategory) => lawCategory.part_id)
  lawCategory: LawCategory[];
}
