/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */

import request from 'supertest';

import { app, httpServer } from '../../../../index';

import { loginUser } from '../utils/loginUser';

describe('Brand tests', () => {
  let sessionToken: string;
  let createBrandResponse: any;

  beforeAll(async () => {
    sessionToken = await loginUser(request, app);

    createBrandResponse = await request(app)
      .post('/server/functions/createBrand')
      .set('X-Parse-Application-Id', '006')
      .set('X-Parse-Session-Token', sessionToken)
      .send({
        objectData: {
          bra_name: 'Nike',
          bra_description: 'Esto es una prueba'
        },
      });
  });

  describe('Create Brand', () => {
    it('The response status is "success"', async () => {
      expect(createBrandResponse.body.result.status).toBe('success');
    });

    it('The request should bring a brand object', async () => {
      expect(createBrandResponse.body.result).toHaveProperty('brand');
    });

    it('The response contains a result object', async () => {
      expect(createBrandResponse.body.result.result).toBe(true);
    });
  });

  describe('Update Brand', () => {
    let updateBrandResponse: any;
    beforeAll(async () => {
      updateBrandResponse = await request(app)
        .post('/server/functions/updateBrand')
        .set('X-Parse-Application-Id', '006')
        .set('X-Parse-Session-Token', sessionToken)
        .send({
          brandId: createBrandResponse.body.result.brand.objectId,
          objectData: {
            bra_name: 'adidas',
            bra_description: 'Esto es un puma'
          },
        });
    });

    it('The response status is "success"', async () => {
      expect(updateBrandResponse.body.result.status).toBe('success');
    });

    it('The request should bring a brand object', async () => {
      expect(updateBrandResponse.body.result).toHaveProperty('brand');
    });

    it('The response contains a result object', async () => {
      expect(updateBrandResponse.body.result.result).toBe(true);
    });
  });

  describe('Get All Brands', () => {
    let getAllBrandsResponse: any;
    beforeAll(async () => {
      getAllBrandsResponse = await request(app)
        .post('/server/functions/getAllBrands')
        .set('X-Parse-Application-Id', '006')
        .send({
          page: 1,
        });
    });

    it('should have a response status of "success"', async () => {
      expect(getAllBrandsResponse.body.result.status).toBe('success');
    });

    it('should return an array of brands', async () => {
      expect(getAllBrandsResponse.body.result).toHaveProperty('brands');
    });

    it('the response from getAllBrands should contain an array of brands', async () => {
      expect(Array.isArray(getAllBrandsResponse.body.result.brands)).toBe(true);
    });
  });

  describe('Get Brand By Id', () => {
    let getBrandResponse: any;
    beforeAll(async () => {
      getBrandResponse = await request(app)
        .post('/server/functions/getBrandById')
        .set('X-Parse-Application-Id', '006')
        .send({
          brandId: createBrandResponse.body.result.brand.objectId,
        });
    });

    it('should have a response status of "success"', async () => {
      expect(getBrandResponse.body.result.status).toBe('success');
    });

    it('should return a brand object', async () => {
      expect(getBrandResponse.body.result).toHaveProperty('brand');
    });

    it('the response contains a brand object', async () => {
      expect(getBrandResponse.body.result.brand).toBeInstanceOf(Object);
    });
  });

  describe('Delete Brand', () => {
    let deleteBrandResponse: any;
    beforeAll(async () => {
      deleteBrandResponse = await request(app)
        .post('/server/functions/deleteBrand')
        .set('X-Parse-Application-Id', '006')
        .set('X-Parse-Session-Token', sessionToken)
        .send({
          brandId: createBrandResponse.body.result.brand.objectId,
        });
    });

    it('The response status is "success"', async () => {
      expect(deleteBrandResponse.body.result.status).toBe('success');
    });

    it('The response contains a result object', async () => {
      expect(deleteBrandResponse.body.result.result).toBe(true);
    });
  });

  afterAll(() => {
    httpServer.close();
  });
});