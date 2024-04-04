"use strict";
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../../../../index");
const loginUser_1 = require("../utils/loginUser");
describe('Achievement tests', () => {
    let sessionToken;
    let createAchievementResponse;
    beforeAll(async () => {
        sessionToken = await (0, loginUser_1.loginUser)(supertest_1.default, index_1.app);
        createAchievementResponse = await (0, supertest_1.default)(index_1.app)
            .post('/server/functions/createAchievement')
            .set('X-Parse-Application-Id', '006')
            .set('X-Parse-Session-Token', sessionToken)
            .send({
            objectData: {
                ach_person_id: 'cual',
                ach_title: 'Concierto principal',
                ach_description: 'Concierto principal con las mejores bandas locales e internacionales.',
                ach_points: 'Festival de Futbol'
            },
        });
    });
    describe('Create Achievement', () => {
        it('El estado de la respuesta es "success"', async () => {
            expect(createAchievementResponse.body.result.status).toBe('success');
        });
        it('La petición debería traer un objeto achievement', async () => {
            expect(createAchievementResponse.body.result).toHaveProperty('achievement');
        });
        it('La respuesta contiene un objeto result', async () => {
            expect(createAchievementResponse.body.result.result).toBe(true);
        });
    });
    describe('Update Achievement', () => {
        let updateAchievementResponse;
        beforeAll(async () => {
            updateAchievementResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/updateAchievement')
                .set('X-Parse-Application-Id', '006')
                .set('X-Parse-Session-Token', sessionToken)
                .send({
                achievementId: createAchievementResponse.body.result.achievement.objectId,
                objectData: {
                    ach_person_id: 'Achievemento Actualizado',
                    ach_title: 'Achievemento Modificado',
                    ach_description: 'Actividad Modificada',
                    ach_points: '3 horas',
                },
            });
        });
        it('The response status is "success"', async () => {
            expect(updateAchievementResponse.body.result.status).toBe('success');
        });
        it('The response should contain an achievement object', async () => {
            expect(updateAchievementResponse.body.result).toHaveProperty('achievement');
        });
        it('The response contains a result object', async () => {
            expect(updateAchievementResponse.body.result.result).toBe(true);
        });
    });
    describe('getAllAchievements', () => {
        let getAllAchievementsResponse;
        beforeAll(async () => {
            getAllAchievementsResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/getAllAchievements')
                .set('X-Parse-Application-Id', '006')
                .send({
                page: 1,
            });
        });
        it('should have a response status of "success"', async () => {
            expect(getAllAchievementsResponse.body.result.status).toBe('success');
        });
        it('should return an array of achievements', async () => {
            expect(getAllAchievementsResponse.body.result).toHaveProperty('achievements');
        });
        it('the response from getAllAchievements should contain an array of achievements', async () => {
            expect(Array.isArray(getAllAchievementsResponse.body.result.achievements)).toBe(true);
        });
    });
    describe('getAchievementById', () => {
        let getAchievementResponse;
        beforeAll(async () => {
            getAchievementResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/getAchievementById')
                .set('X-Parse-Application-Id', '006')
                .set('X-Parse-Session-Token', sessionToken)
                .query({
                achievementId: createAchievementResponse.body.result.achievement.objectId,
            });
        });
        it('should have a response status of "success"', async () => {
            expect(getAchievementResponse.body.result.status).toBe('success');
        });
        it('should return an achievement object', async () => {
            expect(getAchievementResponse.body.result).toHaveProperty('achievement');
        });
        it('the response contains an achievement object', async () => {
            expect(getAchievementResponse.body.result.achievement).toBeInstanceOf(Object);
        });
    });
    describe('Delete achievement', () => {
        let deleteAchievementResponse;
        beforeAll(async () => {
            deleteAchievementResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/deleteAchievement')
                .set('X-Parse-Application-Id', '006')
                .set('X-Parse-Session-Token', sessionToken)
                .send({
                achievementId: createAchievementResponse.body.result.achievement.objectId,
            });
        });
        it('should have a response status of "success"', async () => {
            expect(deleteAchievementResponse.body.result.status).toBe('success');
        });
        it('should return a result object', async () => {
            expect(deleteAchievementResponse.body.result.result).toBe(true);
        });
    });
    afterAll(() => {
        index_1.httpServer.close();
    });
});
//# sourceMappingURL=achievementTest.test.js.map