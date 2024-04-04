/// <reference types="parse" />
import Parse from 'parse/node';
export declare function getAllTransactionsData(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getTransactionByIdData(transactionId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createTransactionData(objectData: any): Promise<any>;
export declare function updateTransactionData(transactionId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteTransactionData(transactionId: string): Promise<void>;
