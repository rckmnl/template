"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("parse/node"));
const findInTableController_1 = require("../controller/findInTableController");
node_1.default.Cloud.define('findInTable', (0, findInTableController_1.findInTable)(node_1.default));
//# sourceMappingURL=findInTableClouds.js.map