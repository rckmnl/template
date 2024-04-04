"use strict";
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../../index");
const loginUser_1 = require("../../cloud/diseno_y_desarrollo_de_un_sistema_tecnologico_para_la_autonomia_de_drones/test/utils/loginUser");
describe('MasterCloud tests', () => {
    let sessionToken;
    let createTable;
    beforeAll(async () => {
        sessionToken = await (0, loginUser_1.loginUser)(supertest_1.default, index_1.app);
        createTable = await (0, supertest_1.default)(index_1.app)
            .post('/server/functions/registerTableFromJSON')
            .set('X-Parse-Application-Id', '005')
            .set('X-Parse-Session-Token', sessionToken)
            .send({
            tableName: 'Test10',
            data: {
                plate_name: 'nombre_del_plato_',
                plate_description: 'descripcion_del_plato',
                plate_img: 'url_del_plato',
                plate_type: 'tipo_de_plato',
                plate_state: 'estado_del_plato',
            },
        });
    });
    describe('Create Table', () => {
        it('El estado de la respuesta es "success', async () => {
            expect(createTable.body.result.status).toBe('success');
        });
        it('La petición debería retornar un mensaje de éxito', async () => {
            expect(createTable.body.result.message).toBe('Table created successfully');
        });
        it('La respuesta contiene un objeto result', async () => {
            expect(createTable.body.result.result).toBe(true);
        });
    });
    describe('updateTableFromJSON', () => {
        let updateTable;
        beforeAll(async () => {
            updateTable = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/updateTableFromJSON')
                .set('X-Parse-Application-Id', '001')
                .set('X-Parse-Session-Token', sessionToken)
                .send({
                tableName: 'Test10',
                tableFromJSONId: createTable.body.result.table.objectId,
                data: {
                    plate_name: 'nombre_del_pla',
                },
            });
        }, 20000);
        it('El estado de la respuesta es "success', async () => {
            expect(updateTable.body.result.status).toBe('success');
        });
        it('La petición debería retornar un objeto table', async () => {
            expect(updateTable.body.result).toHaveProperty('table');
        });
        it('La respuesta contiene un objeto result', async () => {
            expect(updateTable.body.result.result).toBe(true);
        });
    });
    describe('getAllTableFromJSON', () => {
        let getAllTable;
        beforeAll(async () => {
            getAllTable = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/getAllTableFromJSON')
                .set('X-Parse-Application-Id', '001')
                .set('X-Parse-Session-Token', sessionToken)
                .send({
                tableName: 'Test10',
                page: 1,
            });
        });
        it('El estado de la respuesta es "success', async () => {
            expect(getAllTable.body.result.status).toBe('success');
        });
        it('La petición debería retornar un objeto table', async () => {
            expect(getAllTable.body.result).toHaveProperty('table');
        });
        it('La respuesta contiene un objeto result', async () => {
            expect(getAllTable.body.result.result).toBe(true);
        });
    });
    describe('getTableFromJSONById', () => {
        let getTableFromJSONById;
        beforeAll(async () => {
            getTableFromJSONById = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/getTableFromJSONById')
                .set('X-Parse-Application-Id', '001')
                .set('X-Parse-Session-Token', sessionToken)
                .send({
                tableName: 'Test10',
                tableFromJSONId: createTable.body.result.table.objectId,
            });
        });
        it('El estado de la respuesta es "success', async () => {
            expect(getTableFromJSONById.body.result.status).toBe('success');
        });
        it('La petición debería retornar un objeto table', async () => {
            expect(getTableFromJSONById.body.result).toHaveProperty('table');
        });
        it('La respuesta contiene un objeto result', async () => {
            expect(getTableFromJSONById.body.result.result).toBe(true);
        });
    });
    describe('Find in table', () => {
        let findInTable;
        beforeAll(async () => {
            findInTable = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/findInTable')
                .set('X-Parse-Application-Id', '001')
                .set('X-Parse-Session-Token', sessionToken)
                .send({
                table: 'Test10',
                key: 'plate_description',
                value: 'descripcion_del_plato',
                page: 1,
            });
        });
        it('El estado de la respuesta es "success', async () => {
            expect(findInTable.body.result.status).toBe('success');
        });
        it('La petición debería retornar un objeto table', async () => {
            expect(findInTable.body.result).toHaveProperty('data');
        });
        it('La respuesta contiene un objeto result', async () => {
            expect(findInTable.body.result.result).toBe(true);
        });
    });
    describe('deleteTableFromJSON', () => {
        let deleteTable;
        beforeAll(async () => {
            deleteTable = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/deleteTableFromJSON')
                .set('X-Parse-Application-Id', '001')
                .set('X-Parse-Session-Token', sessionToken)
                .send({
                tableName: 'Test10',
                tableFromJSONId: createTable.body.result.table.objectId,
            });
        });
        it('El estado de la respuesta es "success', async () => {
            expect(deleteTable.body.result.status).toBe('success');
        });
        it('La respuesta contiene un objeto result', async () => {
            expect(deleteTable.body.result.result).toBe(true);
        });
    });
    afterAll(() => {
        index_1.httpServer.close();
    });
});
//# sourceMappingURL=masterCloud.test.js.map