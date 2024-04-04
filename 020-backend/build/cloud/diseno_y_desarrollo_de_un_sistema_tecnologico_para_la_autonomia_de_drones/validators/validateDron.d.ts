import { IDron } from '../models/drones.interface';
export declare function validateDron(dron: Partial<IDron>, isNew: boolean): Promise<{
    errors: string[];
    value: any;
    message?: undefined;
} | {
    message: any;
    errors?: undefined;
    value?: undefined;
} | null>;
