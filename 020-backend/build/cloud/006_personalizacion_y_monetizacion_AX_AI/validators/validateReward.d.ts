import { IReward } from '../models/reward.interface';
export declare function validateReward(reward: Partial<IReward>, isNew: boolean): Promise<{
    errors: string[];
    value: any;
    message?: undefined;
} | {
    message: any;
    errors?: undefined;
    value?: undefined;
} | null>;
