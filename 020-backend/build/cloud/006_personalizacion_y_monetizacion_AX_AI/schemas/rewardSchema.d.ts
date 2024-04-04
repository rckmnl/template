import * as Yup from 'yup';
export declare const RewardSchema: Yup.ObjectSchema<{
    rew_id: string;
    rew_challenge_id: string;
    rew_user_id: string;
    rew_amount: string;
    rew_currency: string;
    rew_description: string;
}, Yup.AnyObject, {
    rew_id: undefined;
    rew_challenge_id: undefined;
    rew_user_id: undefined;
    rew_amount: undefined;
    rew_currency: undefined;
    rew_description: undefined;
}, "">;
