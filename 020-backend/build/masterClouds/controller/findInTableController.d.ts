/// <reference types="parse" />
export declare function findInTable(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    data: Parse.Object<Parse.Attributes>[];
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    data?: undefined;
}>;
