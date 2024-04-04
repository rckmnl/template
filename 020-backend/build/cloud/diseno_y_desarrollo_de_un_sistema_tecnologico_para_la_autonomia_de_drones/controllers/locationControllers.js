"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
// /* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLocation = exports.updateLocation = exports.createLocation = exports.getLocationById = exports.getAllLocations = void 0;
const locationService_1 = require("../services/locationService");
function getAllLocations(Parse) {
    return async (request) => {
        try {
            const { page } = request.params;
            const location = await (0, locationService_1.getAllLocationsService)(page);
            return {
                status: 'success',
                result: true,
                location,
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
exports.getAllLocations = getAllLocations;
function getLocationById(Parse) {
    return async (request) => {
        try {
            const { locationId } = request.params;
            const location = await (0, locationService_1.getLocationByIdService)(locationId);
            return {
                status: 'success',
                result: true,
                location,
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
exports.getLocationById = getLocationById;
function createLocation(Parse) {
    return async (request) => {
        try {
            const { objectData } = request.params;
            const location = await (0, locationService_1.createLocationService)(objectData);
            return {
                status: 'success',
                result: true,
                location,
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
exports.createLocation = createLocation;
function updateLocation(Parse) {
    return async (request) => {
        try {
            const { locationId, objectData } = request.params;
            const location = await (0, locationService_1.updateLocationService)(locationId, objectData);
            return {
                status: 'success',
                result: true,
                location,
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
exports.updateLocation = updateLocation;
function deleteLocation(Parse) {
    return async (request) => {
        try {
            const { locationId } = request.params;
            await (0, locationService_1.deleteLocationService)(locationId);
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
exports.deleteLocation = deleteLocation;
//# sourceMappingURL=locationControllers.js.map