"use strict";
/* eslint-disable prefer-destructuring */
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBrand = exports.updateBrand = exports.createBrand = exports.getBrandById = exports.getAllBrands = void 0;
const brandsService_1 = require("../services/brandsService");
const sendToIaEndpoint_1 = require("../utils/sendToIaEndpoint");
const adviceControllers_1 = require("./adviceControllers");
function getAllBrands(Parse) {
    return async (request) => {
        try {
            const { page } = request.params;
            const brands = await (0, brandsService_1.getAllBrandsService)(page);
            return {
                status: 'success',
                result: true,
                brands,
            };
        }
        catch (error) {
            console.error(`Error code: ${error.code}, Error message: ${error.message}`);
            return {
                status: 'error',
                result: false,
                errorDetails: {
                    code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
                    message: error.message,
                },
            };
        }
    };
}
exports.getAllBrands = getAllBrands;
function getBrandById(Parse) {
    return async (request) => {
        try {
            const { brandId } = request.params;
            const brand = await (0, brandsService_1.getBrandByIdService)(brandId);
            return {
                status: 'success',
                result: true,
                brand,
            };
        }
        catch (error) {
            console.error(`Error code: ${error.code}, Error message: ${error.message}`);
            return {
                status: 'error',
                result: false,
                errorDetails: {
                    code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
                    message: error.message,
                },
            };
        }
    };
}
exports.getBrandById = getBrandById;
function createBrand(Parse) {
    return async (request) => {
        try {
            const { objectData } = request.params;
            const brand = await (0, brandsService_1.createBrandService)(objectData);
            //obtengo el objectId de Brand
            const objectIdBrand = brand.id;
            (0, sendToIaEndpoint_1.sendToIaEndpoint)(objectData, Parse, objectIdBrand);
            return {
                status: 'success',
                result: true,
                brand,
            };
        }
        catch (error) {
            console.error(`Error code: ${error.code}, Error message: ${error.message}`);
            return {
                status: 'error',
                result: false,
                errorDetails: {
                    code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
                    message: error.message,
                },
            };
        }
    };
}
exports.createBrand = createBrand;
function updateBrand(Parse) {
    return async (request) => {
        try {
            const { brandId, objectData } = request.params;
            const brand = await (0, brandsService_1.updateBrandService)(brandId, objectData);
            return {
                status: 'success',
                result: true,
                brand,
            };
        }
        catch (error) {
            console.error(`Error code: ${error.code}, Error message: ${error.message}`);
            return {
                status: 'error',
                result: false,
                errorDetails: {
                    code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
                    message: error.message,
                },
            };
        }
    };
}
exports.updateBrand = updateBrand;
function deleteBrand(Parse) {
    return async (request) => {
        try {
            const { brandId } = request.params;
            //const sessionToken = request.headers.authorization;
            await (0, brandsService_1.deleteBrandService)(brandId);
            // Llama a deleteAdvice después de eliminar la Branda
            await (0, adviceControllers_1.deleteAdvice)(Parse)({ params: { objectIdBrand: brandId } });
            return {
                status: 'success',
                result: true,
            };
        }
        catch (error) {
            console.error(`Error code: ${error.code}, Error message: ${error.message}`);
            return {
                status: 'error',
                result: false,
                errorDetails: {
                    code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
                    message: error.message,
                },
            };
        }
    };
}
exports.deleteBrand = deleteBrand;
//# sourceMappingURL=brandControllers.js.map