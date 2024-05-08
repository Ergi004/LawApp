import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Parts' })
export class Parts {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  part_id: number;

  @Column()
  part_number: string;

  @Column()
  part_title: string;
}
