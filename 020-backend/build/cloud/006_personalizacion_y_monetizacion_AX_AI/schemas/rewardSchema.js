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
exports.RewardSchema = void 0;
const Yup = __importStar(require("yup"));
exports.RewardSchema = Yup.object().shape({
    rew_id: Yup.string().required('The rew_id is required'),
    rew_challenge_id: Yup.string().required('The rew_challenge_id is required'),
    rew_user_id: Yup.string().required('The rew_user_id is required'),
    rew_amount: Yup.string().required('The rew_amount is required'),
    rew_currency: Yup.string().required('The rew_currency is required'),
    rew_description: Yup.string().required('The rew_description is required')
});
//# sourceMappingURL=rewardSchema.js.map