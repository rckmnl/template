"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDron = void 0;
const dronSchema_1 = require("../schemas/dronSchema");
const Yup = __importStar(require("yup"));
async function validateDron(dron, isNew) {
    try {
        if (isNew) {
            // Validar el esquema principal
            await dronSchema_1.DronSchema.validate(dron, { abortEarly: false });
        }
        else {
            // Validar solo los campos presentes en el esquema
            const schemaKeys = Object.keys(dronSchema_1.DronSchema.fields);
            const validations = schemaKeys.map((key) => {
                if (key in dron) {
                    const schema = Yup.reach(dronSchema_1.DronSchema, key);
                    const dronKey = key;
                    return schema.validate(dron[dronKey]);
                }
            });
            await Promise.all(validations);
        }
        return null;
    }
    catch (error) {
        if (error instanceof Yup.ValidationError) {
            return {
                errors: error.errors,
                value: error.value,
            };
        }
        else {
            return {
                message: error.message,
            };
        }
    }
}
exports.validateDron = validateDron;
//# sourceMappingURL=validateDron.js.map