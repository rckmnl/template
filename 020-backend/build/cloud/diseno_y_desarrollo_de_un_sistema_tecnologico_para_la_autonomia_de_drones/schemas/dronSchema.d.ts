import * as Yup from 'yup';
export declare const DronSchema: Yup.ObjectSchema<{
    dro_person_id: {
        objectId: string;
        __type: string;
        className: string;
    };
    dro_model: string;
    dro_status: string;
    dro_configuration: string;
    dro_GPS: string;
}, Yup.AnyObject, {
    dro_person_id: {
        __type: undefined;
        className: undefined;
        objectId: undefined;
    };
    dro_model: undefined;
    dro_status: undefined;
    dro_configuration: undefined;
    dro_GPS: undefined;
}, "">;
