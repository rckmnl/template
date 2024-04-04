import { IActivityLogs } from '../models/activityLogs.interface';
export declare function validateActivityLogs(activitylogs: Partial<IActivityLogs>, isNew: boolean): Promise<{
    errors: string[];
    value: any;
    message?: undefined;
} | {
    message: any;
    errors?: undefined;
    value?: undefined;
} | null>;
