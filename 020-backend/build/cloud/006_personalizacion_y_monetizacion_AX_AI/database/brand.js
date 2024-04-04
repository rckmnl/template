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
exports.deleteBrandData = exports.updateBrandData = exports.createBrandData = exports.getBrandByIdData = exports.getAllBrandsData = void 0;
const node_1 = __importDefault(require("parse/node"));
async function getAllBrandsData(page) {
    try {
        // Verificar si la página es nula o indefinida
        if (page === null || page === undefined) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Page number is missing.');
        }
        const Brand = node_1.default.Object.extend('brand');
        const query = new node_1.default.Query(Brand);
        query.limit(5); // Limita los resultados a 5 por página
        query.skip((page - 1) * 5); // Salta los companys de las páginas anteriores
        const brand = await query.find();
        if (!brand || brand.length === 0) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `No brands found.`);
        }
        return brand;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllBrandsData = getAllBrandsData;
async function getBrandByIdData(brandId) {
    try {
        // Verificar si personId es nulo o indefinido
        if (!brandId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'brand ID is missing.');
        }
        const Brand = node_1.default.Object.extend('brand');
        const query = new node_1.default.Query(Brand);
        query.equalTo('objectId', brandId);
        const brand = await query.first();
        if (!brand) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `brand with ID ${brandId} does not exist.`);
        }
        return brand;
    }
    catch (error) {
        throw error;
    }
}
exports.getBrandByIdData = getBrandByIdData;
async function createBrandData(objectData) {
    try {
        // Verificar si objectData existe
        if (!objectData) {
            throw {
                code: node_1.default.Error.OBJECT_NOT_FOUND,
                message: 'objectData is missing.',
            };
        }
        const Brand = node_1.default.Object.extend('brand');
        const brand = new Brand();
        for (const key in objectData) {
            if (objectData.hasOwnProperty(key)) {
                brand.set(key, objectData[key]);
            }
        }
        await brand.save();
        return brand;
    }
    catch (error) {
        throw {
            code: error.code || node_1.default.Error.INTERNAL_SERVER_ERROR,
            message: error.message,
        };
    }
}
exports.createBrandData = createBrandData;
async function updateBrandData(brandId, objectData) {
    try {
        // Verificar si personId y objectData existen
        if (!brandId || !objectData) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'brand ID or objectData is missing.');
        }
        const Brand = node_1.default.Object.extend('brand');
        const query = new node_1.default.Query(Brand);
        query.equalTo('objectId', brandId);
        const brand = await query.first();
        if (!brand) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `Brand with ID ${brandId} does not exist.`);
        }
        // Actualizar los campos permitidos
        for (const key in objectData) {
            brand.set(key, objectData[key]);
        }
        await brand.save(null, { useMasterKey: true });
        return brand;
    }
    catch (error) {
        throw error;
    }
}
exports.updateBrandData = updateBrandData;
async function deleteBrandData(brandId) {
    try {
        // Verificar si personId es nulo o indefinido
        if (!brandId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Brand ID is missing.');
        }
        const Brand = node_1.default.Object.extend('brand');
        const query = new node_1.default.Query(Brand);
        query.equalTo('objectId', brandId);
        const brand = await query.first();
        if (!brand) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `brand with ID ${brandId} does not exist.`);
        }
        await brand.destroy();
    }
    catch (error) {
        throw error;
    }
}
exports.deleteBrandData = deleteBrandData;
//# sourceMappingURL=brand.js.map