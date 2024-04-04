import * as Yup from 'yup';
export declare const UserSchema: Yup.ObjectSchema<{
    username: string;
    password: string;
    email: string;
    phone: Yup.Maybe<string | undefined>;
    user_type_user: Yup.Maybe<string | undefined>;
    user_interests: Yup.Maybe<{
        category?: Yup.Maybe<string | undefined>;
        subcategory?: Yup.Maybe<string | undefined>;
        additionalField1?: Yup.Maybe<string | undefined>;
        additionalField2?: Yup.Maybe<string | undefined>;
    }[] | undefined>;
    user_birthdate: Yup.Maybe<{} | undefined>;
    user_demographics: {
        age?: Yup.Maybe<number | undefined>;
        gender?: Yup.Maybe<string | undefined>;
        location: {
            country?: Yup.Maybe<string | undefined>;
            province?: Yup.Maybe<string | undefined>;
        };
    };
}, Yup.AnyObject, {
    username: undefined;
    password: undefined;
    email: undefined;
    phone: undefined;
    user_type_user: undefined;
    user_interests: "";
    user_birthdate: undefined;
    user_demographics: {
        age: undefined;
        gender: undefined;
        location: {
            country: undefined;
            province: undefined;
        };
    };
}, "">;
