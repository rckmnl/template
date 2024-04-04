"use strict";
/* eslint-disable no-console */
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable no-useless-catch */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePersonService = exports.updatePersonService = exports.createPersonService = exports.getPersonByIdService = exports.getAllPersonsService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
// import Parse from 'parse/node';
const person_1 = require("../database/person");
// import { assignRoleToUser } from '../utils/assignRoles';
// import { checkUserRole } from '../utils/accesControl';
async function getAllPersonsService(page) {
    try {
        const persons = await (0, person_1.getAllPersonsData)(page);
        return persons;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllPersonsService = getAllPersonsService;
async function getPersonByIdService(personId) {
    try {
        const person = await (0, person_1.getPersonByIdData)(personId);
        return person;
    }
    catch (error) {
        throw error;
    }
}
exports.getPersonByIdService = getPersonByIdService;
async function createPersonService(objectData) {
    try {
        const person = await (0, person_1.createPersonData)(objectData);
        //Asignar un rol por defecto al nuevo usuario
        // await assignRoleToUser(person, 'user');
        return person;
    }
    catch (error) {
        throw error;
    }
}
exports.createPersonService = createPersonService;
async function updatePersonService(personId, objectData) {
    try {
        const person = await (0, person_1.updatePersonData)(personId, objectData);
        return person;
    }
    catch (error) {
        throw error;
    }
}
exports.updatePersonService = updatePersonService;
async function deletePersonService(objectIdPerson) {
    try {
        await (0, person_1.deletePersonData)(objectIdPerson);
    }
    catch (error) {
        throw error;
    }
}
exports.deletePersonService = deletePersonService;
//# sourceMappingURL=personService.js.map