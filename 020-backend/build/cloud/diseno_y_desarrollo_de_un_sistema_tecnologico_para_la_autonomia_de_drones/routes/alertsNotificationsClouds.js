"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("parse/node"));
const alertsNotificationsControllers_1 = require("../controllers/alertsNotificationsControllers");
node_1.default.Cloud.define('getAllAlertsNotificationses', (0, alertsNotificationsControllers_1.getAllAlertsNotificationss)(node_1.default));
node_1.default.Cloud.define('getAlertsNotificationsById', (0, alertsNotificationsControllers_1.getAlertsNotificationsById)(node_1.default));
node_1.default.Cloud.define('createAlertsNotifications', (0, alertsNotificationsControllers_1.createAlertsNotifications)(node_1.default));
node_1.default.Cloud.define('updateAlertsNotifications', (0, alertsNotificationsControllers_1.updateAlertsNotifications)(node_1.default), { requireUser: true });
node_1.default.Cloud.define('deleteAlertsNotifications', (0, alertsNotificationsControllers_1.deleteAlertsNotifications)(node_1.default), { requireUser: true });
//# sourceMappingURL=alertsNotificationsClouds.js.map