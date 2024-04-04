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
describe('Reward tests', () => {
    let sessionToken;
    let createRewardResponse;
    beforeAll(async () => {
        sessionToken = await (0, loginUser_1.loginUser)(supertest_1.default, index_1.app);
        createRewardResponse = await (0, supertest_1.default)(index_1.app)
            .post('/server/functions/createReward')
            .set('X-Parse-Application-Id', '006')
            .set('X-Parse-Session-Token', sessionToken)
            .send({
            objectData: {
                rrew_reto_id: 'Esto es una prueba',
                rew_amount: 'Esto es una prueba',
                rew_currency: 'Esto es una prueba',
                rew_description: 'Esto es una prueba',
            },
        });
    });
    describe('Create Reward', () => {
        it('The response status is "success"', async () => {
            expect(createRewardResponse.body.result.status).toBe('success');
        });
        it('The request should bring a reward object', async () => {
            expect(createRewardResponse.body.result).toHaveProperty('reward');
        });
        it('The response contains a result object', async () => {
            expect(createRewardResponse.body.result.result).toBe(true);
        });
    });
    describe('Update Reward', () => {
        let updateRewardResponse;
        beforeAll(async () => {
            updateRewardResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/updateReward')
                .set('X-Parse-Application-Id', '006')
                .set('X-Parse-Session-Token', sessionToken)
                .send({
                rewardId: createRewardResponse.body.result.reward.objectId,
                objectData: {
                    rew_reto_id: 'Esto es una prueba UPDATE',
                    rew_amount: 'Esto es una prueba UPDATE',
                    rew_currency: 'Esto es una prueba UPDATE',
                    rew_description: 'Esto es una prueba UPDATE',
                },
            });
        });
        it('The response status is "success"', async () => {
            expect(updateRewardResponse.body.result.status).toBe('success');
        });
        it('The request should bring a reward object', async () => {
            expect(updateRewardResponse.body.result).toHaveProperty('reward');
        });
        it('The response contains a result object', async () => {
            expect(updateRewardResponse.body.result.result).toBe(true);
        });
    });
    describe('Get All Rewards', () => {
        let getAllRewardsResponse;
        beforeAll(async () => {
            getAllRewardsResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/getAllRewards')
                .set('X-Parse-Application-Id', '006')
                .send({
                page: 1,
            });
        });
        it('should have a response status of "success"', async () => {
            expect(getAllRewardsResponse.body.result.status).toBe('success');
        });
        it('should return an array of rewards', async () => {
            expect(getAllRewardsResponse.body.result).toHaveProperty('rewards');
        });
        it('the response from getAllRewards should contain an array of rewards', async () => {
            expect(Array.isArray(getAllRewardsResponse.body.result.rewards)).toBe(true);
        });
    });
    describe('Get Reward By Id', () => {
        let getRewardResponse;
        beforeAll(async () => {
            getRewardResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/getRewardById')
                .set('X-Parse-Application-Id', '006')
                .send({
                rewardId: createRewardResponse.body.result.reward.objectId,
            });
        });
        it('should have a response status of "success"', async () => {
            expect(getRewardResponse.body.result.status).toBe('success');
        });
        it('should return a reward object', async () => {
            expect(getRewardResponse.body.result).toHaveProperty('reward');
        });
        it('the response contains a reward object', async () => {
            expect(getRewardResponse.body.result.reward).toBeInstanceOf(Object);
        });
    });
    describe('Delete Reward', () => {
        let deleteRewardResponse;
        beforeAll(async () => {
            deleteRewardResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/deleteReward')
                .set('X-Parse-Application-Id', '006')
                .set('X-Parse-Session-Token', sessionToken)
                .send({
                rewardId: createRewardResponse.body.result.reward.objectId,
            });
        });
        it('The response status is "success"', async () => {
            expect(deleteRewardResponse.body.result.status).toBe('success');
        });
        it('The response contains a result object', async () => {
            expect(deleteRewardResponse.body.result.result).toBe(true);
        });
    });
    afterAll(() => {
        index_1.httpServer.close();
    });
});
//# sourceMappingURL=rewardTest.test.js.map