import { ITransaction } from '../models/transaction.interface';
export declare function validateTransaction(transaction: Partial<ITransaction>, isNew: boolean): Promise<{
    errors: string[];
    value: any;
    message?: undefined;
} | {
    message: any;
    errors?: undefined;
    value?: undefined;
} | null>;
