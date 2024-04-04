"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-catch */
Object.defineProperty(exports, "__esModule", { value: true });
exports.findInTableService = void 0;
const findInTable_1 = require("../database/findInTable");
async function findInTableService(table, key, value, page) {
    try {
        const result = await (0, findInTable_1.findInTableData)(table, key, value, page);
        return result;
    }
    catch (error) {
        throw error;
    }
}
exports.findInTableService = findInTableService;
//# sourceMappingURL=findInTableServices.js.map