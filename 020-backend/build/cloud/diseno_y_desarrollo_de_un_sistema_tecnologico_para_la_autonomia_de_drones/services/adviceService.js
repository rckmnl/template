"use strict";
/* eslint-disable no-useless-catch */
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdviceService = exports.updateAdviceService = exports.createAdviceService = exports.getAdviceByIdService = exports.getAllAdvicesService = void 0;
const advice_1 = require("../database/advice");
async function getAllAdvicesService(page) {
    try {
        const data = await (0, advice_1.getAllAdvicesData)(page);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllAdvicesService = getAllAdvicesService;
async function getAdviceByIdService(objectId) {
    try {
        const data = await (0, advice_1.getAdviceByIdData)(objectId);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAdviceByIdService = getAdviceByIdService;
/* eslint-disable no-useless-catch */
async function createAdviceService(objectData) {
    try {
        // Guarda los datos en la tabla ADVICE
        const advice = await (0, advice_1.createAdviceData)(objectData);
        // Envía los datos a tu endpoint de IA y obtén la respuesta
        return advice;
    }
    catch (error) {
        throw error;
    }
}
exports.createAdviceService = createAdviceService;
async function updateAdviceService(objectId, objectData) {
    try {
        const data = await (0, advice_1.updateAdviceData)(objectId, objectData);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.updateAdviceService = updateAdviceService;
async function deleteAdviceService(objectId) {
    try {
        await (0, advice_1.deleteAdviceData)(objectId);
    }
    catch (error) {
        throw error;
    }
}
exports.deleteAdviceService = deleteAdviceService;
//# sourceMappingURL=adviceService.js.map