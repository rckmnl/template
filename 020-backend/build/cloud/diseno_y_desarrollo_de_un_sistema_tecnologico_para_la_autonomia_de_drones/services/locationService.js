"use strict";
/* eslint-disable no-useless-catch */
/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLocationService = exports.updateLocationService = exports.createLocationService = exports.getLocationByIdService = exports.getAllLocationsService = void 0;
const location_1 = require("../database/location");
async function getAllLocationsService(page) {
    try {
        const data = await (0, location_1.getAllLocationsData)(page);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllLocationsService = getAllLocationsService;
async function getLocationByIdService(locationId) {
    try {
        const data = await (0, location_1.getLocationByIdData)(locationId);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getLocationByIdService = getLocationByIdService;
async function createLocationService(objectData) {
    try {
        const data = await (0, location_1.createLocationData)(objectData);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.createLocationService = createLocationService;
async function updateLocationService(locationId, objectData) {
    try {
        const data = await (0, location_1.updateLocationData)(locationId, objectData);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.updateLocationService = updateLocationService;
async function deleteLocationService(locationId) {
    try {
        await (0, location_1.deleteLocationData)(locationId);
    }
    catch (error) {
        throw error;
    }
}
exports.deleteLocationService = deleteLocationService;
//# sourceMappingURL=locationService.js.map