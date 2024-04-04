import { IAlertsNotifications } from '../models/alertsNotifications.interface';
export declare function validateAlertsNotifications(alertsnotifications: Partial<IAlertsNotifications>, isNew: boolean): Promise<{
    errors: string[];
    value: any;
    message?: undefined;
} | {
    message: any;
    errors?: undefined;
    value?: undefined;
} | null>;
