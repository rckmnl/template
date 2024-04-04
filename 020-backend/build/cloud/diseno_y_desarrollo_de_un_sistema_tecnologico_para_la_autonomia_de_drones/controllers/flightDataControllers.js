"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
// /* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFlightData = exports.updateFlightData = exports.createFlightData = exports.getFlightDataById = exports.getAllFlightDatas = void 0;
const flightDataService_1 = require("../services/flightDataService");
function getAllFlightDatas(Parse) {
    return async (request) => {
        try {
            const { page } = request.params;
            const flightdata = await (0, flightDataService_1.getAllFlightDatasService)(page);
            return {
                status: 'success',
                result: true,
                flightdata,
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
exports.getAllFlightDatas = getAllFlightDatas;
function getFlightDataById(Parse) {
    return async (request) => {
        try {
            const { flightdataId } = request.params;
            const flightdata = await (0, flightDataService_1.getFlightDataByIdService)(flightdataId);
            return {
                status: 'success',
                result: true,
                flightdata,
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
exports.getFlightDataById = getFlightDataById;
function createFlightData(Parse) {
    return async (request) => {
        try {
            const { objectData } = request.params;
            const flightdata = await (0, flightDataService_1.createFlightDataService)(objectData);
            return {
                status: 'success',
                result: true,
                flightdata,
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
exports.createFlightData = createFlightData;
function updateFlightData(Parse) {
    return async (request) => {
        try {
            const { flightdataId, objectData } = request.params;
            const flightdata = await (0, flightDataService_1.updateFlightDataService)(flightdataId, objectData);
            return {
                status: 'success',
                result: true,
                flightdata,
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
exports.updateFlightData = updateFlightData;
function deleteFlightData(Parse) {
    return async (request) => {
        try {
            const { flightdataId } = request.params;
            await (0, flightDataService_1.deleteFlightDataService)(flightdataId);
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
exports.deleteFlightData = deleteFlightData;
//# sourceMappingURL=flightDataControllers.js.map