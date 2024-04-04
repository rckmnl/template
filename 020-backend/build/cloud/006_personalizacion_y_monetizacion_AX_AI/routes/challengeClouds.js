"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("parse/node"));
const challengeControllers_1 = require("../controllers/challengeControllers");
node_1.default.Cloud.define('getAllChallenges', (0, challengeControllers_1.getAllChallenges)(node_1.default));
node_1.default.Cloud.define('getChallengeById', (0, challengeControllers_1.getChallengeById)(node_1.default));
node_1.default.Cloud.define('createChallenge', (0, challengeControllers_1.createChallenge)(node_1.default));
node_1.default.Cloud.define('updateChallenge', (0, challengeControllers_1.updateChallenge)(node_1.default), { requireUser: true });
node_1.default.Cloud.define('deleteChallenge', (0, challengeControllers_1.deleteChallenge)(node_1.default), { requireUser: true });
//# sourceMappingURL=challengeClouds.js.map