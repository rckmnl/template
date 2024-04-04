"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
// /* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDron = exports.updateDron = exports.createDron = exports.getDronById = exports.getAllDrones = void 0;
const dronService_1 = require("../services/dronService");
function getAllDrones(Parse) {
    return async (request) => {
        try {
            const { page } = request.params;
            const dron = await (0, dronService_1.getAllDronesService)(page);
            return {
                status: 'success',
                result: true,
                dron,
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
exports.getAllDrones = getAllDrones;
function getDronById(Parse) {
    return async (request) => {
        try {
            const { dronId } = request.params;
            const dron = await (0, dronService_1.getDronByIdService)(dronId);
            return {
                status: 'success',
                result: true,
                dron,
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
exports.getDronById = getDronById;
function createDron(Parse) {
    return async (request) => {
        try {
            const { objectData } = request.params;
            const dron = await (0, dronService_1.createDronService)(objectData);
            return {
                status: 'success',
                result: true,
                dron,
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
exports.createDron = createDron;
function updateDron(Parse) {
    return async (request) => {
        try {
            const { dronId, objectData } = request.params;
            const dron = await (0, dronService_1.updateDronService)(dronId, objectData);
            return {
                status: 'success',
                result: true,
                dron,
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
exports.updateDron = updateDron;
function deleteDron(Parse) {
    return async (request) => {
        try {
            const { dronId } = request.params;
            await (0, dronService_1.deleteDronService)(dronId);
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
exports.deleteDron = deleteDron;
//# sourceMappingURL=dronesControllers.js.map