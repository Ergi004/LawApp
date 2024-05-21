"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawsModule = void 0;
const common_1 = require("@nestjs/common");
const laws_service_1 = require("./laws.service");
const laws_controller_1 = require("./laws.controller");
const typeorm_1 = require("@nestjs/typeorm");
const law_entity_1 = require("./entities/law.entity");
let LawsModule = class LawsModule {
};
exports.LawsModule = LawsModule;
exports.LawsModule = LawsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([law_entity_1.Law])],
        controllers: [laws_controller_1.LawsController],
        providers: [laws_service_1.LawsService],
    })
], LawsModule);
//# sourceMappingURL=laws.module.js.map