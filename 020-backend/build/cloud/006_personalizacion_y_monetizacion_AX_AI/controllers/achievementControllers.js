"use strict";
/* eslint-disable prefer-destructuring */
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAchievement = exports.updateAchievement = exports.createAchievement = exports.getAchievementById = exports.getAllAchievements = void 0;
const achievemenService_1 = require("../services/achievemenService");
const sendToIaEndpoint_1 = require("../utils/sendToIaEndpoint");
const adviceControllers_1 = require("./adviceControllers");
function getAllAchievements(Parse) {
    return async (request) => {
        try {
            const { page } = request.params;
            const achievements = await (0, achievemenService_1.getAllAchievementsService)(page);
            return {
                status: 'success',
                result: true,
                achievements,
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
exports.getAllAchievements = getAllAchievements;
function getAchievementById(Parse) {
    return async (request) => {
        try {
            const { achievementId } = request.params;
            const achievement = await (0, achievemenService_1.getAchievementByIdService)(achievementId);
            return {
                status: 'success',
                result: true,
                achievement,
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
exports.getAchievementById = getAchievementById;
function createAchievement(Parse) {
    return async (request) => {
        try {
            const { objectData } = request.params;
            const achievement = await (0, achievemenService_1.createAchievementService)(objectData);
            //obtengo el objectId de Achievement
            const objectIdAchievement = achievement.id;
            (0, sendToIaEndpoint_1.sendToIaEndpoint)(objectData, Parse, objectIdAchievement);
            return {
                status: 'success',
                result: true,
                achievement,
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
exports.createAchievement = createAchievement;
function updateAchievement(Parse) {
    return async (request) => {
        try {
            const { achievementId, objectData } = request.params;
            const achievement = await (0, achievemenService_1.updateAchievementService)(achievementId, objectData);
            return {
                status: 'success',
                result: true,
                achievement,
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
exports.updateAchievement = updateAchievement;
function deleteAchievement(Parse) {
    return async (request) => {
        try {
            const { achievementId } = request.params;
            //const sessionToken = request.headers.authorization;
            await (0, achievemenService_1.deleteAchievementService)(achievementId);
            // Llama a deleteAdvice después de eliminar la Achievementa
            await (0, adviceControllers_1.deleteAdvice)(Parse)({ params: { objectIdAchievement: achievementId } });
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
exports.deleteAchievement = deleteAchievement;
//# sourceMappingURL=achievementControllers.js.map