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
exports.ChallengeSchema = void 0;
const Yup = __importStar(require("yup"));
exports.ChallengeSchema = Yup.object().shape({
    cha_id: Yup.string().required('The cha_id is required'),
    cha_company_id: Yup.string().required('The cha_company_id is required'),
    cha_title: Yup.string().required('The cha_title is required'),
    cha_type: Yup.string().required('The cha_type is required'),
    cha_description: Yup.string().required('The cha_description is required'),
    cha_system_requirements: Yup.string().required('The cha_system_requirements is required'),
    cha_price: Yup.string().required('The cha_category is required'),
    cha_participants: Yup.string().required('The cha_price is required'),
    cha_time: Yup.string().required('The cha_time is required'),
    cha_timeExpiration: Yup.string().required('The cha_timeExpiration is required'),
    cha_questions: Yup.array().of(Yup.object().shape({
        question: Yup.string().required('The question is required'),
        answer: Yup.array().of(Yup.object().shape({
            text: Yup.string().required('The text is required'),
            correct: Yup.boolean().required('The correct is required'),
        })),
    })),
    cha_link: Yup.string().notRequired().nullable(),
    cha_specificTask: Yup.string().notRequired().nullable(),
    cha_question: Yup.string().notRequired().nullable()
});
//# sourceMappingURL=challengeSchema.js.map