import { CivilcodeCategory } from '../../civilcode-category/entities/civilcode-category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:"CivilcodeLaw"})
export class CivilcodeLaw {
  @PrimaryGeneratedColumn('increment')
  law_id: number;
  @Column()
  law_name: string;
  @Column({ type: 'text' })
  law_descriptipn: string;
  @ManyToOne(
    () => CivilcodeCategory,
    (civilcodeCategory) => civilcodeCategory.civilcodeLaw,
  )
  civilcodeCategory: CivilcodeCategory;
}
