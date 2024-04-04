/// <reference types="parse" />
export declare function getAllBrands(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    brands: Parse.Object<Parse.Attributes>[];
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    brands?: undefined;
}>;
export declare function getBrandById(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    brand: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    brand?: undefined;
}>;
export declare function createBrand(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    brand: any;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    brand?: undefined;
}>;
export declare function updateBrand(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    brand: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    brand?: undefined;
}>;
export declare function deleteBrand(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
}>;
