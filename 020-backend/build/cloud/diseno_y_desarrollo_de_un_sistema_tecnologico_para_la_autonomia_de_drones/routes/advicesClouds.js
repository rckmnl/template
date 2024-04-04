"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("parse/node"));
const adviceControllers_1 = require("../controllers/adviceControllers");
node_1.default.Cloud.define('getAllAdviceses', (0, adviceControllers_1.getAllAdvices)(node_1.default));
node_1.default.Cloud.define('getAdvicesById', (0, adviceControllers_1.getAdviceById)(node_1.default));
node_1.default.Cloud.define('createAdvices', (0, adviceControllers_1.createAdvice)(node_1.default));
node_1.default.Cloud.define('updateAdvices', (0, adviceControllers_1.updateAdvice)(node_1.default), { requireUser: true });
node_1.default.Cloud.define('deleteAdvices', (0, adviceControllers_1.deleteAdvice)(node_1.default), { requireUser: true });
//# sourceMappingURL=advicesClouds.js.map