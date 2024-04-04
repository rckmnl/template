import * as Yup from 'yup';
export declare const TransactionSchema: Yup.ObjectSchema<{
    tra_id: string;
    tra_person_id: string;
    tra_type: string;
    tra_amount: string;
    tra_timestamp: string;
    tra_details: string;
}, Yup.AnyObject, {
    tra_id: undefined;
    tra_person_id: undefined;
    tra_type: undefined;
    tra_amount: undefined;
    tra_timestamp: undefined;
    tra_details: undefined;
}, "">;
