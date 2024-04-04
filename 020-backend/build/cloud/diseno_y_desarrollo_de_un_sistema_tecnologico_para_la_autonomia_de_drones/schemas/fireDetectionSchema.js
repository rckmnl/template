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
exports.fireDetectionSchema = void 0;
const Yup = __importStar(require("yup"));
exports.fireDetectionSchema = Yup.object().shape({
    fire_person_id: Yup.object()
        .shape({
        __type: Yup.string().required(),
        className: Yup.string().required(),
        objectId: Yup.string().required(),
    })
        .required('The fire_person_id is required'),
    fire_location_id: Yup.string().required('The fire_location_id is required'),
    fire_datetime_detection: Yup.string().required('The fire_datetime_detection is required'),
    fire_fire_intensity: Yup.string().required('The fire_fire_intensity is required'),
    fire_size: Yup.string().required('The fire_size is required')
});
//# sourceMappingURL=fireDetectionSchema.js.map