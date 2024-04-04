"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const node_1 = __importDefault(require("parse/node"));
const validateChallenge_1 = require("../validators/validateChallenge");
node_1.default.Cloud.beforeSave('challenge', async (request) => {
    try {
        // Convert the Parse object to a JavaScript object
        const data = request.object.toJSON();
        // If request.original is undefined, then the object is new
        const isNew = !request.original;
        const error = await (0, validateChallenge_1.validateChallenge)(data, isNew);
        if (error) {
            const errorObject = JSON.stringify(error);
            throw new node_1.default.Error(node_1.default.Error.VALIDATION_ERROR, JSON.parse(errorObject));
        }
    }
    catch (error) {
        console.error('Error while saving the Challenge:', error);
        throw error;
    }
});
//# sourceMappingURL=challengeTriggers.js.map