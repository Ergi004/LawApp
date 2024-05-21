import { CategoryService } from './category.service';
import { CreateLawCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createLawCategoryDto: CreateLawCategoryDto): Promise<{
        data: CreateLawCategoryDto;
        message: string;
    }>;
    findAll(): Promise<{
        data: import("./entities/category.entity").LawCategory[];
    }>;
    findBy(part_id: number): Promise<{
        data: import("./entities/category.entity").LawCategory[];
    }>;
    findOne(id: number): Promise<import("./entities/category.entity").LawCategory>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("./entities/category.entity").LawCategory>;
}
