import { IFireDetection } from '../models/fireDetection.interface';
export declare function validateFireDetection(firedetection: Partial<IFireDetection>, isNew: boolean): Promise<{
    errors: string[];
    value: any;
    message?: undefined;
} | {
    message: any;
    errors?: undefined;
    value?: undefined;
} | null>;
