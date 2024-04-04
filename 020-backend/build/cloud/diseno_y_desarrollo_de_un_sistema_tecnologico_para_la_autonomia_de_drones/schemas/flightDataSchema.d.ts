import * as Yup from 'yup';
export declare const flightDataSchema: Yup.ObjectSchema<{
    fli_person_id: {
        objectId: string;
        __type: string;
        className: string;
    };
    fli_dron_id: string;
    fli_GPS_coordinates: string;
    fli_Altitude: string;
    fli_Speed: string;
    fli_flight_duration: string;
    fli_datetime_flight: string;
}, Yup.AnyObject, {
    fli_person_id: {
        __type: undefined;
        className: undefined;
        objectId: undefined;
    };
    fli_dron_id: undefined;
    fli_GPS_coordinates: undefined;
    fli_Altitude: undefined;
    fli_Speed: undefined;
    fli_flight_duration: undefined;
    fli_datetime_flight: undefined;
}, "">;
