"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("parse/node"));
const activityLogsControllers_1 = require("../controllers/activityLogsControllers");
node_1.default.Cloud.define('getAllActivityLogses', (0, activityLogsControllers_1.getAllActivityLogss)(node_1.default));
node_1.default.Cloud.define('getActivityLogsById', (0, activityLogsControllers_1.getActivityLogsById)(node_1.default));
node_1.default.Cloud.define('createActivityLogs', (0, activityLogsControllers_1.createActivityLogs)(node_1.default));
node_1.default.Cloud.define('updateActivityLogs', (0, activityLogsControllers_1.updateActivityLogs)(node_1.default), { requireUser: true });
node_1.default.Cloud.define('deleteActivityLogs', (0, activityLogsControllers_1.deleteActivityLogs)(node_1.default), { requireUser: true });
//# sourceMappingURL=activityLogsClouds.js.map