"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("parse/node"));
const achievementControllers_1 = require("../controllers/achievementControllers");
node_1.default.Cloud.define('getAllAchievements', (0, achievementControllers_1.getAllAchievements)(node_1.default));
node_1.default.Cloud.define('getAchievementById', (0, achievementControllers_1.getAchievementById)(node_1.default));
node_1.default.Cloud.define('createAchievement', (0, achievementControllers_1.createAchievement)(node_1.default));
node_1.default.Cloud.define('updateAchievement', (0, achievementControllers_1.updateAchievement)(node_1.default), { requireUser: true });
node_1.default.Cloud.define('deleteAchievement', (0, achievementControllers_1.deleteAchievement)(node_1.default), { requireUser: true });
//# sourceMappingURL=achievementClouds.js.map