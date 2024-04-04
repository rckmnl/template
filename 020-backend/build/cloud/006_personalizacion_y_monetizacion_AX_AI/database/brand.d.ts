/// <reference types="parse" />
import Parse from 'parse/node';
export declare function getAllBrandsData(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getBrandByIdData(brandId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createBrandData(objectData: any): Promise<any>;
export declare function updateBrandData(brandId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteBrandData(brandId: string): Promise<void>;
