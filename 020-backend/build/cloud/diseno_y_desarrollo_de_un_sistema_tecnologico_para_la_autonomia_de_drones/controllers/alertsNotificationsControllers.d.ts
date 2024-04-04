/// <reference types="parse" />
export declare function getAllAlertsNotificationss(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    alertsnotifications: Parse.Object<Parse.Attributes>[];
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    alertsnotifications?: undefined;
}>;
export declare function getAlertsNotificationsById(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    alertsnotifications: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    alertsnotifications?: undefined;
}>;
export declare function createAlertsNotifications(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    alertsnotifications: any;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    alertsnotifications?: undefined;
}>;
export declare function updateAlertsNotifications(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    alertsnotifications: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    alertsnotifications?: undefined;
}>;
export declare function deleteAlertsNotifications(Parse: any): (request: any) => Promise<{
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
