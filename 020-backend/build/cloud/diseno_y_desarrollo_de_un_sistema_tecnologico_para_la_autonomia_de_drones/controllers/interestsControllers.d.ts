/// <reference types="parse" />
export declare function getAllInterestss(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    interests: Parse.Object<Parse.Attributes>[];
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    interests?: undefined;
}>;
export declare function getInterestsById(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    interests: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    interests?: undefined;
}>;
export declare function createInterests(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    interests: any;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    interests?: undefined;
}>;
export declare function updateInterests(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    interests: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    interests?: undefined;
}>;
export declare function deleteInterests(Parse: any): (request: any) => Promise<{
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
