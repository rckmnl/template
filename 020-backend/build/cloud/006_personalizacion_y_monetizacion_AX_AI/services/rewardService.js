"use strict";
/* eslint-disable no-console */
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable no-useless-catch */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRewardService = exports.updateRewardService = exports.createRewardService = exports.getRewardByIdService = exports.getAllRewardsService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
// import Parse from 'parse/node';
const reward_1 = require("../database/reward");
// import { assignRoleToUser } from '../utils/assignRoles';
// import { checkUserRole } from '../utils/accesControl';
async function getAllRewardsService(page) {
    try {
        const rewards = await (0, reward_1.getAllRewardsData)(page);
        return rewards;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllRewardsService = getAllRewardsService;
async function getRewardByIdService(rewardId) {
    try {
        const reward = await (0, reward_1.getRewardByIdData)(rewardId);
        return reward;
    }
    catch (error) {
        throw error;
    }
}
exports.getRewardByIdService = getRewardByIdService;
async function createRewardService(objectData) {
    try {
        const reward = await (0, reward_1.createRewardData)(objectData);
        //Asignar un rol por defecto al nuevo usuario
        // await assignRoleToUser(person, 'user');
        return reward;
    }
    catch (error) {
        throw error;
    }
}
exports.createRewardService = createRewardService;
async function updateRewardService(rewardId, objectData) {
    try {
        const reward = await (0, reward_1.updateRewardData)(rewardId, objectData);
        return reward;
    }
    catch (error) {
        throw error;
    }
}
exports.updateRewardService = updateRewardService;
async function deleteRewardService(objectIdReward) {
    try {
        await (0, reward_1.deleteRewardData)(objectIdReward);
    }
    catch (error) {
        throw error;
    }
}
exports.deleteRewardService = deleteRewardService;
//# sourceMappingURL=rewardService.js.map