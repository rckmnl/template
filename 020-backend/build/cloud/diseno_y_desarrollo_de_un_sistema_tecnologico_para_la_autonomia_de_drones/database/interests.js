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
exports.deleteInterestsData = exports.updateInterestsData = exports.createInterestsData = exports.getInterestsByIdData = exports.getAllInterestssData = void 0;
const node_1 = __importDefault(require("parse/node"));
async function getAllInterestssData(page) {
    try {
        // Verificar si la página es nula o indefinida
        if (page === null || page === undefined) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Page number is missing.');
        }
        const Interests = node_1.default.Object.extend('interests');
        const query = new node_1.default.Query(Interests);
        query.limit(5); // Limita los resultados a 5 por página
        query.skip((page - 1) * 5); // Salta los drinks de las páginas anteriores
        const data = await query.find();
        if (!data || data.length === 0) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `No Interestses found.`);
        }
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllInterestssData = getAllInterestssData;
async function getInterestsByIdData(interestsId) {
    try {
        // Verificar si interestsId es nulo o indefinido
        if (!interestsId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Interests ID is missing.');
        }
        const Interests = node_1.default.Object.extend('interests');
        const query = new node_1.default.Query(Interests);
        query.equalTo('objectId', interestsId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `Interests with ID ${interestsId} does not exist.`);
        }
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getInterestsByIdData = getInterestsByIdData;
async function createInterestsData(objectData) {
    try {
        // Verificar si objectData existe
        if (!objectData) {
            throw {
                code: node_1.default.Error.OBJECT_NOT_FOUND,
                message: 'objectData is missing.',
            };
        }
        const User = node_1.default.Object.extend('User');
        const user = await new User();
        // Crear un puntero a la persona usando el ID proporcionado
        const userPointer = node_1.default.User.createWithoutData(objectData.variable_person_id);
        const Interests = node_1.default.Object.extend('interests');
        const data = new Interests();
        data.set('variable_person_id', userPointer);
        // Establecer otros campos del desafío
        for (const key in objectData) {
            if (objectData.hasOwnProperty(key) && key !== 'variable_person_id') {
                data.set(key, objectData[key]);
            }
        }
        await data.save();
        return data;
    }
    catch (error) {
        throw {
            code: error.code || node_1.default.Error.INTERNAL_SERVER_ERROR,
            message: error.message,
        };
    }
}
exports.createInterestsData = createInterestsData;
async function updateInterestsData(interestsId, objectData) {
    try {
        // Verificar si interestsId y objectData existen
        if (!interestsId || !objectData) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Interests ID or objectData is missing.');
        }
        const Interests = node_1.default.Object.extend('interests');
        const query = new node_1.default.Query(Interests);
        query.equalTo('objectId', interestsId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `Interests with ID ${interestsId} does not exist.`);
        }
        // Actualizar los campos permitidos
        for (const key in objectData) {
            data.set(key, objectData[key]);
        }
        await data.save(null, { useMasterKey: true });
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.updateInterestsData = updateInterestsData;
async function deleteInterestsData(interestsId) {
    try {
        // Verificar si interestsId es nulo o indefinido
        if (!interestsId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Interests ID is missing.');
        }
        const Interests = node_1.default.Object.extend('interests');
        const query = new node_1.default.Query(Interests);
        query.equalTo('objectId', interestsId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `Interests with ID ${interestsId} does not exist.`);
        }
        await data.destroy();
    }
    catch (error) {
        throw error;
    }
}
exports.deleteInterestsData = deleteInterestsData;
//# sourceMappingURL=interests.js.map