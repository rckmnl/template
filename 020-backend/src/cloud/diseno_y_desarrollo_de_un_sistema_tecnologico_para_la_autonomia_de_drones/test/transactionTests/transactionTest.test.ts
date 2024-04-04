/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */

import request from 'supertest';

import { app, httpServer } from '../../../../index';

import { loginUser } from '../utils/loginUser';

describe('Transaction tests', () => {
  let sessionToken: string;
  let createTransactionResponse: any;

  beforeAll(async () => {
    sessionToken = await loginUser(request, app);

    createTransactionResponse = await request(app)
      .post('/server/functions/createTransaction')
      .set('X-Parse-Application-Id', '006')
      .set('X-Parse-Session-Token', sessionToken)
      .send({
        objectData: {
            tra_person_id: 'Esto es una prueba',
          tra_type: 'Esto es una prueba',
          tra_amount: 'Esto es una prueba',
          tra_timestamp: 'Esto es una prueba',
          tra_details: 'Esto es una prueba',
        },
      });
  });

  describe('Create Transaction', () => {
    it('The response status is "success"', async () => {
      expect(createTransactionResponse.body.result.status).toBe('success');
    });

    it('The request should bring a transaction object', async () => {
      expect(createTransactionResponse.body.result).toHaveProperty('transaction');
    });

    it('The response contains a result object', async () => {
      expect(createTransactionResponse.body.result.result).toBe(true);
    });
  });

  describe('Update Transaction', () => {
    let updateTransactionResponse: any;
    beforeAll(async () => {
      updateTransactionResponse = await request(app)
        .post('/server/functions/updateTransaction')
        .set('X-Parse-Application-Id', '006')
        .set('X-Parse-Session-Token', sessionToken)
        .send({
          transactionId: createTransactionResponse.body.result.transaction.objectId,
          objectData: {
            tra_person_id: 'Esto es una prueba UPDATE',
            tra_type: 'Esto es una prueba UPDATE',
            tra_amount: 'Esto es una prueba UPDATE',
            tra_timestamp: 'Esto es una prueba UPDATE', 
            tra_details: 'Esto es una prueba UPDATE',
          },
        });
    });

    it('The response status is "success"', async () => {
      expect(updateTransactionResponse.body.result.status).toBe('success');
    });

    it('The request should bring a transaction object', async () => {
      expect(updateTransactionResponse.body.result).toHaveProperty('transaction');
    });

    it('The response contains a result object', async () => {
      expect(updateTransactionResponse.body.result.result).toBe(true);
    });
  });

  describe('Get All Transactions', () => {
    let getAllTransactionsResponse: any;
    beforeAll(async () => {
      getAllTransactionsResponse = await request(app)
        .post('/server/functions/getAllTransactions')
        .set('X-Parse-Application-Id', '006')
        .send({
          page: 1,
        });
    });

    it('should have a response status of "success"', async () => {
      expect(getAllTransactionsResponse.body.result.status).toBe('success');
    });

    it('should return an array of transactions', async () => {
      expect(getAllTransactionsResponse.body.result).toHaveProperty('transactions');
    });

    it('the response from getAllTransactions should contain an array of transactions', async () => {
      expect(Array.isArray(getAllTransactionsResponse.body.result.transactions)).toBe(true);
    });
  });

  describe('Get Transaction By Id', () => {
    let getTransactionResponse: any;
    beforeAll(async () => {
      getTransactionResponse = await request(app)
        .post('/server/functions/getTransactionById')
        .set('X-Parse-Application-Id', '006')
        .send({
          transactionId: createTransactionResponse.body.result.transaction.objectId,
        });
    });

    it('should have a response status of "success"', async () => {
      expect(getTransactionResponse.body.result.status).toBe('success');
    });

    it('should return a transaction object', async () => {
      expect(getTransactionResponse.body.result).toHaveProperty('transaction');
    });

    it('the response contains a transaction object', async () => {
      expect(getTransactionResponse.body.result.transaction).toBeInstanceOf(Object);
    });
  });

  describe('Delete Transaction', () => {
    let deleteTransactionResponse: any;
    beforeAll(async () => {
      deleteTransactionResponse = await request(app)
        .post('/server/functions/deleteTransaction')
        .set('X-Parse-Application-Id', '006')
        .set('X-Parse-Session-Token', sessionToken)
        .send({
          transactionId: createTransactionResponse.body.result.transaction.objectId,
        });
    });

    it('The response status is "success"', async () => {
      expect(deleteTransactionResponse.body.result.status).toBe('success');
    });

    it('The response contains a result object', async () => {
      expect(deleteTransactionResponse.body.result.result).toBe(true);
    });
  });

  afterAll(() => {
    httpServer.close();
  });
});