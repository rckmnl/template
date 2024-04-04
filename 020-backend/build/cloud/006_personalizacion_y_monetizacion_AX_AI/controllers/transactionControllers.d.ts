/// <reference types="parse" />
export declare function getAllTransactions(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    transactions: Parse.Object<Parse.Attributes>[];
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    transactions?: undefined;
}>;
export declare function getTransactionById(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    transaction: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    transaction?: undefined;
}>;
export declare function createTransaction(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    transaction: any;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    transaction?: undefined;
}>;
export declare function updateTransaction(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    transaction: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    transaction?: undefined;
}>;
export declare function deleteTransaction(Parse: any): (request: any) => Promise<{
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
