"use strict";
/* eslint-disable no-inline-comments */
/* eslint-disable guard-for-in */
/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-throw-literal */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAlertsNotificationsData = exports.updateAlertsNotificationsData = exports.createAlertsNotificationsData = exports.getAlertsNotificationsByIdData = exports.getAllAlertsNotificationssData = void 0;
const node_1 = __importDefault(require("parse/node"));
async function getAllAlertsNotificationssData(page) {
    try {
        // Verificar si la página es nula o indefinida
        if (page === null || page === undefined) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Page number is missing.');
        }
        const AlertsNotifications = node_1.default.Object.extend('alertsnotifications');
        const query = new node_1.default.Query(AlertsNotifications);
        query.limit(5); // Limita los resultados a 5 por página
        query.skip((page - 1) * 5); // Salta los drinks de las páginas anteriores
        const data = await query.find();
        if (!data || data.length === 0) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `No AlertsNotificationses found.`);
        }
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllAlertsNotificationssData = getAllAlertsNotificationssData;
async function getAlertsNotificationsByIdData(alertsnotificationsId) {
    try {
        // Verificar si alertsnotificationsId es nulo o indefinido
        if (!alertsnotificationsId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'AlertsNotifications ID is missing.');
        }
        const AlertsNotifications = node_1.default.Object.extend('alertsnotifications');
        const query = new node_1.default.Query(AlertsNotifications);
        query.equalTo('objectId', alertsnotificationsId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `AlertsNotifications with ID ${alertsnotificationsId} does not exist.`);
        }
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAlertsNotificationsByIdData = getAlertsNotificationsByIdData;
async function createAlertsNotificationsData(objectData) {
    try {
        // Verificar si objectData existe
        if (!objectData) {
            throw {
                code: node_1.default.Error.OBJECT_NOT_FOUND,
                message: 'objectData is missing.',
            };
        }
        const User = node_1.default.Object.extend('User');
        const user = await new User();
        // Crear un puntero a la persona usando el ID proporcionado
        const userPointer = node_1.default.User.createWithoutData(objectData.alert_person_id);
        const AlertsNotifications = node_1.default.Object.extend('alertsnotifications');
        const data = new AlertsNotifications();
        data.set('alert_person_id', userPointer);
        // Establecer otros campos del desafío
        for (const key in objectData) {
            if (objectData.hasOwnProperty(key) && key !== 'alert_person_id') {
                data.set(key, objectData[key]);
            }
        }
        await data.save();
        return data;
    }
    catch (error) {
        throw {
            code: error.code || node_1.default.Error.INTERNAL_SERVER_ERROR,
            message: error.message,
        };
    }
}
exports.createAlertsNotificationsData = createAlertsNotificationsData;
async function updateAlertsNotificationsData(alertsnotificationsId, objectData) {
    try {
        // Verificar si alertsnotificationsId y objectData existen
        if (!alertsnotificationsId || !objectData) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'AlertsNotifications ID or objectData is missing.');
        }
        const AlertsNotifications = node_1.default.Object.extend('alertsnotifications');
        const query = new node_1.default.Query(AlertsNotifications);
        query.equalTo('objectId', alertsnotificationsId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `AlertsNotifications with ID ${alertsnotificationsId} does not exist.`);
        }
        // Actualizar los campos permitidos
        for (const key in objectData) {
            data.set(key, objectData[key]);
        }
        await data.save(null, { useMasterKey: true });
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.updateAlertsNotificationsData = updateAlertsNotificationsData;
async function deleteAlertsNotificationsData(alertsnotificationsId) {
    try {
        // Verificar si alertsnotificationsId es nulo o indefinido
        if (!alertsnotificationsId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'AlertsNotifications ID is missing.');
        }
        const AlertsNotifications = node_1.default.Object.extend('alertsnotifications');
        const query = new node_1.default.Query(AlertsNotifications);
        query.equalTo('objectId', alertsnotificationsId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `AlertsNotifications with ID ${alertsnotificationsId} does not exist.`);
        }
        await data.destroy();
    }
    catch (error) {
        throw error;
    }
}
exports.deleteAlertsNotificationsData = deleteAlertsNotificationsData;
//# sourceMappingURL=alertsNotifications.js.map