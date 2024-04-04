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
exports.deleteFireDetectionData = exports.updateFireDetectionData = exports.createFireDetectionData = exports.getFireDetectionByIdData = exports.getAllFireDetectionsData = void 0;
const node_1 = __importDefault(require("parse/node"));
async function getAllFireDetectionsData(page) {
    try {
        // Verificar si la página es nula o indefinida
        if (page === null || page === undefined) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Page number is missing.');
        }
        const FireDetection = node_1.default.Object.extend('firedetection');
        const query = new node_1.default.Query(FireDetection);
        query.limit(5); // Limita los resultados a 5 por página
        query.skip((page - 1) * 5); // Salta los drinks de las páginas anteriores
        const data = await query.find();
        if (!data || data.length === 0) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `No FireDetectiones found.`);
        }
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllFireDetectionsData = getAllFireDetectionsData;
async function getFireDetectionByIdData(firedetectionId) {
    try {
        // Verificar si firedetectionId es nulo o indefinido
        if (!firedetectionId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'FireDetection ID is missing.');
        }
        const FireDetection = node_1.default.Object.extend('firedetection');
        const query = new node_1.default.Query(FireDetection);
        query.equalTo('objectId', firedetectionId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `FireDetection with ID ${firedetectionId} does not exist.`);
        }
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getFireDetectionByIdData = getFireDetectionByIdData;
async function createFireDetectionData(objectData) {
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
        const userPointer = node_1.default.User.createWithoutData(objectData.fire_person_id);
        const FireDetection = node_1.default.Object.extend('firedetection');
        const data = new FireDetection();
        data.set('fire_person_id', userPointer);
        // Establecer otros campos del desafío
        for (const key in objectData) {
            if (objectData.hasOwnProperty(key) && key !== 'fire_person_id') {
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
exports.createFireDetectionData = createFireDetectionData;
async function updateFireDetectionData(firedetectionId, objectData) {
    try {
        // Verificar si firedetectionId y objectData existen
        if (!firedetectionId || !objectData) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'FireDetection ID or objectData is missing.');
        }
        const FireDetection = node_1.default.Object.extend('firedetection');
        const query = new node_1.default.Query(FireDetection);
        query.equalTo('objectId', firedetectionId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `FireDetection with ID ${firedetectionId} does not exist.`);
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
exports.updateFireDetectionData = updateFireDetectionData;
async function deleteFireDetectionData(firedetectionId) {
    try {
        // Verificar si firedetectionId es nulo o indefinido
        if (!firedetectionId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'FireDetection ID is missing.');
        }
        const FireDetection = node_1.default.Object.extend('firedetection');
        const query = new node_1.default.Query(FireDetection);
        query.equalTo('objectId', firedetectionId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `FireDetection with ID ${firedetectionId} does not exist.`);
        }
        await data.destroy();
    }
    catch (error) {
        throw error;
    }
}
exports.deleteFireDetectionData = deleteFireDetectionData;
//# sourceMappingURL=fireDetection.js.map