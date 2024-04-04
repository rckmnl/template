import { IChallenge } from '../models/challenge.interface';
export declare function validateChallenge(challenge: Partial<IChallenge>, isNew: boolean): Promise<{
    errors: string[];
    value: any;
    message?: undefined;
} | {
    message: any;
    errors?: undefined;
    value?: undefined;
} | null>;
