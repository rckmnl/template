"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdviceData = exports.updateAdviceData = exports.createAdviceData = exports.getAdviceByIdData = exports.getAllAdvicesData = void 0;
/* eslint-disable guard-for-in */
/* eslint-disable no-useless-catch */
/* eslint-disable no-inline-comments */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-throw-literal */
const node_1 = __importDefault(require("parse/node"));
async function getAllAdvicesData(page) {
    try {
        // Verificar si la página es nula o indefinida
        if (page === null || page === undefined) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Page number is missing.');
        }
        const Advice = node_1.default.Object.extend('advice');
        const query = new node_1.default.Query(Advice);
        query.limit(5); // Limita los resultados a 5 por página
        query.skip((page - 1) * 5); // Salta los drinks de las páginas anteriores
        const data = await query.find();
        if (!data || data.length === 0) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `No advices found.`);
        }
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllAdvicesData = getAllAdvicesData;
async function getAdviceByIdData(objectId) {
    try {
        // Verificar si drinkId es nulo o indefinido
        if (!objectId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Advice ID is missing.');
        }
        const Advice = node_1.default.Object.extend('advice');
        const query = new node_1.default.Query(Advice);
        query.equalTo('objectId', objectId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `Advice with ID ${objectId} does not exist.`);
        }
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAdviceByIdData = getAdviceByIdData;
async function createAdviceData(objectData) {
    try {
        // Verificar si objectData existe
        if (!objectData) {
            throw {
                code: node_1.default.Error.OBJECT_NOT_FOUND,
                message: 'objectData is missing.',
            };
        }
        const Advice = node_1.default.Object.extend('advice');
        const advice = new Advice();
        for (const key in objectData) {
            if (objectData.hasOwnProperty(key)) {
                advice.set(key, objectData[key]);
            }
        }
        await advice.save();
        return advice;
    }
    catch (error) {
        throw {
            code: error.code || node_1.default.Error.INTERNAL_SERVER_ERROR,
            message: error.message,
        };
    }
}
exports.createAdviceData = createAdviceData;
async function updateAdviceData(objectId, objectData) {
    try {
        // Verificar si drinkId y objectData existen
        if (!objectId || !objectData) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Advice ID or objectData is missing.');
        }
        const Advice = node_1.default.Object.extend('advice');
        const query = new node_1.default.Query(Advice);
        query.equalTo('objectId', objectId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `Advice with ID ${objectId} does not exist.`);
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
exports.updateAdviceData = updateAdviceData;
async function deleteAdviceData(objectIdPerson) {
    try {
        // Verificar si objectIdPerson es nulo o indefinido
        if (!objectIdPerson) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Person ID is missing.');
        }
        const Advice = node_1.default.Object.extend('advice');
        const query = new node_1.default.Query(Advice);
        query.equalTo('objectIdPerson', objectIdPerson); // Buscar por objectIdPerson
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `Advice with Person ID ${objectIdPerson} does not exist.`);
        }
        await data.destroy();
    }
    catch (error) {
        throw error;
    }
}
exports.deleteAdviceData = deleteAdviceData;
//# sourceMappingURL=advice.js.map