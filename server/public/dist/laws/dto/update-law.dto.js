"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLawDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_law_dto_1 = require("./create-law.dto");
class UpdateLawDto extends (0, mapped_types_1.PartialType)(create_law_dto_1.CreateLawDto) {
}
exports.UpdateLawDto = UpdateLawDto;
//# sourceMappingURL=update-law.dto.js.map