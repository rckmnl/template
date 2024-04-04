"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
// /* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFireDetection = exports.updateFireDetection = exports.createFireDetection = exports.getFireDetectionById = exports.getAllFireDetections = void 0;
const fireDetectionService_1 = require("../services/fireDetectionService");
function getAllFireDetections(Parse) {
    return async (request) => {
        try {
            const { page } = request.params;
            const firedetection = await (0, fireDetectionService_1.getAllFireDetectionsService)(page);
            return {
                status: 'success',
                result: true,
                firedetection,
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
exports.getAllFireDetections = getAllFireDetections;
function getFireDetectionById(Parse) {
    return async (request) => {
        try {
            const { firedetectionId } = request.params;
            const firedetection = await (0, fireDetectionService_1.getFireDetectionByIdService)(firedetectionId);
            return {
                status: 'success',
                result: true,
                firedetection,
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
exports.getFireDetectionById = getFireDetectionById;
function createFireDetection(Parse) {
    return async (request) => {
        try {
            const { objectData } = request.params;
            const firedetection = await (0, fireDetectionService_1.createFireDetectionService)(objectData);
            return {
                status: 'success',
                result: true,
                firedetection,
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
exports.createFireDetection = createFireDetection;
function updateFireDetection(Parse) {
    return async (request) => {
        try {
            const { firedetectionId, objectData } = request.params;
            const firedetection = await (0, fireDetectionService_1.updateFireDetectionService)(firedetectionId, objectData);
            return {
                status: 'success',
                result: true,
                firedetection,
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
exports.updateFireDetection = updateFireDetection;
function deleteFireDetection(Parse) {
    return async (request) => {
        try {
            const { firedetectionId } = request.params;
            await (0, fireDetectionService_1.deleteFireDetectionService)(firedetectionId);
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
exports.deleteFireDetection = deleteFireDetection;
//# sourceMappingURL=fireDetectionControllers.js.map