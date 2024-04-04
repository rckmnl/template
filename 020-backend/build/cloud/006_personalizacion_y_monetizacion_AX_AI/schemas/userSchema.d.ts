import * as Yup from 'yup';
export declare const UserSchema: Yup.ObjectSchema<{
    username: string;
    password: string;
    email: string;
    user_type: Yup.Maybe<string | undefined>;
    user_country: Yup.Maybe<string | undefined>;
    user_speciality: Yup.Maybe<string | undefined>;
    user_businessid: Yup.Maybe<string | undefined>;
    user_businessdocument: Yup.Maybe<string | undefined>;
    user_namecompany: Yup.Maybe<string | undefined>;
    user_image: Yup.Maybe<string | undefined>;
}, Yup.AnyObject, {
    username: undefined;
    password: undefined;
    email: undefined;
    user_type: undefined;
    user_country: undefined;
    user_speciality: undefined;
    user_businessid: undefined;
    user_businessdocument: undefined;
    user_namecompany: undefined;
    user_image: undefined;
}, "">;
