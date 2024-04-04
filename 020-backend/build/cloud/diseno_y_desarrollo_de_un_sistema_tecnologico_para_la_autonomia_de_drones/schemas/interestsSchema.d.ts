import * as Yup from 'yup';
export declare const InterestsSchema: Yup.ObjectSchema<{
    variable_person_id: {
        objectId: string;
        __type: string;
        className: string;
    };
    variable_interest_1: string;
    variable_interest_2: string;
    variable_interest_3: string;
    variable_interest_4: string;
}, Yup.AnyObject, {
    variable_person_id: {
        __type: undefined;
        className: undefined;
        objectId: undefined;
    };
    variable_interest_1: undefined;
    variable_interest_2: undefined;
    variable_interest_3: undefined;
    variable_interest_4: undefined;
}, "">;
