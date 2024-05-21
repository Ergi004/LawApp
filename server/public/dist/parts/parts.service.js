"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const part_entity_1 = require("./entities/part.entity");
const typeorm_2 = require("@nestjs/typeorm");
let PartsService = class PartsService {
    constructor(partsRepository) {
        this.partsRepository = partsRepository;
    }
    async create(createPartDto) {
        const partAdded = this.partsRepository.create(createPartDto);
        return await this.partsRepository.save(partAdded);
    }
    async findAll() {
        return this.partsRepository.find();
    }
    findOne(part_id) {
        return this.partsRepository.findOneBy({ part_id });
    }
    update(part_id, updatePartDto) {
        return this.partsRepository.update(part_id, updatePartDto);
    }
    async remove(part_id) {
        await this.partsRepository.delete(part_id);
    }
};
exports.PartsService = PartsService;
exports.PartsService = PartsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(part_entity_1.Part)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PartsService);
//# sourceMappingURL=parts.service.js.map