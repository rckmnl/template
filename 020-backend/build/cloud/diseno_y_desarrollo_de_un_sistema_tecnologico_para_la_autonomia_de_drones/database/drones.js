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
exports.deleteDronData = exports.updateDronData = exports.createDronData = exports.getDronByIdData = exports.getAllDronesData = void 0;
const node_1 = __importDefault(require("parse/node"));
async function getAllDronesData(page) {
    try {
        // Verificar si la página es nula o indefinida
        if (page === null || page === undefined) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Page number is missing.');
        }
        const Dron = node_1.default.Object.extend('dron');
        const query = new node_1.default.Query(Dron);
        query.limit(5); // Limita los resultados a 5 por página
        query.skip((page - 1) * 5); // Salta los drinks de las páginas anteriores
        const data = await query.find();
        if (!data || data.length === 0) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `No Drones found.`);
        }
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllDronesData = getAllDronesData;
async function getDronByIdData(dronId) {
    try {
        // Verificar si dronId es nulo o indefinido
        if (!dronId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Dron ID is missing.');
        }
        const Dron = node_1.default.Object.extend('dron');
        const query = new node_1.default.Query(Dron);
        query.equalTo('objectId', dronId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `Dron with ID ${dronId} does not exist.`);
        }
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getDronByIdData = getDronByIdData;
async function createDronData(objectData) {
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
        const userPointer = node_1.default.User.createWithoutData(objectData.dro_person_id);
        const Dron = node_1.default.Object.extend('dron');
        const data = new Dron();
        data.set('dro_person_id', userPointer);
        // Establecer otros campos del desafío
        for (const key in objectData) {
            if (objectData.hasOwnProperty(key) && key !== 'dro_person_id') {
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
exports.createDronData = createDronData;
async function updateDronData(dronId, objectData) {
    try {
        // Verificar si dronId y objectData existen
        if (!dronId || !objectData) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Dron ID or objectData is missing.');
        }
        const Dron = node_1.default.Object.extend('dron');
        const query = new node_1.default.Query(Dron);
        query.equalTo('objectId', dronId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `Dron with ID ${dronId} does not exist.`);
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
exports.updateDronData = updateDronData;
async function deleteDronData(dronId) {
    try {
        // Verificar si dronId es nulo o indefinido
        if (!dronId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Dron ID is missing.');
        }
        const Dron = node_1.default.Object.extend('dron');
        const query = new node_1.default.Query(Dron);
        query.equalTo('objectId', dronId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `Dron with ID ${dronId} does not exist.`);
        }
        await data.destroy();
    }
    catch (error) {
        throw error;
    }
}
exports.deleteDronData = deleteDronData;
//# sourceMappingURL=drones.js.map