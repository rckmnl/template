import * as Yup from 'yup';
export declare const LocationSchema: Yup.ObjectSchema<{
    loc_person_id: {
        objectId: string;
        __type: string;
        className: string;
    };
    loc_location_name: string;
    loc_geographical_coordinates: string;
}, Yup.AnyObject, {
    loc_person_id: {
        __type: undefined;
        className: undefined;
        objectId: undefined;
    };
    loc_location_name: undefined;
    loc_geographical_coordinates: undefined;
}, "">;
