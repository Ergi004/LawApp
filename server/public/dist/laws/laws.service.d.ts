import { CreateLawDto } from './dto/create-law.dto';
import { UpdateLawDto } from './dto/update-law.dto';
import { Repository } from 'typeorm';
import { Law } from './entities/law.entity';
export declare class LawsService {
    private lawRepository;
    constructor(lawRepository: Repository<Law>);
    create(createLawDto: CreateLawDto): Promise<Law>;
    findAll(): Promise<Law[]>;
    findOne(law_id: number): Promise<Law>;
    findBy(category_id: number): Promise<Law[]>;
    update(law_id: number, updateLawDto: UpdateLawDto): Promise<import("typeorm").UpdateResult>;
    remove(law_id: number): Promise<import("typeorm").DeleteResult>;
}
