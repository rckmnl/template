"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("parse/node"));
const rewardControllers_1 = require("../controllers/rewardControllers");
node_1.default.Cloud.define('getAllRewards', (0, rewardControllers_1.getAllRewards)(node_1.default));
node_1.default.Cloud.define('getRewardById', (0, rewardControllers_1.getRewardById)(node_1.default));
node_1.default.Cloud.define('createReward', (0, rewardControllers_1.createReward)(node_1.default));
node_1.default.Cloud.define('updateReward', (0, rewardControllers_1.updateReward)(node_1.default), { requireUser: true });
node_1.default.Cloud.define('deleteReward', (0, rewardControllers_1.deleteReward)(node_1.default), { requireUser: true });
//# sourceMappingURL=rewardClouds.js.map