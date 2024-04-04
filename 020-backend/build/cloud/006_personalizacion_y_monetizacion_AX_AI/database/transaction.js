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
exports.deleteTransactionData = exports.updateTransactionData = exports.createTransactionData = exports.getTransactionByIdData = exports.getAllTransactionsData = void 0;
const node_1 = __importDefault(require("parse/node"));
async function getAllTransactionsData(page) {
    try {
        // Verificar si la página es nula o indefinida
        if (page === null || page === undefined) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Page number is missing.');
        }
        const Transaction = node_1.default.Object.extend('transaction');
        const query = new node_1.default.Query(Transaction);
        query.limit(5); // Limita los resultados a 5 por página
        query.skip((page - 1) * 5); // Salta los companys de las páginas anteriores
        const transaction = await query.find();
        if (!transaction || transaction.length === 0) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `No transaction found.`);
        }
        return transaction;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllTransactionsData = getAllTransactionsData;
async function getTransactionByIdData(transactionId) {
    try {
        // Verificar si personId es nulo o indefinido
        if (!transactionId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Transaction ID is missing.');
        }
        const Transaction = node_1.default.Object.extend('transaction');
        const query = new node_1.default.Query(Transaction);
        query.equalTo('objectId', transactionId);
        const transaction = await query.first();
        if (!transaction) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `reward with ID ${transactionId} does not exist.`);
        }
        return transaction;
    }
    catch (error) {
        throw error;
    }
}
exports.getTransactionByIdData = getTransactionByIdData;
async function createTransactionData(objectData) {
    try {
        // Verificar si objectData existe
        if (!objectData) {
            throw {
                code: node_1.default.Error.OBJECT_NOT_FOUND,
                message: 'objectData is missing.',
            };
        }
        const Transaction = node_1.default.Object.extend('transaction');
        const transaction = new Transaction();
        for (const key in objectData) {
            if (objectData.hasOwnProperty(key)) {
                transaction.set(key, objectData[key]);
            }
        }
        await transaction.save();
        return transaction;
    }
    catch (error) {
        throw {
            code: error.code || node_1.default.Error.INTERNAL_SERVER_ERROR,
            message: error.message,
        };
    }
}
exports.createTransactionData = createTransactionData;
async function updateTransactionData(transactionId, objectData) {
    try {
        // Verificar si personId y objectData existen
        if (!transactionId || !objectData) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'transaction ID or objectData is missing.');
        }
        const Transaction = node_1.default.Object.extend('transaction');
        const query = new node_1.default.Query(Transaction);
        query.equalTo('objectId', transactionId);
        const transaction = await query.first();
        if (!transaction) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `reward with ID ${transactionId} does not exist.`);
        }
        // Actualizar los campos permitidos
        for (const key in objectData) {
            transaction.set(key, objectData[key]);
        }
        await transaction.save(null, { useMasterKey: true });
        return transaction;
    }
    catch (error) {
        throw error;
    }
}
exports.updateTransactionData = updateTransactionData;
async function deleteTransactionData(transactionId) {
    try {
        // Verificar si personId es nulo o indefinido
        if (!transactionId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'transaction ID is missing.');
        }
        const Transaction = node_1.default.Object.extend('transaction');
        const query = new node_1.default.Query(Transaction);
        query.equalTo('objectId', transactionId);
        const transaction = await query.first();
        if (!transaction) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `reward with ID ${transactionId} does not exist.`);
        }
        await transaction.destroy();
    }
    catch (error) {
        throw error;
    }
}
exports.deleteTransactionData = deleteTransactionData;
//# sourceMappingURL=transaction.js.map