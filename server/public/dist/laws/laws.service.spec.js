"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const laws_service_1 = require("./laws.service");
describe('LawsService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [laws_service_1.LawsService],
        }).compile();
        service = module.get(laws_service_1.LawsService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=laws.service.spec.js.map