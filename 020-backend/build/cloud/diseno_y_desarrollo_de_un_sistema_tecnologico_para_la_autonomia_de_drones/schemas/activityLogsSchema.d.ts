import * as Yup from 'yup';
export declare const ActivityLogsSchema: Yup.ObjectSchema<{
    reg_person_id: {
        objectId: string;
        __type: string;
        className: string;
    };
    reg_action_performed: string;
    reg_datetime_activity: string;
}, Yup.AnyObject, {
    reg_person_id: {
        __type: undefined;
        className: undefined;
        objectId: undefined;
    };
    reg_action_performed: undefined;
    reg_datetime_activity: undefined;
}, "">;
