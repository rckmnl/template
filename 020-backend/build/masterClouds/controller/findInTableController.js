"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
Object.defineProperty(exports, "__esModule", { value: true });
exports.findInTable = void 0;
const findInTableServices_1 = require("../service/findInTableServices");
function findInTable(Parse) {
    return async (request) => {
        try {
            const { table, key, value, page } = request.params;
            const data = await (0, findInTableServices_1.findInTableService)(table, key, value, page);
            return {
                status: 'success',
                result: true,
                data,
            };
        }
        catch (error) {
            console.error(`Código de error: ${error.code}, Mensaje de error: ${error.message}`);
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
exports.findInTable = findInTable;
//# sourceMappingURL=findInTableController.js.map