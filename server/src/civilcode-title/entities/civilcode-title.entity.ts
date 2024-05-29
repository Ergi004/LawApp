import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CivilcodePart } from '../../civilcode-part/entities/civilcode-part.entity';
import { CivilcodeCategory } from '../../civilcode-category/entities/civilcode-category.entity';

@Entity({ name: 'CivilcodeTitle' })
export class CivilcodeTitle {
  @PrimaryGeneratedColumn('increment')
  title_id: number;
  @Column()
  title: string;
  @Column()
  title_number: string;
  @ManyToOne(
    () => CivilcodePart,
    (civilcodePart) => civilcodePart.civilcodeTitle,
  )
  civilcodePart: CivilcodePart;
  @OneToMany(
    () => CivilcodeCategory,
    (civilcodeCategory) => civilcodeCategory.civilcodeTitle,
  )
  civilcodeCategory: CivilcodeCategory[];
}
