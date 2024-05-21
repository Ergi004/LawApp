"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const parts_controller_1 = require("./parts.controller");
const parts_service_1 = require("./parts.service");
describe('PartsController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [parts_controller_1.PartsController],
            providers: [parts_service_1.PartsService],
        }).compile();
        controller = module.get(parts_controller_1.PartsController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=parts.controller.spec.js.map