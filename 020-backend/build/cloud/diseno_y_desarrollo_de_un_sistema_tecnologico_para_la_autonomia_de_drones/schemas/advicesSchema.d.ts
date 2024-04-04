import * as Yup from 'yup';
export declare const AdvicesSchema: Yup.ObjectSchema<{
    adv_person_id: {
        objectId: string;
        __type: string;
        className: string;
    };
    adv_interaction_type: string;
    adv_timestamp: string;
    adv_recommendations: string;
    adv_user_feedback: string;
}, Yup.AnyObject, {
    adv_person_id: {
        __type: undefined;
        className: undefined;
        objectId: undefined;
    };
    adv_interaction_type: undefined;
    adv_timestamp: undefined;
    adv_recommendations: undefined;
    adv_user_feedback: undefined;
}, "">;
