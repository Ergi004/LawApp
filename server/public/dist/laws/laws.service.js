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
exports.LawsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const law_entity_1 = require("./entities/law.entity");
const typeorm_2 = require("@nestjs/typeorm");
let LawsService = class LawsService {
    constructor(lawRepository) {
        this.lawRepository = lawRepository;
    }
    create(createLawDto) {
        const createdLaw = this.lawRepository.create(createLawDto);
        return this.lawRepository.save(createdLaw);
    }
    findAll() {
        return this.lawRepository.find();
    }
    findOne(law_id) {
        return this.lawRepository.findOneBy({ law_id });
    }
    findBy(category_id) {
        return this.lawRepository.findBy({ category_id });
    }
    update(law_id, updateLawDto) {
        return this.lawRepository.update(law_id, updateLawDto);
    }
    remove(law_id) {
        return this.lawRepository.delete({ law_id });
    }
};
exports.LawsService = LawsService;
exports.LawsService = LawsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(law_entity_1.Law)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], LawsService);
//# sourceMappingURL=laws.service.js.map