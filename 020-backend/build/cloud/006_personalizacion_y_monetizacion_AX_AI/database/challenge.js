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
exports.deleteChallengeData = exports.updateChallengeData = exports.createChallengeData = exports.getChallengeByIdData = exports.getAllChallengesData = void 0;
const node_1 = __importDefault(require("parse/node"));
async function getAllChallengesData(page) {
    try {
        // Verificar si la página es nula o indefinida
        if (page === null || page === undefined) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Page number is missing.');
        }
        const Challenge = node_1.default.Object.extend('challenge');
        const query = new node_1.default.Query(Challenge);
        query.limit(5); // Limita los resultados a 5 por página
        query.skip((page - 1) * 5); // Salta los companys de las páginas anteriores
        const challenge = await query.find();
        if (!challenge || challenge.length === 0) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `No challenges found.`);
        }
        return challenge;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllChallengesData = getAllChallengesData;
async function getChallengeByIdData(challengeId) {
    try {
        // Verificar si personId es nulo o indefinido
        if (!challengeId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'challenge ID is missing.');
        }
        const Challenge = node_1.default.Object.extend('challenge');
        const query = new node_1.default.Query(Challenge);
        query.equalTo('objectId', challengeId);
        const challenge = await query.first();
        if (!challenge) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `challenge with ID ${challengeId} does not exist.`);
        }
        return challenge;
    }
    catch (error) {
        throw error;
    }
}
exports.getChallengeByIdData = getChallengeByIdData;
async function createChallengeData(objectData) {
    try {
        // Verificar si objectData existe
        if (!objectData) {
            throw {
                code: node_1.default.Error.OBJECT_NOT_FOUND,
                message: 'objectData is missing.',
            };
        }
        const Challenge = node_1.default.Object.extend('challenge');
        const challenge = new Challenge();
        for (const key in objectData) {
            if (objectData.hasOwnProperty(key)) {
                challenge.set(key, objectData[key]);
            }
        }
        await challenge.save();
        return challenge;
    }
    catch (error) {
        throw {
            code: error.code || node_1.default.Error.INTERNAL_SERVER_ERROR,
            message: error.message,
        };
    }
}
exports.createChallengeData = createChallengeData;
async function updateChallengeData(challengeId, objectData) {
    try {
        // Verificar si personId y objectData existen
        if (!challengeId || !objectData) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'challenge ID or objectData is missing.');
        }
        const Challenge = node_1.default.Object.extend('challenge');
        const query = new node_1.default.Query(Challenge);
        query.equalTo('objectId', challengeId);
        const challenge = await query.first();
        if (!challenge) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `challenge with ID ${challengeId} does not exist.`);
        }
        // Actualizar los campos permitidos
        for (const key in objectData) {
            challenge.set(key, objectData[key]);
        }
        await challenge.save(null, { useMasterKey: true });
        return challenge;
    }
    catch (error) {
        throw error;
    }
}
exports.updateChallengeData = updateChallengeData;
async function deleteChallengeData(challengeId) {
    try {
        // Verificar si personId es nulo o indefinido
        if (!challengeId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Challenge ID is missing.');
        }
        const Challenge = node_1.default.Object.extend('challenge');
        const query = new node_1.default.Query(Challenge);
        query.equalTo('objectId', challengeId);
        const challenge = await query.first();
        if (!challenge) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `Challenge with ID ${challengeId} does not exist.`);
        }
        await challenge.destroy();
    }
    catch (error) {
        throw error;
    }
}
exports.deleteChallengeData = deleteChallengeData;
//# sourceMappingURL=challenge.js.map