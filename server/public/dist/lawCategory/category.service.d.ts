import { CreateLawCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Repository } from 'typeorm';
import { LawCategory } from './entities/category.entity';
export declare class CategoryService {
    private lawCategoryRepository;
    constructor(lawCategoryRepository: Repository<LawCategory>);
    create(createLawCategoryDto: CreateLawCategoryDto): Promise<LawCategory>;
    findAll(): Promise<LawCategory[]>;
    findBy(part_id: number): Promise<LawCategory[]>;
    findOne(category_id: number): Promise<LawCategory>;
    update(category_id: number, updateCategoryDto: UpdateCategoryDto): Promise<import("typeorm").UpdateResult>;
    remove(category_id: number): Promise<LawCategory>;
}
