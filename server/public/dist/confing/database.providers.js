"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const category_entity_1 = require("../lawCategory/entities/category.entity");
const law_entity_1 = require("../laws/entities/law.entity");
const part_entity_1 = require("../parts/entities/part.entity");
const user_entity_1 = require("../users/entities/user.entity");
exports.databaseProviders = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'Ergi',
    password: '1234',
    database: 'LawApp',
    entities: [user_entity_1.User, part_entity_1.Part, category_entity_1.LawCategory, law_entity_1.Law],
    synchronize: true,
};
//# sourceMappingURL=database.providers.js.map