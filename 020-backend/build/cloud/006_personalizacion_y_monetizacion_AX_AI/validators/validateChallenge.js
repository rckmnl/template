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
exports.validateChallenge = void 0;
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-else-return */
const Yup = __importStar(require("yup"));
const challengeSchema_1 = require("../schemas/challengeSchema");
async function validateChallenge(challenge, isNew) {
    try {
        if (isNew) {
            await challengeSchema_1.ChallengeSchema.validate(challenge, { abortEarly: false });
        }
        else {
            const schemaKeys = Object.keys(challengeSchema_1.ChallengeSchema.fields);
            const validations = schemaKeys.map((key) => {
                if (key in challenge) {
                    const schema = Yup.reach(challengeSchema_1.ChallengeSchema, key);
                    const challengeKey = key;
                    return schema.validate(challenge[challengeKey]);
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
exports.validateChallenge = validateChallenge;
//# sourceMappingURL=validateChallenge.js.map