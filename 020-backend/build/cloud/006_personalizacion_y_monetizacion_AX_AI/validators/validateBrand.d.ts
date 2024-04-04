import { IBrand } from '../models/brand.interface';
export declare function validateBrand(brand: Partial<IBrand>, isNew: boolean): Promise<{
    errors: string[];
    value: any;
    message?: undefined;
} | {
    message: any;
    errors?: undefined;
    value?: undefined;
} | null>;
