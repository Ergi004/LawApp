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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const category_entity_1 = require("./entities/category.entity");
const typeorm_2 = require("@nestjs/typeorm");
let CategoryService = class CategoryService {
    constructor(lawCategoryRepository) {
        this.lawCategoryRepository = lawCategoryRepository;
    }
    create(createLawCategoryDto) {
        const createdLawCategory = this.lawCategoryRepository.create(createLawCategoryDto);
        return this.lawCategoryRepository.save(createdLawCategory);
    }
    async findAll() {
        console.log(await this.lawCategoryRepository.find());
        return this.lawCategoryRepository.find();
    }
    async findBy(part_id) {
        return await this.lawCategoryRepository.findBy({ part_id });
    }
    findOne(category_id) {
        return this.lawCategoryRepository.findOneBy({ category_id });
    }
    update(category_id, updateCategoryDto) {
        return this.lawCategoryRepository.update(category_id, updateCategoryDto);
    }
    remove(category_id) {
        return this.lawCategoryRepository.findOneBy({ category_id });
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(category_entity_1.LawCategory)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CategoryService);
//# sourceMappingURL=category.service.js.map