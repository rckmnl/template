"use strict";
/* eslint-disable no-useless-catch */
/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteActivityLogsService = exports.updateActivityLogsService = exports.createActivityLogsService = exports.getActivityLogsByIdService = exports.getAllActivityLogssService = void 0;
const activityLogs_1 = require("../database/activityLogs");
async function getAllActivityLogssService(page) {
    try {
        const data = await (0, activityLogs_1.getAllActivityLogssData)(page);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllActivityLogssService = getAllActivityLogssService;
async function getActivityLogsByIdService(activitylogsId) {
    try {
        const data = await (0, activityLogs_1.getActivityLogsByIdData)(activitylogsId);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getActivityLogsByIdService = getActivityLogsByIdService;
async function createActivityLogsService(objectData) {
    try {
        const data = await (0, activityLogs_1.createActivityLogsData)(objectData);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.createActivityLogsService = createActivityLogsService;
async function updateActivityLogsService(activitylogsId, objectData) {
    try {
        const data = await (0, activityLogs_1.updateActivityLogsData)(activitylogsId, objectData);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.updateActivityLogsService = updateActivityLogsService;
async function deleteActivityLogsService(activitylogsId) {
    try {
        await (0, activityLogs_1.deleteActivityLogsData)(activitylogsId);
    }
    catch (error) {
        throw error;
    }
}
exports.deleteActivityLogsService = deleteActivityLogsService;
//# sourceMappingURL=activityLogsService.js.map