"use strict";
/* eslint-disable no-useless-catch */
/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDronService = exports.updateDronService = exports.createDronService = exports.getDronByIdService = exports.getAllDronesService = void 0;
const drones_1 = require("../database/drones");
async function getAllDronesService(page) {
    try {
        const data = await (0, drones_1.getAllDronesData)(page);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllDronesService = getAllDronesService;
async function getDronByIdService(dronId) {
    try {
        const data = await (0, drones_1.getDronByIdData)(dronId);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getDronByIdService = getDronByIdService;
async function createDronService(objectData) {
    try {
        const data = await (0, drones_1.createDronData)(objectData);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.createDronService = createDronService;
async function updateDronService(dronId, objectData) {
    try {
        const data = await (0, drones_1.updateDronData)(dronId, objectData);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.updateDronService = updateDronService;
async function deleteDronService(dronId) {
    try {
        await (0, drones_1.deleteDronData)(dronId);
    }
    catch (error) {
        throw error;
    }
}
exports.deleteDronService = deleteDronService;
//# sourceMappingURL=dronService.js.map