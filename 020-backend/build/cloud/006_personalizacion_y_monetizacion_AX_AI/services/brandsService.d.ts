/// <reference types="parse" />
export declare function getAllBrandsService(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getBrandByIdService(brandId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createBrandService(objectData: any): Promise<any>;
export declare function updateBrandService(brandId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteBrandService(objectIdBrand: string): Promise<void>;
