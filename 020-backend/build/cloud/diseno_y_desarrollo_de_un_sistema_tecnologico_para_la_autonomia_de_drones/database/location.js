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
exports.deleteLocationData = exports.updateLocationData = exports.createLocationData = exports.getLocationByIdData = exports.getAllLocationsData = void 0;
const node_1 = __importDefault(require("parse/node"));
async function getAllLocationsData(page) {
    try {
        // Verificar si la página es nula o indefinida
        if (page === null || page === undefined) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Page number is missing.');
        }
        const Location = node_1.default.Object.extend('location');
        const query = new node_1.default.Query(Location);
        query.limit(5); // Limita los resultados a 5 por página
        query.skip((page - 1) * 5); // Salta los drinks de las páginas anteriores
        const data = await query.find();
        if (!data || data.length === 0) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `No Locationes found.`);
        }
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllLocationsData = getAllLocationsData;
async function getLocationByIdData(locationId) {
    try {
        // Verificar si locationId es nulo o indefinido
        if (!locationId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Location ID is missing.');
        }
        const Location = node_1.default.Object.extend('location');
        const query = new node_1.default.Query(Location);
        query.equalTo('objectId', locationId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `Location with ID ${locationId} does not exist.`);
        }
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getLocationByIdData = getLocationByIdData;
async function createLocationData(objectData) {
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
        const userPointer = node_1.default.User.createWithoutData(objectData.loc_person_id);
        const Location = node_1.default.Object.extend('location');
        const data = new Location();
        data.set('loc_person_id', userPointer);
        // Establecer otros campos del desafío
        for (const key in objectData) {
            if (objectData.hasOwnProperty(key) && key !== 'loc_person_id') {
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
exports.createLocationData = createLocationData;
async function updateLocationData(locationId, objectData) {
    try {
        // Verificar si locationId y objectData existen
        if (!locationId || !objectData) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Location ID or objectData is missing.');
        }
        const Location = node_1.default.Object.extend('location');
        const query = new node_1.default.Query(Location);
        query.equalTo('objectId', locationId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `Location with ID ${locationId} does not exist.`);
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
exports.updateLocationData = updateLocationData;
async function deleteLocationData(locationId) {
    try {
        // Verificar si locationId es nulo o indefinido
        if (!locationId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Location ID is missing.');
        }
        const Location = node_1.default.Object.extend('location');
        const query = new node_1.default.Query(Location);
        query.equalTo('objectId', locationId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `Location with ID ${locationId} does not exist.`);
        }
        await data.destroy();
    }
    catch (error) {
        throw error;
    }
}
exports.deleteLocationData = deleteLocationData;
//# sourceMappingURL=location.js.map