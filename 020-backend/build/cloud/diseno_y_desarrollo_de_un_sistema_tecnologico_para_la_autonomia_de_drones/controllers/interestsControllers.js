"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
// /* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInterests = exports.updateInterests = exports.createInterests = exports.getInterestsById = exports.getAllInterestss = void 0;
const interestsService_1 = require("../services/interestsService");
function getAllInterestss(Parse) {
    return async (request) => {
        try {
            const { page } = request.params;
            const interests = await (0, interestsService_1.getAllInterestssService)(page);
            return {
                status: 'success',
                result: true,
                interests,
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
exports.getAllInterestss = getAllInterestss;
function getInterestsById(Parse) {
    return async (request) => {
        try {
            const { interestsId } = request.params;
            const interests = await (0, interestsService_1.getInterestsByIdService)(interestsId);
            return {
                status: 'success',
                result: true,
                interests,
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
exports.getInterestsById = getInterestsById;
function createInterests(Parse) {
    return async (request) => {
        try {
            const { objectData } = request.params;
            const interests = await (0, interestsService_1.createInterestsService)(objectData);
            return {
                status: 'success',
                result: true,
                interests,
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
exports.createInterests = createInterests;
function updateInterests(Parse) {
    return async (request) => {
        try {
            const { interestsId, objectData } = request.params;
            const interests = await (0, interestsService_1.updateInterestsService)(interestsId, objectData);
            return {
                status: 'success',
                result: true,
                interests,
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
exports.updateInterests = updateInterests;
function deleteInterests(Parse) {
    return async (request) => {
        try {
            const { interestsId } = request.params;
            await (0, interestsService_1.deleteInterestsService)(interestsId);
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
exports.deleteInterests = deleteInterests;
//# sourceMappingURL=interestsControllers.js.map