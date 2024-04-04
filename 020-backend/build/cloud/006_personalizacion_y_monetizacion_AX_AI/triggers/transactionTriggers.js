"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const node_1 = __importDefault(require("parse/node"));
const validateTransaction_1 = require("../validators/validateTransaction");
node_1.default.Cloud.beforeSave('transaction', async (request) => {
    try {
        // Convert the Parse object to a JavaScript object
        const data = request.object.toJSON();
        // If request.original is undefined, then the object is new
        const isNew = !request.original;
        const error = await (0, validateTransaction_1.validateTransaction)(data, isNew);
        if (error) {
            const errorObject = JSON.stringify(error);
            throw new node_1.default.Error(node_1.default.Error.VALIDATION_ERROR, JSON.parse(errorObject));
        }
    }
    catch (error) {
        console.error('Error while saving the Transaction:', error);
        throw error;
    }
});
//# sourceMappingURL=transactionTriggers.js.map