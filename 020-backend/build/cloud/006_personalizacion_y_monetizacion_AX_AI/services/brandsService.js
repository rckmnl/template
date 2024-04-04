"use strict";
/* eslint-disable no-console */
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable no-useless-catch */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBrandService = exports.updateBrandService = exports.createBrandService = exports.getBrandByIdService = exports.getAllBrandsService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
// import Parse from 'parse/node';
const brand_1 = require("../database/brand");
// import { assignRoleToUser } from '../utils/assignRoles';
// import { checkUserRole } from '../utils/accesControl';
async function getAllBrandsService(page) {
    try {
        const brands = await (0, brand_1.getAllBrandsData)(page);
        return brands;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllBrandsService = getAllBrandsService;
async function getBrandByIdService(brandId) {
    try {
        const brand = await (0, brand_1.getBrandByIdData)(brandId);
        return brand;
    }
    catch (error) {
        throw error;
    }
}
exports.getBrandByIdService = getBrandByIdService;
async function createBrandService(objectData) {
    try {
        const brand = await (0, brand_1.createBrandData)(objectData);
        //Asignar un rol por defecto al nuevo usuario
        // await assignRoleToUser(person, 'user');
        return brand;
    }
    catch (error) {
        throw error;
    }
}
exports.createBrandService = createBrandService;
async function updateBrandService(brandId, objectData) {
    try {
        const brand = await (0, brand_1.updateBrandData)(brandId, objectData);
        return brand;
    }
    catch (error) {
        throw error;
    }
}
exports.updateBrandService = updateBrandService;
async function deleteBrandService(objectIdBrand) {
    try {
        await (0, brand_1.deleteBrandData)(objectIdBrand);
    }
    catch (error) {
        throw error;
    }
}
exports.deleteBrandService = deleteBrandService;
//# sourceMappingURL=brandsService.js.map