/// <reference types="parse" />
export declare function getAllChallenges(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    Challenges: Parse.Object<Parse.Attributes>[];
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    Challenges?: undefined;
}>;
export declare function getChallengeById(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    challenge: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    challenge?: undefined;
}>;
export declare function createChallenge(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    challenge: any;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    challenge?: undefined;
}>;
export declare function updateChallenge(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    challenge: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    challenge?: undefined;
}>;
export declare function deleteChallenge(Parse: any): (request: any) => Promise<{
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
