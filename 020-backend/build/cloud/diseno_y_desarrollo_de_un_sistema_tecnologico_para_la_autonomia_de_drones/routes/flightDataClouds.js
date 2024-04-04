"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("parse/node"));
const flightDataControllers_1 = require("../controllers/flightDataControllers");
node_1.default.Cloud.define('getAllFlightDatas', (0, flightDataControllers_1.getAllFlightDatas)(node_1.default));
node_1.default.Cloud.define('getFlightDataById', (0, flightDataControllers_1.getFlightDataById)(node_1.default));
node_1.default.Cloud.define('createFlightData', (0, flightDataControllers_1.createFlightData)(node_1.default));
node_1.default.Cloud.define('updateFlightData', (0, flightDataControllers_1.updateFlightData)(node_1.default), { requireUser: true });
node_1.default.Cloud.define('deleteFlightData', (0, flightDataControllers_1.deleteFlightData)(node_1.default), { requireUser: true });
//# sourceMappingURL=flightDataClouds.js.map