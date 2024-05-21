import { LawsService } from './laws.service';
import { CreateLawDto } from './dto/create-law.dto';
import { UpdateLawDto } from './dto/update-law.dto';
export declare class LawsController {
    private readonly lawsService;
    constructor(lawsService: LawsService);
    create(createLawDto: CreateLawDto): {
        data: CreateLawDto;
        message: string;
    };
    findAll(): Promise<import("./entities/law.entity").Law[]>;
    findOne(id: number): Promise<import("./entities/law.entity").Law>;
    findBy(category_id: number): Promise<{
        data: import("./entities/law.entity").Law[];
    }>;
    update(id: number, updateLawDto: UpdateLawDto): {
        data: UpdateLawDto;
        message: string;
    };
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
