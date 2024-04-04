"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("parse/node"));
const locationControllers_1 = require("../controllers/locationControllers");
node_1.default.Cloud.define('getAllLocationes', (0, locationControllers_1.getAllLocations)(node_1.default));
node_1.default.Cloud.define('getLocationById', (0, locationControllers_1.getLocationById)(node_1.default));
node_1.default.Cloud.define('createLocation', (0, locationControllers_1.createLocation)(node_1.default));
node_1.default.Cloud.define('updateLocation', (0, locationControllers_1.updateLocation)(node_1.default), { requireUser: true });
node_1.default.Cloud.define('deleteLocation', (0, locationControllers_1.deleteLocation)(node_1.default), { requireUser: true });
//# sourceMappingURL=locationClouds.js.map