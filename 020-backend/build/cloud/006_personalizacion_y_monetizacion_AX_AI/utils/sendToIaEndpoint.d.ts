export declare function sendToIaEndpoint(objectData: any, Parse: any, objectIdPerson: string): Promise<{
    status: string;
    result: boolean;
    adviceResponse: any;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    adviceResponse?: undefined;
}>;
