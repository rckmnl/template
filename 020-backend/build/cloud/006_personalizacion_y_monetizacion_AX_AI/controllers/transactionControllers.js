"use strict";
/* eslint-disable prefer-destructuring */
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTransaction = exports.updateTransaction = exports.createTransaction = exports.getTransactionById = exports.getAllTransactions = void 0;
const transactionService_1 = require("../services/transactionService");
const sendToIaEndpoint_1 = require("../utils/sendToIaEndpoint");
const adviceControllers_1 = require("./adviceControllers");
function getAllTransactions(Parse) {
    return async (request) => {
        try {
            const { page } = request.params;
            const transactions = await (0, transactionService_1.getAllTransactionsService)(page);
            return {
                status: 'success',
                result: true,
                transactions,
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
exports.getAllTransactions = getAllTransactions;
function getTransactionById(Parse) {
    return async (request) => {
        try {
            const { transactionId } = request.params;
            const transaction = await (0, transactionService_1.getTransactionByIdService)(transactionId);
            return {
                status: 'success',
                result: true,
                transaction,
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
exports.getTransactionById = getTransactionById;
function createTransaction(Parse) {
    return async (request) => {
        try {
            const { objectData } = request.params;
            const transaction = await (0, transactionService_1.createTransactionService)(objectData);
            //obtengo el objectId de Transaction
            const objectIdTransaction = transaction.id;
            (0, sendToIaEndpoint_1.sendToIaEndpoint)(objectData, Parse, objectIdTransaction);
            return {
                status: 'success',
                result: true,
                transaction,
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
exports.createTransaction = createTransaction;
function updateTransaction(Parse) {
    return async (request) => {
        try {
            const { transactionId, objectData } = request.params;
            const transaction = await (0, transactionService_1.updateTransactionService)(transactionId, objectData);
            return {
                status: 'success',
                result: true,
                transaction,
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
exports.updateTransaction = updateTransaction;
function deleteTransaction(Parse) {
    return async (request) => {
        try {
            const { transactionId } = request.params;
            //const sessionToken = request.headers.authorization;
            await (0, transactionService_1.deleteTransactionService)(transactionId);
            // Llama a deleteAdvice después de eliminar la Transactiona
            await (0, adviceControllers_1.deleteAdvice)(Parse)({ params: { objectIdTransaction: transactionId } });
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
exports.deleteTransaction = deleteTransaction;
//# sourceMappingURL=transactionControllers.js.map