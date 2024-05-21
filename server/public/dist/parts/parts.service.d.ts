import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';
import { Repository } from 'typeorm';
import { Part } from './entities/part.entity';
export declare class PartsService {
    private partsRepository;
    constructor(partsRepository: Repository<Part>);
    create(createPartDto: CreatePartDto): Promise<Part>;
    findAll(): Promise<Part[]>;
    findOne(part_id: number): Promise<Part | null>;
    update(part_id: number, updatePartDto: UpdatePartDto): Promise<import("typeorm").UpdateResult>;
    remove(part_id: number): Promise<void>;
}
