"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("parse/node"));
const fireDetectionControllers_1 = require("../controllers/fireDetectionControllers");
node_1.default.Cloud.define('getAllFireDetectiones', (0, fireDetectionControllers_1.getAllFireDetections)(node_1.default));
node_1.default.Cloud.define('getFireDetectionById', (0, fireDetectionControllers_1.getFireDetectionById)(node_1.default));
node_1.default.Cloud.define('createFireDetection', (0, fireDetectionControllers_1.createFireDetection)(node_1.default));
node_1.default.Cloud.define('updateFireDetection', (0, fireDetectionControllers_1.updateFireDetection)(node_1.default), { requireUser: true });
node_1.default.Cloud.define('deleteFireDetection', (0, fireDetectionControllers_1.deleteFireDetection)(node_1.default), { requireUser: true });
//# sourceMappingURL=fireDetectionClouds.js.map