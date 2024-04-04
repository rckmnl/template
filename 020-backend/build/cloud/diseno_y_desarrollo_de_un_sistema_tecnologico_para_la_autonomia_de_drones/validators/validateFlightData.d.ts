import { IFlightData } from '../models/fligthData.interface';
export declare function validateFlightData(flightdata: Partial<IFlightData>, isNew: boolean): Promise<{
    errors: string[];
    value: any;
    message?: undefined;
} | {
    message: any;
    errors?: undefined;
    value?: undefined;
} | null>;
