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
exports.deleteFlightDataData = exports.updateFlightDataData = exports.createFlightDataData = exports.getFlightDataByIdData = exports.getAllFlightDatasData = void 0;
const node_1 = __importDefault(require("parse/node"));
async function getAllFlightDatasData(page) {
    try {
        // Verificar si la página es nula o indefinida
        if (page === null || page === undefined) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Page number is missing.');
        }
        const FlightData = node_1.default.Object.extend('flightData');
        const query = new node_1.default.Query(FlightData);
        query.limit(5); // Limita los resultados a 5 por página
        query.skip((page - 1) * 5); // Salta los drinks de las páginas anteriores
        const data = await query.find();
        if (!data || data.length === 0) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `No FlightDatas found.`);
        }
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllFlightDatasData = getAllFlightDatasData;
async function getFlightDataByIdData(flightdataId) {
    try {
        // Verificar si flightdataId es nulo o indefinido
        if (!flightdataId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'FlightData ID is missing.');
        }
        const FlightData = node_1.default.Object.extend('flightData');
        const query = new node_1.default.Query(FlightData);
        query.equalTo('objectId', flightdataId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `FlightData with ID ${flightdataId} does not exist.`);
        }
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getFlightDataByIdData = getFlightDataByIdData;
async function createFlightDataData(objectData) {
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
        const userPointer = node_1.default.User.createWithoutData(objectData.fli_person_id);
        const FlightData = node_1.default.Object.extend('flightData');
        const data = new FlightData();
        data.set('fli_person_id', userPointer);
        // Establecer otros campos del desafío
        for (const key in objectData) {
            if (objectData.hasOwnProperty(key) && key !== 'fli_person_id') {
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
exports.createFlightDataData = createFlightDataData;
async function updateFlightDataData(flightdataId, objectData) {
    try {
        // Verificar si flightdataId y objectData existen
        if (!flightdataId || !objectData) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'FlightData ID or objectData is missing.');
        }
        const FlightData = node_1.default.Object.extend('flightData');
        const query = new node_1.default.Query(FlightData);
        query.equalTo('objectId', flightdataId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `FlightData with ID ${flightdataId} does not exist.`);
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
exports.updateFlightDataData = updateFlightDataData;
async function deleteFlightDataData(flightdataId) {
    try {
        // Verificar si flightdataId es nulo o indefinido
        if (!flightdataId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'FlightData ID is missing.');
        }
        const FlightData = node_1.default.Object.extend('flightData');
        const query = new node_1.default.Query(FlightData);
        query.equalTo('objectId', flightdataId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `FlightData with ID ${flightdataId} does not exist.`);
        }
        await data.destroy();
    }
    catch (error) {
        throw error;
    }
}
exports.deleteFlightDataData = deleteFlightDataData;
//# sourceMappingURL=flightData.js.map