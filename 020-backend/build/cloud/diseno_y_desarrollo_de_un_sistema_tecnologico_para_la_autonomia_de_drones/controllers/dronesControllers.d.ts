/// <reference types="parse" />
export declare function getAllDrones(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    dron: Parse.Object<Parse.Attributes>[];
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    dron?: undefined;
}>;
export declare function getDronById(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    dron: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    dron?: undefined;
}>;
export declare function createDron(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    dron: any;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    dron?: undefined;
}>;
export declare function updateDron(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    dron: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    dron?: undefined;
}>;
export declare function deleteDron(Parse: any): (request: any) => Promise<{
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
