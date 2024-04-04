/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */

import request from 'supertest';

import { app, httpServer } from '../../../../index';

import { loginUser } from '../utils/loginUser';

describe('Challenge tests', () => {
  let sessionToken: string;
  let createChallengeResponse: any;

  beforeAll(async () => {
    sessionToken = await loginUser(request, app);

    createChallengeResponse = await request(app)
      .post('/server/functions/createChallenge')
      .set('X-Parse-Application-Id', '006')
      .set('X-Parse-Session-Token', sessionToken)
      .send({
        objectData: {
            cha_title: 'Probando chalen',
            cha_description: 'Probando chalen',
            cha_system_requirements: 'Probando chalen',
            cha_category: 'Probando chalen'
        },
      });
  });

  describe('Create Challenge', () => {
    it('The response status is "success"', async () => {
      expect(createChallengeResponse.body.result.status).toBe('success');
    });

    it('The request should bring a challenge object', async () => {
      expect(createChallengeResponse.body.result).toHaveProperty('challenge');
    });

    it('The response contains a result object', async () => {
      expect(createChallengeResponse.body.result.result).toBe(true);
    });
  });

  describe('Update Challenge', () => {
    let updateChallengeResponse: any;
    beforeAll(async () => {
      updateChallengeResponse = await request(app)
        .post('/server/functions/updateChallenge')
        .set('X-Parse-Application-Id', '006')
        .set('X-Parse-Session-Token', sessionToken)
        .send({
          challengeId: createChallengeResponse.body.result.challenge.objectId,
          objectData: {
            cha_title: 'Probando chalen',
          cha_description: 'Probando chalen',
          cha_system_requirements: 'Probando chalen',
          cha_category: 'Probando chalen'
          },
        });
    });

    it('The response status is "success"', async () => {
      expect(updateChallengeResponse.body.result.status).toBe('success');
    });

    it('The request should bring a challenge object', async () => {
      expect(updateChallengeResponse.body.result).toHaveProperty('challenge');
    });

    it('The response contains a result object', async () => {
      expect(updateChallengeResponse.body.result.result).toBe(true);
    });
  });

  describe('Get All Challenges', () => {
    let getAllChallengesResponse: any;
    beforeAll(async () => {
      getAllChallengesResponse = await request(app)
        .post('/server/functions/getAllChallenges')
        .set('X-Parse-Application-Id', '006')
        .send({
          page: 1,
        });
    });

    it('should have a response status of "success"', async () => {
      expect(getAllChallengesResponse.body.result.status).toBe('success');
    });

    it('should return an array of challenges', async () => {
      expect(getAllChallengesResponse.body.result).toHaveProperty('challenges');
    });

    it('the response from getAllChallenges should contain an array of challenges', async () => {
      expect(Array.isArray(getAllChallengesResponse.body.result.challenges)).toBe(true);
    });
  });

  describe('Get Challenge By Id', () => {
    let getChallengeResponse: any;
    beforeAll(async () => {
      getChallengeResponse = await request(app)
        .post('/server/functions/getChallengeById')
        .set('X-Parse-Application-Id', '006')
        .send({
          challengeId: createChallengeResponse.body.result.challenge.objectId,
        });
    });

    it('should have a response status of "success"', async () => {
      expect(getChallengeResponse.body.result.status).toBe('success');
    });

    it('should return a challenge object', async () => {
      expect(getChallengeResponse.body.result).toHaveProperty('challenge');
    });

    it('the response contains a challenge object', async () => {
      expect(getChallengeResponse.body.result.challenge).toBeInstanceOf(Object);
    });
  });

  describe('Delete Challenge', () => {
    let deleteChallengeResponse: any;
    beforeAll(async () => {
      deleteChallengeResponse = await request(app)
        .post('/server/functions/deleteChallenge')
        .set('X-Parse-Application-Id', '006')
        .set('X-Parse-Session-Token', sessionToken)
        .send({
          challengeId: createChallengeResponse.body.result.challenge.objectId,
        });
    });

    it('The response status is "success"', async () => {
      expect(deleteChallengeResponse.body.result.status).toBe('success');
    });

    it('The response contains a result object', async () => {
      expect(deleteChallengeResponse.body.result.result).toBe(true);
    });
  });

  afterAll(() => {
    httpServer.close();
  });
});