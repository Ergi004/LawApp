import { PartsService } from './parts.service';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';
export declare class PartsController {
    private readonly partsService;
    constructor(partsService: PartsService);
    create(createPartDto: CreatePartDto): {
        data: CreatePartDto;
        message: string;
    };
    findAll(): Promise<{
        data: import("./entities/part.entity").Part[];
    }>;
    findOne(id: number): Promise<import("./entities/part.entity").Part>;
    update(id: number, updatePartDto: UpdatePartDto): {
        data: Promise<import("typeorm").UpdateResult>;
        message: string;
    };
    remove(id: number): Promise<void>;
}
