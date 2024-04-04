"use strict";
/* eslint-disable no-useless-catch */
/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAlertsNotificationsService = exports.updateAlertsNotificationsService = exports.createAlertsNotificationsService = exports.getAlertsNotificationsByIdService = exports.getAllAlertsNotificationssService = void 0;
const alertsNotifications_1 = require("../database/alertsNotifications");
async function getAllAlertsNotificationssService(page) {
    try {
        const data = await (0, alertsNotifications_1.getAllAlertsNotificationssData)(page);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllAlertsNotificationssService = getAllAlertsNotificationssService;
async function getAlertsNotificationsByIdService(alertsnotificationsId) {
    try {
        const data = await (0, alertsNotifications_1.getAlertsNotificationsByIdData)(alertsnotificationsId);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAlertsNotificationsByIdService = getAlertsNotificationsByIdService;
async function createAlertsNotificationsService(objectData) {
    try {
        const data = await (0, alertsNotifications_1.createAlertsNotificationsData)(objectData);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.createAlertsNotificationsService = createAlertsNotificationsService;
async function updateAlertsNotificationsService(alertsnotificationsId, objectData) {
    try {
        const data = await (0, alertsNotifications_1.updateAlertsNotificationsData)(alertsnotificationsId, objectData);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.updateAlertsNotificationsService = updateAlertsNotificationsService;
async function deleteAlertsNotificationsService(alertsnotificationsId) {
    try {
        await (0, alertsNotifications_1.deleteAlertsNotificationsData)(alertsnotificationsId);
    }
    catch (error) {
        throw error;
    }
}
exports.deleteAlertsNotificationsService = deleteAlertsNotificationsService;
//# sourceMappingURL=alertsNotificationsService.js.map