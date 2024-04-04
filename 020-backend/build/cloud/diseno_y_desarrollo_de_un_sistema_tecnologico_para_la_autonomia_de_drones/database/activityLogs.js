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
exports.deleteActivityLogsData = exports.updateActivityLogsData = exports.createActivityLogsData = exports.getActivityLogsByIdData = exports.getAllActivityLogssData = void 0;
const node_1 = __importDefault(require("parse/node"));
async function getAllActivityLogssData(page) {
    try {
        // Verificar si la página es nula o indefinida
        if (page === null || page === undefined) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Page number is missing.');
        }
        const ActivityLogs = node_1.default.Object.extend('activitylogs');
        const query = new node_1.default.Query(ActivityLogs);
        query.limit(5); // Limita los resultados a 5 por página
        query.skip((page - 1) * 5); // Salta los drinks de las páginas anteriores
        const data = await query.find();
        if (!data || data.length === 0) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `No ActivityLogses found.`);
        }
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllActivityLogssData = getAllActivityLogssData;
async function getActivityLogsByIdData(activitylogsId) {
    try {
        // Verificar si activitylogsId es nulo o indefinido
        if (!activitylogsId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'ActivityLogs ID is missing.');
        }
        const ActivityLogs = node_1.default.Object.extend('activitylogs');
        const query = new node_1.default.Query(ActivityLogs);
        query.equalTo('objectId', activitylogsId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `ActivityLogs with ID ${activitylogsId} does not exist.`);
        }
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getActivityLogsByIdData = getActivityLogsByIdData;
async function createActivityLogsData(objectData) {
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
        const userPointer = node_1.default.User.createWithoutData(objectData.reg_person_id);
        const ActivityLogs = node_1.default.Object.extend('activitylogs');
        const data = new ActivityLogs();
        data.set('reg_person_id', userPointer);
        // Establecer otros campos del desafío
        for (const key in objectData) {
            if (objectData.hasOwnProperty(key) && key !== 'reg_person_id') {
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
exports.createActivityLogsData = createActivityLogsData;
async function updateActivityLogsData(activitylogsId, objectData) {
    try {
        // Verificar si activitylogsId y objectData existen
        if (!activitylogsId || !objectData) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'ActivityLogs ID or objectData is missing.');
        }
        const ActivityLogs = node_1.default.Object.extend('activitylogs');
        const query = new node_1.default.Query(ActivityLogs);
        query.equalTo('objectId', activitylogsId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `ActivityLogs with ID ${activitylogsId} does not exist.`);
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
exports.updateActivityLogsData = updateActivityLogsData;
async function deleteActivityLogsData(activitylogsId) {
    try {
        // Verificar si activitylogsId es nulo o indefinido
        if (!activitylogsId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'ActivityLogs ID is missing.');
        }
        const ActivityLogs = node_1.default.Object.extend('activitylogs');
        const query = new node_1.default.Query(ActivityLogs);
        query.equalTo('objectId', activitylogsId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `ActivityLogs with ID ${activitylogsId} does not exist.`);
        }
        await data.destroy();
    }
    catch (error) {
        throw error;
    }
}
exports.deleteActivityLogsData = deleteActivityLogsData;
//# sourceMappingURL=activityLogs.js.map