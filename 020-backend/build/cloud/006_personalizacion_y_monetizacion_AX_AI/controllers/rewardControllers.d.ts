/// <reference types="parse" />
export declare function getAllRewards(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    rewards: Parse.Object<Parse.Attributes>[];
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    rewards?: undefined;
}>;
export declare function getRewardById(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    reward: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    reward?: undefined;
}>;
export declare function createReward(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    reward: any;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    reward?: undefined;
}>;
export declare function updateReward(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    reward: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    reward?: undefined;
}>;
export declare function deleteReward(Parse: any): (request: any) => Promise<{
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
