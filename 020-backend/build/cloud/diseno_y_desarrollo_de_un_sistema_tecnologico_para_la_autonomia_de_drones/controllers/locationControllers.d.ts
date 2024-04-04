/// <reference types="parse" />
export declare function getAllLocations(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    location: Parse.Object<Parse.Attributes>[];
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    location?: undefined;
}>;
export declare function getLocationById(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    location: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    location?: undefined;
}>;
export declare function createLocation(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    location: any;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    location?: undefined;
}>;
export declare function updateLocation(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    location: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    location?: undefined;
}>;
export declare function deleteLocation(Parse: any): (request: any) => Promise<{
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
