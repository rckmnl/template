"use strict";
/* eslint-disable no-console */
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable no-useless-catch */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAchievementService = exports.updateAchievementService = exports.createAchievementService = exports.getAchievementByIdService = exports.getAllAchievementsService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
// import Parse from 'parse/node';
const achievement_1 = require("../database/achievement");
// import { assignRoleToUser } from '../utils/assignRoles';
// import { checkUserRole } from '../utils/accesControl';
async function getAllAchievementsService(page) {
    try {
        const achievements = await (0, achievement_1.getAllAchievementsData)(page);
        return achievements;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllAchievementsService = getAllAchievementsService;
async function getAchievementByIdService(achievementId) {
    try {
        const achievement = await (0, achievement_1.getAchievementByIdData)(achievementId);
        return achievement;
    }
    catch (error) {
        throw error;
    }
}
exports.getAchievementByIdService = getAchievementByIdService;
async function createAchievementService(objectData) {
    try {
        const achievement = await (0, achievement_1.createAchievementData)(objectData);
        //Asignar un rol por defecto al nuevo usuario
        // await assignRoleToUser(person, 'user');
        return achievement;
    }
    catch (error) {
        throw error;
    }
}
exports.createAchievementService = createAchievementService;
async function updateAchievementService(achievementId, objectData) {
    try {
        const achievement = await (0, achievement_1.updateAchievementData)(achievementId, objectData);
        return achievement;
    }
    catch (error) {
        throw error;
    }
}
exports.updateAchievementService = updateAchievementService;
async function deleteAchievementService(objectIdAchievement) {
    try {
        await (0, achievement_1.deleteAchievementData)(objectIdAchievement);
    }
    catch (error) {
        throw error;
    }
}
exports.deleteAchievementService = deleteAchievementService;
//# sourceMappingURL=achievemenService.js.map