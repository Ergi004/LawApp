import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CivilcodeTitle } from '../../civilcode-title/entities/civilcode-title.entity';

@Entity({name: 'CivilcodePart'})
export class CivilcodePart {
  @Column()
  part_name: string;
  @Column()
  part_number: string;
  @PrimaryGeneratedColumn('increment')
  part_id: number;
  @OneToMany(
    () => CivilcodeTitle,
    (civilcodeTitle) => civilcodeTitle.civilcodePart,
  )
  civilcodeTitle: CivilcodeTitle[];
}
