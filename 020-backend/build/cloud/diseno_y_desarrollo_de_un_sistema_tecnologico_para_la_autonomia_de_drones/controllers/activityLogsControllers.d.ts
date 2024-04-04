/// <reference types="parse" />
export declare function getAllActivityLogss(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    activitylogs: Parse.Object<Parse.Attributes>[];
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    activitylogs?: undefined;
}>;
export declare function getActivityLogsById(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    activitylogs: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    activitylogs?: undefined;
}>;
export declare function createActivityLogs(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    activitylogs: any;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    activitylogs?: undefined;
}>;
export declare function updateActivityLogs(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    activitylogs: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    activitylogs?: undefined;
}>;
export declare function deleteActivityLogs(Parse: any): (request: any) => Promise<{
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
