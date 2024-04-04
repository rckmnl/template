"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("parse/node"));
const transactionControllers_1 = require("../controllers/transactionControllers");
node_1.default.Cloud.define('getAllTransactions', (0, transactionControllers_1.getAllTransactions)(node_1.default));
node_1.default.Cloud.define('getTransactionById', (0, transactionControllers_1.getTransactionById)(node_1.default));
node_1.default.Cloud.define('createTransaction', (0, transactionControllers_1.createTransaction)(node_1.default));
node_1.default.Cloud.define('updateTransaction', (0, transactionControllers_1.updateTransaction)(node_1.default), { requireUser: true });
node_1.default.Cloud.define('deleteTransaction', (0, transactionControllers_1.deleteTransaction)(node_1.default), { requireUser: true });
//# sourceMappingURL=transactionClouds.js.map