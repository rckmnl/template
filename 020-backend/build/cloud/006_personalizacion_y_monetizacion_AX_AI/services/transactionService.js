"use strict";
/* eslint-disable no-console */
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable no-useless-catch */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTransactionService = exports.updateTransactionService = exports.createTransactionService = exports.getTransactionByIdService = exports.getAllTransactionsService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
// import Parse from 'parse/node';
const transaction_1 = require("../database/transaction");
// import { assignRoleToUser } from '../utils/assignRoles';
// import { checkUserRole } from '../utils/accesControl';
async function getAllTransactionsService(page) {
    try {
        const transactions = await (0, transaction_1.getAllTransactionsData)(page);
        return transactions;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllTransactionsService = getAllTransactionsService;
async function getTransactionByIdService(transactionId) {
    try {
        const transaction = await (0, transaction_1.getTransactionByIdData)(transactionId);
        return transaction;
    }
    catch (error) {
        throw error;
    }
}
exports.getTransactionByIdService = getTransactionByIdService;
async function createTransactionService(objectData) {
    try {
        const transaction = await (0, transaction_1.createTransactionData)(objectData);
        //Asignar un rol por defecto al nuevo usuario
        // await assignRoleToUser(person, 'user');
        return transaction;
    }
    catch (error) {
        throw error;
    }
}
exports.createTransactionService = createTransactionService;
async function updateTransactionService(transactionId, objectData) {
    try {
        const transaction = await (0, transaction_1.updateTransactionData)(transactionId, objectData);
        return transaction;
    }
    catch (error) {
        throw error;
    }
}
exports.updateTransactionService = updateTransactionService;
async function deleteTransactionService(objectIdTransaction) {
    try {
        await (0, transaction_1.deleteTransactionData)(objectIdTransaction);
    }
    catch (error) {
        throw error;
    }
}
exports.deleteTransactionService = deleteTransactionService;
//# sourceMappingURL=transactionService.js.map