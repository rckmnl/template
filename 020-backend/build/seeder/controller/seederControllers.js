"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDataController = void 0;
const seederService_1 = require("../services/seederService");
/* eslint-disable no-console */
function createDataController(Parse) {
    return async (request) => {
        try {
            const { data } = request.params;
            const sessionToken = request.headers.authorization;
            //* console.log('data', data);
            await (0, seederService_1.createDataService)(data, sessionToken);
            return {
                status: 'success',
                result: true,
                msg: 'Data created successfully',
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
exports.createDataController = createDataController;
//# sourceMappingURL=seederControllers.js.map