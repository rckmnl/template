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
exports.deleteRewardData = exports.updateRewardData = exports.createRewardData = exports.getRewardByIdData = exports.getAllRewardsData = void 0;
const node_1 = __importDefault(require("parse/node"));
async function getAllRewardsData(page) {
    try {
        // Verificar si la página es nula o indefinida
        if (page === null || page === undefined) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Page number is missing.');
        }
        const Reward = node_1.default.Object.extend('reward');
        const query = new node_1.default.Query(Reward);
        query.limit(5); // Limita los resultados a 5 por página
        query.skip((page - 1) * 5); // Salta los companys de las páginas anteriores
        const reward = await query.find();
        if (!reward || reward.length === 0) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `No Reward found.`);
        }
        return reward;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllRewardsData = getAllRewardsData;
async function getRewardByIdData(rewardId) {
    try {
        // Verificar si personId es nulo o indefinido
        if (!rewardId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'reward ID is missing.');
        }
        const Reward = node_1.default.Object.extend('reward');
        const query = new node_1.default.Query(Reward);
        query.equalTo('objectId', rewardId);
        const reward = await query.first();
        if (!reward) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `reward with ID ${rewardId} does not exist.`);
        }
        return reward;
    }
    catch (error) {
        throw error;
    }
}
exports.getRewardByIdData = getRewardByIdData;
async function createRewardData(objectData) {
    try {
        // Verificar si objectData existe
        if (!objectData) {
            throw {
                code: node_1.default.Error.OBJECT_NOT_FOUND,
                message: 'objectData is missing.',
            };
        }
        const Reward = node_1.default.Object.extend('reward');
        const reward = new Reward();
        for (const key in objectData) {
            if (objectData.hasOwnProperty(key)) {
                reward.set(key, objectData[key]);
            }
        }
        await reward.save();
        return reward;
    }
    catch (error) {
        throw {
            code: error.code || node_1.default.Error.INTERNAL_SERVER_ERROR,
            message: error.message,
        };
    }
}
exports.createRewardData = createRewardData;
async function updateRewardData(rewardId, objectData) {
    try {
        // Verificar si personId y objectData existen
        if (!rewardId || !objectData) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'reward ID or objectData is missing.');
        }
        const Reward = node_1.default.Object.extend('reward');
        const query = new node_1.default.Query(Reward);
        query.equalTo('objectId', rewardId);
        const reward = await query.first();
        if (!reward) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `reward with ID ${rewardId} does not exist.`);
        }
        // Actualizar los campos permitidos
        for (const key in objectData) {
            reward.set(key, objectData[key]);
        }
        await reward.save(null, { useMasterKey: true });
        return reward;
    }
    catch (error) {
        throw error;
    }
}
exports.updateRewardData = updateRewardData;
async function deleteRewardData(rewardId) {
    try {
        // Verificar si personId es nulo o indefinido
        if (!rewardId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'reward ID is missing.');
        }
        const Reward = node_1.default.Object.extend('reward');
        const query = new node_1.default.Query(Reward);
        query.equalTo('objectId', rewardId);
        const reward = await query.first();
        if (!reward) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `reward with ID ${rewardId} does not exist.`);
        }
        await reward.destroy();
    }
    catch (error) {
        throw error;
    }
}
exports.deleteRewardData = deleteRewardData;
//# sourceMappingURL=reward.js.map