"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("parse/node"));
const dronesControllers_1 = require("../controllers/dronesControllers");
node_1.default.Cloud.define('getAllDrones', (0, dronesControllers_1.getAllDrones)(node_1.default));
node_1.default.Cloud.define('getDronById', (0, dronesControllers_1.getDronById)(node_1.default));
node_1.default.Cloud.define('createDron', (0, dronesControllers_1.createDron)(node_1.default));
node_1.default.Cloud.define('updateDron', (0, dronesControllers_1.updateDron)(node_1.default), { requireUser: true });
node_1.default.Cloud.define('deleteDron', (0, dronesControllers_1.deleteDron)(node_1.default), { requireUser: true });
//# sourceMappingURL=dronesClouds.js.map