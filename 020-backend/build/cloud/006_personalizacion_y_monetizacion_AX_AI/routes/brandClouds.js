"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("parse/node"));
const brandControllers_1 = require("../controllers/brandControllers");
node_1.default.Cloud.define('getAllBrands', (0, brandControllers_1.getAllBrands)(node_1.default));
node_1.default.Cloud.define('getBrandById', (0, brandControllers_1.getBrandById)(node_1.default));
node_1.default.Cloud.define('createBrand', (0, brandControllers_1.createBrand)(node_1.default));
node_1.default.Cloud.define('updateBrand', (0, brandControllers_1.updateBrand)(node_1.default), { requireUser: true });
node_1.default.Cloud.define('deleteBrand', (0, brandControllers_1.deleteBrand)(node_1.default), { requireUser: true });
//# sourceMappingURL=brandClouds.js.map