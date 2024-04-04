"use strict";
/* eslint-disable prefer-destructuring */
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReward = exports.updateReward = exports.createReward = exports.getRewardById = exports.getAllRewards = void 0;
const rewardService_1 = require("../services/rewardService");
const sendToIaEndpoint_1 = require("../utils/sendToIaEndpoint");
const adviceControllers_1 = require("./adviceControllers");
function getAllRewards(Parse) {
    return async (request) => {
        try {
            const { page } = request.params;
            const rewards = await (0, rewardService_1.getAllRewardsService)(page);
            return {
                status: 'success',
                result: true,
                rewards,
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
exports.getAllRewards = getAllRewards;
function getRewardById(Parse) {
    return async (request) => {
        try {
            const { rewardId } = request.params;
            const reward = await (0, rewardService_1.getRewardByIdService)(rewardId);
            return {
                status: 'success',
                result: true,
                reward,
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
exports.getRewardById = getRewardById;
function createReward(Parse) {
    return async (request) => {
        try {
            const { objectData } = request.params;
            const reward = await (0, rewardService_1.createRewardService)(objectData);
            //obtengo el objectId de Reward
            const objectIdReward = reward.id;
            (0, sendToIaEndpoint_1.sendToIaEndpoint)(objectData, Parse, objectIdReward);
            return {
                status: 'success',
                result: true,
                reward,
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
exports.createReward = createReward;
function updateReward(Parse) {
    return async (request) => {
        try {
            const { rewardId, objectData } = request.params;
            const reward = await (0, rewardService_1.updateRewardService)(rewardId, objectData);
            return {
                status: 'success',
                result: true,
                reward,
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
exports.updateReward = updateReward;
function deleteReward(Parse) {
    return async (request) => {
        try {
            const { rewardId } = request.params;
            //const sessionToken = request.headers.authorization;
            await (0, rewardService_1.deleteRewardService)(rewardId);
            // Llama a deleteAdvice después de eliminar la Rewarda
            await (0, adviceControllers_1.deleteAdvice)(Parse)({ params: { objectIdReward: rewardId } });
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
exports.deleteReward = deleteReward;
//# sourceMappingURL=rewardControllers.js.map