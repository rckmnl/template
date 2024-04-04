"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
// /* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAlertsNotifications = exports.updateAlertsNotifications = exports.createAlertsNotifications = exports.getAlertsNotificationsById = exports.getAllAlertsNotificationss = void 0;
const alertsNotificationsService_1 = require("../services/alertsNotificationsService");
function getAllAlertsNotificationss(Parse) {
    return async (request) => {
        try {
            const { page } = request.params;
            const alertsnotifications = await (0, alertsNotificationsService_1.getAllAlertsNotificationssService)(page);
            return {
                status: 'success',
                result: true,
                alertsnotifications,
            };
        }
        catch (error) {
            console.error(`Error code: ${error.code}, Error message: ${error.message}`);
            return {
                status: 'error',
                result: false,
                errorDetails: {
                    code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
                    message: error.message,
                },
            };
        }
    };
}
exports.getAllAlertsNotificationss = getAllAlertsNotificationss;
function getAlertsNotificationsById(Parse) {
    return async (request) => {
        try {
            const { alertsnotificationsId } = request.params;
            const alertsnotifications = await (0, alertsNotificationsService_1.getAlertsNotificationsByIdService)(alertsnotificationsId);
            return {
                status: 'success',
                result: true,
                alertsnotifications,
            };
        }
        catch (error) {
            console.error(`Error code: ${error.code}, Error message: ${error.message}`);
            return {
                status: 'error',
                result: false,
                errorDetails: {
                    code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
                    message: error.message,
                },
            };
        }
    };
}
exports.getAlertsNotificationsById = getAlertsNotificationsById;
function createAlertsNotifications(Parse) {
    return async (request) => {
        try {
            const { objectData } = request.params;
            const alertsnotifications = await (0, alertsNotificationsService_1.createAlertsNotificationsService)(objectData);
            return {
                status: 'success',
                result: true,
                alertsnotifications,
            };
        }
        catch (error) {
            console.error(`Error code: ${error.code}, Error message: ${error.message}`);
            return {
                status: 'error',
                result: false,
                errorDetails: {
                    code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
                    message: error.message,
                },
            };
        }
    };
}
exports.createAlertsNotifications = createAlertsNotifications;
function updateAlertsNotifications(Parse) {
    return async (request) => {
        try {
            const { alertsnotificationsId, objectData } = request.params;
            const alertsnotifications = await (0, alertsNotificationsService_1.updateAlertsNotificationsService)(alertsnotificationsId, objectData);
            return {
                status: 'success',
                result: true,
                alertsnotifications,
            };
        }
        catch (error) {
            console.error(`Error code: ${error.code}, Error message: ${error.message}`);
            return {
                status: 'error',
                result: false,
                errorDetails: {
                    code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
                    message: error.message,
                },
            };
        }
    };
}
exports.updateAlertsNotifications = updateAlertsNotifications;
function deleteAlertsNotifications(Parse) {
    return async (request) => {
        try {
            const { alertsnotificationsId } = request.params;
            await (0, alertsNotificationsService_1.deleteAlertsNotificationsService)(alertsnotificationsId);
            return {
                status: 'success',
                result: true,
            };
        }
        catch (error) {
            console.error(`Error code: ${error.code}, Error message: ${error.message}`);
            return {
                status: 'error',
                result: false,
                errorDetails: {
                    code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
                    message: error.message,
                },
            };
        }
    };
}
exports.deleteAlertsNotifications = deleteAlertsNotifications;
//# sourceMappingURL=alertsNotificationsControllers.js.map