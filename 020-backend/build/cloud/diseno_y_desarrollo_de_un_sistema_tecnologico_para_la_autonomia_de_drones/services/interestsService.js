"use strict";
/* eslint-disable no-useless-catch */
/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInterestsService = exports.updateInterestsService = exports.createInterestsService = exports.getInterestsByIdService = exports.getAllInterestssService = void 0;
const interests_1 = require("../database/interests");
async function getAllInterestssService(page) {
    try {
        const data = await (0, interests_1.getAllInterestssData)(page);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllInterestssService = getAllInterestssService;
async function getInterestsByIdService(interestsId) {
    try {
        const data = await (0, interests_1.getInterestsByIdData)(interestsId);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getInterestsByIdService = getInterestsByIdService;
async function createInterestsService(objectData) {
    try {
        const data = await (0, interests_1.createInterestsData)(objectData);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.createInterestsService = createInterestsService;
async function updateInterestsService(interestsId, objectData) {
    try {
        const data = await (0, interests_1.updateInterestsData)(interestsId, objectData);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.updateInterestsService = updateInterestsService;
async function deleteInterestsService(interestsId) {
    try {
        await (0, interests_1.deleteInterestsData)(interestsId);
    }
    catch (error) {
        throw error;
    }
}
exports.deleteInterestsService = deleteInterestsService;
//# sourceMappingURL=interestsService.js.map