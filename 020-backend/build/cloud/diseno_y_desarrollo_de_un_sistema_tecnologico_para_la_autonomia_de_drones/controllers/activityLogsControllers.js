"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
// /* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteActivityLogs = exports.updateActivityLogs = exports.createActivityLogs = exports.getActivityLogsById = exports.getAllActivityLogss = void 0;
const activityLogsService_1 = require("../services/activityLogsService");
function getAllActivityLogss(Parse) {
    return async (request) => {
        try {
            const { page } = request.params;
            const activitylogs = await (0, activityLogsService_1.getAllActivityLogssService)(page);
            return {
                status: 'success',
                result: true,
                activitylogs,
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
exports.getAllActivityLogss = getAllActivityLogss;
function getActivityLogsById(Parse) {
    return async (request) => {
        try {
            const { activitylogsId } = request.params;
            const activitylogs = await (0, activityLogsService_1.getActivityLogsByIdService)(activitylogsId);
            return {
                status: 'success',
                result: true,
                activitylogs,
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
exports.getActivityLogsById = getActivityLogsById;
function createActivityLogs(Parse) {
    return async (request) => {
        try {
            const { objectData } = request.params;
            const activitylogs = await (0, activityLogsService_1.createActivityLogsService)(objectData);
            return {
                status: 'success',
                result: true,
                activitylogs,
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
exports.createActivityLogs = createActivityLogs;
function updateActivityLogs(Parse) {
    return async (request) => {
        try {
            const { activitylogsId, objectData } = request.params;
            const activitylogs = await (0, activityLogsService_1.updateActivityLogsService)(activitylogsId, objectData);
            return {
                status: 'success',
                result: true,
                activitylogs,
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
exports.updateActivityLogs = updateActivityLogs;
function deleteActivityLogs(Parse) {
    return async (request) => {
        try {
            const { activitylogsId } = request.params;
            await (0, activityLogsService_1.deleteActivityLogsService)(activitylogsId);
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
exports.deleteActivityLogs = deleteActivityLogs;
//# sourceMappingURL=activityLogsControllers.js.map