"use strict";
/* eslint-disable no-console */
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable no-useless-catch */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteChallengeService = exports.updateChallengeService = exports.createChallengeService = exports.getChallengeByIdService = exports.getAllChallengesService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
// import Parse from 'parse/node';
const challenge_1 = require("../database/challenge");
// import { assignRoleToUser } from '../utils/assignRoles';
// import { checkUserRole } from '../utils/accesControl';
async function getAllChallengesService(page) {
    try {
        const challenges = await (0, challenge_1.getAllChallengesData)(page);
        return challenges;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllChallengesService = getAllChallengesService;
async function getChallengeByIdService(challengeId) {
    try {
        const challenge = await (0, challenge_1.getChallengeByIdData)(challengeId);
        return challenge;
    }
    catch (error) {
        throw error;
    }
}
exports.getChallengeByIdService = getChallengeByIdService;
async function createChallengeService(objectData) {
    try {
        const challenge = await (0, challenge_1.createChallengeData)(objectData);
        //Asignar un rol por defecto al nuevo usuario
        // await assignRoleToUser(person, 'user');
        return challenge;
    }
    catch (error) {
        throw error;
    }
}
exports.createChallengeService = createChallengeService;
async function updateChallengeService(challengeId, objectData) {
    try {
        const challenge = await (0, challenge_1.updateChallengeData)(challengeId, objectData);
        return challenge;
    }
    catch (error) {
        throw error;
    }
}
exports.updateChallengeService = updateChallengeService;
async function deleteChallengeService(objectIdChallenge) {
    try {
        await (0, challenge_1.deleteChallengeData)(objectIdChallenge);
    }
    catch (error) {
        throw error;
    }
}
exports.deleteChallengeService = deleteChallengeService;
//# sourceMappingURL=challengeService.js.map