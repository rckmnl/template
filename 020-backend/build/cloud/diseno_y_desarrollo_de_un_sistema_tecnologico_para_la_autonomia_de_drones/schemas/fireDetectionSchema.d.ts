import * as Yup from 'yup';
export declare const fireDetectionSchema: Yup.ObjectSchema<{
    fire_person_id: {
        objectId: string;
        __type: string;
        className: string;
    };
    fire_location_id: string;
    fire_datetime_detection: string;
    fire_fire_intensity: string;
    fire_size: string;
}, Yup.AnyObject, {
    fire_person_id: {
        __type: undefined;
        className: undefined;
        objectId: undefined;
    };
    fire_location_id: undefined;
    fire_datetime_detection: undefined;
    fire_fire_intensity: undefined;
    fire_size: undefined;
}, "">;
