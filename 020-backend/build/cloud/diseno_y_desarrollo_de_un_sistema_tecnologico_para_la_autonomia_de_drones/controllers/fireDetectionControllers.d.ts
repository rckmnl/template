/// <reference types="parse" />
export declare function getAllFireDetections(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    firedetection: Parse.Object<Parse.Attributes>[];
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    firedetection?: undefined;
}>;
export declare function getFireDetectionById(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    firedetection: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    firedetection?: undefined;
}>;
export declare function createFireDetection(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    firedetection: any;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    firedetection?: undefined;
}>;
export declare function updateFireDetection(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    firedetection: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    firedetection?: undefined;
}>;
export declare function deleteFireDetection(Parse: any): (request: any) => Promise<{
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
