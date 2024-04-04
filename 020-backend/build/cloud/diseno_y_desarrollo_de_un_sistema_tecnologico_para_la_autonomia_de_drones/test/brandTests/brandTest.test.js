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
describe('Brand tests', () => {
    let sessionToken;
    let createBrandResponse;
    beforeAll(async () => {
        sessionToken = await (0, loginUser_1.loginUser)(supertest_1.default, index_1.app);
        createBrandResponse = await (0, supertest_1.default)(index_1.app)
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
        let updateBrandResponse;
        beforeAll(async () => {
            updateBrandResponse = await (0, supertest_1.default)(index_1.app)
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
        let getAllBrandsResponse;
        beforeAll(async () => {
            getAllBrandsResponse = await (0, supertest_1.default)(index_1.app)
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
        let getBrandResponse;
        beforeAll(async () => {
            getBrandResponse = await (0, supertest_1.default)(index_1.app)
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
        let deleteBrandResponse;
        beforeAll(async () => {
            deleteBrandResponse = await (0, supertest_1.default)(index_1.app)
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
        index_1.httpServer.close();
    });
});
//# sourceMappingURL=brandTest.test.js.map