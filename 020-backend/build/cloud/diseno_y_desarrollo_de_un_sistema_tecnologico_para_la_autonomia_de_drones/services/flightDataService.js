"use strict";
/* eslint-disable no-useless-catch */
/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFlightDataService = exports.updateFlightDataService = exports.createFlightDataService = exports.getFlightDataByIdService = exports.getAllFlightDatasService = void 0;
const flightData_1 = require("../database/flightData");
async function getAllFlightDatasService(page) {
    try {
        const data = await (0, flightData_1.getAllFlightDatasData)(page);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllFlightDatasService = getAllFlightDatasService;
async function getFlightDataByIdService(flightdataId) {
    try {
        const data = await (0, flightData_1.getFlightDataByIdData)(flightdataId);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getFlightDataByIdService = getFlightDataByIdService;
async function createFlightDataService(objectData) {
    try {
        const data = await (0, flightData_1.createFlightDataData)(objectData);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.createFlightDataService = createFlightDataService;
async function updateFlightDataService(flightdataId, objectData) {
    try {
        const data = await (0, flightData_1.updateFlightDataData)(flightdataId, objectData);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.updateFlightDataService = updateFlightDataService;
async function deleteFlightDataService(flightdataId) {
    try {
        await (0, flightData_1.deleteFlightDataData)(flightdataId);
    }
    catch (error) {
        throw error;
    }
}
exports.deleteFlightDataService = deleteFlightDataService;
//# sourceMappingURL=flightDataService.js.map