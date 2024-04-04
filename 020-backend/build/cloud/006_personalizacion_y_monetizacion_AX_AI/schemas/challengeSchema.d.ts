import * as Yup from 'yup';
export declare const ChallengeSchema: Yup.ObjectSchema<{
    cha_id: string;
    cha_company_id: string;
    cha_title: string;
    cha_type: string;
    cha_description: string;
    cha_system_requirements: string;
    cha_price: string;
    cha_participants: string;
    cha_time: string;
    cha_timeExpiration: string;
    cha_questions: {
        answer?: {
            text: string;
            correct: NonNullable<boolean | undefined>;
        }[] | undefined;
        question: string;
    }[] | undefined;
    cha_link: Yup.Maybe<string | undefined>;
    cha_specificTask: Yup.Maybe<string | undefined>;
    cha_question: Yup.Maybe<string | undefined>;
}, Yup.AnyObject, {
    cha_id: undefined;
    cha_company_id: undefined;
    cha_title: undefined;
    cha_type: undefined;
    cha_description: undefined;
    cha_system_requirements: undefined;
    cha_price: undefined;
    cha_participants: undefined;
    cha_time: undefined;
    cha_timeExpiration: undefined;
    cha_questions: "";
    cha_link: undefined;
    cha_specificTask: undefined;
    cha_question: undefined;
}, "">;
