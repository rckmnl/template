"use strict";
/* eslint-disable no-inline-comments */
/* eslint-disable guard-for-in */
/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-throw-literal */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAchievementData = exports.updateAchievementData = exports.createAchievementData = exports.getAchievementByIdData = exports.getAllAchievementsData = void 0;
const node_1 = __importDefault(require("parse/node"));
async function getAllAchievementsData(page) {
    try {
        // Verificar si la página es nula o indefinida
        if (page === null || page === undefined) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Page number is missing.');
        }
        const Achievement = node_1.default.Object.extend('achievement');
        const query = new node_1.default.Query(Achievement);
        query.limit(5); // Limita los resultados a 5 por página
        query.skip((page - 1) * 5); // Salta los companys de las páginas anteriores
        const achievement = await query.find();
        if (!achievement || achievement.length === 0) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `No achievement found.`);
        }
        return achievement;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllAchievementsData = getAllAchievementsData;
async function getAchievementByIdData(achievementId) {
    try {
        // Verificar si personId es nulo o indefinido
        if (!achievementId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'achievement ID is missing.');
        }
        const Achievement = node_1.default.Object.extend('achievement');
        const query = new node_1.default.Query(Achievement);
        query.equalTo('objectId', achievementId);
        const achievement = await query.first();
        if (!achievement) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `achievement with ID ${achievementId} does not exist.`);
        }
        return achievement;
    }
    catch (error) {
        throw error;
    }
}
exports.getAchievementByIdData = getAchievementByIdData;
async function createAchievementData(objectData) {
    try {
        // Verificar si objectData existe
        if (!objectData) {
            throw {
                code: node_1.default.Error.OBJECT_NOT_FOUND,
                message: 'objectData is missing.',
            };
        }
        const Achievement = node_1.default.Object.extend('achievement');
        const achievement = new Achievement();
        for (const key in objectData) {
            if (objectData.hasOwnProperty(key)) {
                achievement.set(key, objectData[key]);
            }
        }
        await achievement.save();
        return achievement;
    }
    catch (error) {
        throw {
            code: error.code || node_1.default.Error.INTERNAL_SERVER_ERROR,
            message: error.message,
        };
    }
}
exports.createAchievementData = createAchievementData;
async function updateAchievementData(achievementId, objectData) {
    try {
        // Verificar si personId y objectData existen
        if (!achievementId || !objectData) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'achievement ID or objectData is missing.');
        }
        const Achievement = node_1.default.Object.extend('achievement');
        const query = new node_1.default.Query(Achievement);
        query.equalTo('objectId', achievementId);
        const achievement = await query.first();
        if (!achievement) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `achievement with ID ${achievementId} does not exist.`);
        }
        // Actualizar los campos permitidos
        for (const key in objectData) {
            achievement.set(key, objectData[key]);
        }
        await achievement.save(null, { useMasterKey: true });
        return achievement;
    }
    catch (error) {
        throw error;
    }
}
exports.updateAchievementData = updateAchievementData;
async function deleteAchievementData(achievementId) {
    try {
        // Verificar si personId es nulo o indefinido
        if (!achievementId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'achievement ID is missing.');
        }
        const Achievement = node_1.default.Object.extend('achievement');
        const query = new node_1.default.Query(Achievement);
        query.equalTo('objectId', achievementId);
        const achievement = await query.first();
        if (!achievement) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `achievement with ID ${achievement} does not exist.`);
        }
        await achievement.destroy();
    }
    catch (error) {
        throw error;
    }
}
exports.deleteAchievementData = deleteAchievementData;
//# sourceMappingURL=achievement.js.map