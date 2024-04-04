import { ILocation } from '../models/locations.interface';
export declare function validateLocation(location: Partial<ILocation>, isNew: boolean): Promise<{
    errors: string[];
    value: any;
    message?: undefined;
} | {
    message: any;
    errors?: undefined;
    value?: undefined;
} | null>;
