import { IAdvices } from '../models/advices.interface';
export declare function validateAdvices(advices: Partial<IAdvices>, isNew: boolean): Promise<{
    errors: string[];
    value: any;
    message?: undefined;
} | {
    message: any;
    errors?: undefined;
    value?: undefined;
} | null>;
