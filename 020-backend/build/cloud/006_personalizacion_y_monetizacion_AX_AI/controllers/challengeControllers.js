"use strict";
/* eslint-disable prefer-destructuring */
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteChallenge = exports.updateChallenge = exports.createChallenge = exports.getChallengeById = exports.getAllChallenges = void 0;
const challengeService_1 = require("../services/challengeService");
const sendToIaEndpoint_1 = require("../utils/sendToIaEndpoint");
const adviceControllers_1 = require("./adviceControllers");
function getAllChallenges(Parse) {
    return async (request) => {
        try {
            const { page } = request.params;
            const Challenges = await (0, challengeService_1.getAllChallengesService)(page);
            return {
                status: 'success',
                result: true,
                Challenges,
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
exports.getAllChallenges = getAllChallenges;
function getChallengeById(Parse) {
    return async (request) => {
        try {
            const { challengeId } = request.params;
            const challenge = await (0, challengeService_1.getChallengeByIdService)(challengeId);
            return {
                status: 'success',
                result: true,
                challenge,
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
exports.getChallengeById = getChallengeById;
function createChallenge(Parse) {
    return async (request) => {
        try {
            const { objectData } = request.params;
            const challenge = await (0, challengeService_1.createChallengeService)(objectData);
            //obtengo el objectId de Challenge
            const objectIdChallenge = challenge.id;
            (0, sendToIaEndpoint_1.sendToIaEndpoint)(objectData, Parse, objectIdChallenge);
            return {
                status: 'success',
                result: true,
                challenge,
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
exports.createChallenge = createChallenge;
function updateChallenge(Parse) {
    return async (request) => {
        try {
            const { challengeId, objectData } = request.params;
            const challenge = await (0, challengeService_1.updateChallengeService)(challengeId, objectData);
            return {
                status: 'success',
                result: true,
                challenge,
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
exports.updateChallenge = updateChallenge;
function deleteChallenge(Parse) {
    return async (request) => {
        try {
            const { challengeId } = request.params;
            //const sessionToken = request.headers.authorization;
            await (0, challengeService_1.deleteChallengeService)(challengeId);
            // Llama a deleteAdvice después de eliminar la Challengea
            await (0, adviceControllers_1.deleteAdvice)(Parse)({ params: { objectIdChallenge: challengeId } });
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
exports.deleteChallenge = deleteChallenge;
//# sourceMappingURL=challengeControllers.js.map