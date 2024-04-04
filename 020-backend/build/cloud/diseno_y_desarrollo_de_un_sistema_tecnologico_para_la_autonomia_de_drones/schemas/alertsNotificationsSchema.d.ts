import * as Yup from 'yup';
export declare const alertsNotificationSchema: Yup.ObjectSchema<{
    alert_person_id: {
        objectId: string;
        __type: string;
        className: string;
    };
    alert_location_id: string;
    alert_type: string;
    alert_datetime: string;
    alert_status: string;
}, Yup.AnyObject, {
    alert_person_id: {
        __type: undefined;
        className: undefined;
        objectId: undefined;
    };
    alert_location_id: undefined;
    alert_type: undefined;
    alert_datetime: undefined;
    alert_status: undefined;
}, "">;
