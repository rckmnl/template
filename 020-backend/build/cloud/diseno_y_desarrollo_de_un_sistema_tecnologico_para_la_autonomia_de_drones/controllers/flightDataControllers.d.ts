/// <reference types="parse" />
export declare function getAllFlightDatas(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    flightdata: Parse.Object<Parse.Attributes>[];
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    flightdata?: undefined;
}>;
export declare function getFlightDataById(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    flightdata: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    flightdata?: undefined;
}>;
export declare function createFlightData(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    flightdata: any;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    flightdata?: undefined;
}>;
export declare function updateFlightData(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    flightdata: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    flightdata?: undefined;
}>;
export declare function deleteFlightData(Parse: any): (request: any) => Promise<{
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
