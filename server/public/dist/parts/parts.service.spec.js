"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const parts_service_1 = require("./parts.service");
describe('PartsService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [parts_service_1.PartsService],
        }).compile();
        service = module.get(parts_service_1.PartsService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=parts.service.spec.js.map