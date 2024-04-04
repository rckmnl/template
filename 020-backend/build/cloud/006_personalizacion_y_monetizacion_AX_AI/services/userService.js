"use strict";
/* eslint-disable no-console */
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable no-useless-catch */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserService = exports.updateUserService = exports.createUserService = exports.getUserService = exports.getAllUsersService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const node_1 = __importDefault(require("parse/node"));
const user_1 = require("../database/user");
const assignRoles_1 = require("../utils/assignRoles");
const accesControl_1 = require("../utils/accesControl");
async function getAllUsersService(page, userType) {
    try {
        const users = await (0, user_1.getAllUsersData)(page, userType);
        return users;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllUsersService = getAllUsersService;
async function getUserService(userId) {
    try {
        const user = await (0, user_1.getUserData)(userId);
        return user;
    }
    catch (error) {
        throw error;
    }
}
exports.getUserService = getUserService;
async function createUserService(objectData) {
    try {
        const user = await (0, user_1.createNewUserData)(objectData);
        //Asignar un rol por defecto al nuevo usuario
        await (0, assignRoles_1.assignRoleToUser)(user, 'user');
        return user;
    }
    catch (error) {
        throw error;
    }
}
exports.createUserService = createUserService;
async function updateUserService(userId, objectData) {
    try {
        const user = await (0, user_1.updateUserData)(userId, objectData);
        return user;
    }
    catch (error) {
        throw error;
    }
}
exports.updateUserService = updateUserService;
async function deleteUserService(userId, sessionToken) {
    try {
        const permission = await (0, accesControl_1.checkUserRole)(sessionToken, ['superuser', 'admin']);
        if (!permission) {
            throw new node_1.default.Error(node_1.default.Error.OPERATION_FORBIDDEN, `User does not have permission to delete users.`);
        }
        await (0, user_1.deleteUserData)(userId);
        return {
            success: true,
            message: 'User deleted successfully',
        };
    }
    catch (error) {
        throw error;
    }
}
exports.deleteUserService = deleteUserService;
//# sourceMappingURL=userService.js.map