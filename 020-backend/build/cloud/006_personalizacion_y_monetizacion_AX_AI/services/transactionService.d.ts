/// <reference types="parse" />
export declare function getAllTransactionsService(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getTransactionByIdService(transactionId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createTransactionService(objectData: any): Promise<any>;
export declare function updateTransactionService(transactionId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteTransactionService(objectIdTransaction: string): Promise<void>;
