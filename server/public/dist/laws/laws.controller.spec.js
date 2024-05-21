"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const laws_controller_1 = require("./laws.controller");
const laws_service_1 = require("./laws.service");
describe('LawsController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [laws_controller_1.LawsController],
            providers: [laws_service_1.LawsService],
        }).compile();
        controller = module.get(laws_controller_1.LawsController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=laws.controller.spec.js.map