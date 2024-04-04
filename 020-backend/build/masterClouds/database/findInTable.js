"use strict";
/* eslint-disable complexity */
/* eslint-disable guard-for-in */
/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-inline-comments */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-throw-literal */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findInTableData = void 0;
const node_1 = __importDefault(require("parse/node"));
async function findInTableData(table, key, value, page) {
    try {
        // Verificar si inventoryId es nulo o indefinido
        if (!value || !key || !value || !page) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Fields are missing.');
        }
        const Table = node_1.default.Object.extend(table);
        const query = new node_1.default.Query(Table);
        query.limit(5); // Limita los resultados a 5 por página
        query.skip((page - 1) * 5);
        query.equalTo(key, value);
        const result = await query.find();
        if (!result) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `No results found.`);
        }
        else if (result.length === 0) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `No results found on this page.`);
        }
        return result;
    }
    catch (error) {
        throw error;
    }
}
exports.findInTableData = findInTableData;
//# sourceMappingURL=findInTable.js.map