/// <reference types="parse" />
export declare function getAllAchievements(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    achievements: Parse.Object<Parse.Attributes>[];
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    achievements?: undefined;
}>;
export declare function getAchievementById(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    achievement: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    achievement?: undefined;
}>;
export declare function createAchievement(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    achievement: any;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    achievement?: undefined;
}>;
export declare function updateAchievement(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    achievement: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    achievement?: undefined;
}>;
export declare function deleteAchievement(Parse: any): (request: any) => Promise<{
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
