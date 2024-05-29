import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CivilcodeTitle } from '../../civilcode-title/entities/civilcode-title.entity';
import { CivilcodeLaw } from '../../civilcode-law/entities/civilcode-law.entity';

@Entity({name: 'CivilcodeCategory'})
export class CivilcodeCategory {
  @PrimaryGeneratedColumn('increment')
  category_id: number;
  @Column()
  category_name: string;
  @Column()
  category_number: string;
  @ManyToOne(
    () => CivilcodeTitle,
    (civilcodeTitle) => civilcodeTitle.civilcodeCategory,
  )
  civilcodeTitle: CivilcodeTitle;
  @OneToMany(
    () => CivilcodeLaw,
    (civilcodeLaw) => civilcodeLaw.civilcodeCategory,
  )
  civilcodeLaw: CivilcodeLaw[];
}
