"use strict";
/* eslint-disable no-useless-catch */
/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFireDetectionService = exports.updateFireDetectionService = exports.createFireDetectionService = exports.getFireDetectionByIdService = exports.getAllFireDetectionsService = void 0;
const fireDetection_1 = require("../database/fireDetection");
async function getAllFireDetectionsService(page) {
    try {
        const data = await (0, fireDetection_1.getAllFireDetectionsData)(page);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllFireDetectionsService = getAllFireDetectionsService;
async function getFireDetectionByIdService(firedetectionId) {
    try {
        const data = await (0, fireDetection_1.getFireDetectionByIdData)(firedetectionId);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getFireDetectionByIdService = getFireDetectionByIdService;
async function createFireDetectionService(objectData) {
    try {
        const data = await (0, fireDetection_1.createFireDetectionData)(objectData);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.createFireDetectionService = createFireDetectionService;
async function updateFireDetectionService(firedetectionId, objectData) {
    try {
        const data = await (0, fireDetection_1.updateFireDetectionData)(firedetectionId, objectData);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.updateFireDetectionService = updateFireDetectionService;
async function deleteFireDetectionService(firedetectionId) {
    try {
        await (0, fireDetection_1.deleteFireDetectionData)(firedetectionId);
    }
    catch (error) {
        throw error;
    }
}
exports.deleteFireDetectionService = deleteFireDetectionService;
//# sourceMappingURL=fireDetectionService.js.map