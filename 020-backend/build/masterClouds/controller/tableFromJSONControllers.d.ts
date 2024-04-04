/// <reference types="parse" />
export declare function getAllTableFromJSON(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    table: Parse.Object<Parse.Attributes>[];
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    table?: undefined;
}>;
export declare function getTableFromJSONById(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    table: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    table?: undefined;
}>;
export declare function registerTableFromJSON(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    table: any;
    message: string;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    table?: undefined;
    message?: undefined;
}>;
export declare function updateTableFromJSON(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    table: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    table?: undefined;
}>;
export declare function deleteTableFromJSON(Parse: any): (request: any) => Promise<{
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
