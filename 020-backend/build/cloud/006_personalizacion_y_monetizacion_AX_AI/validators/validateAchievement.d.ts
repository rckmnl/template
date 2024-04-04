import { IAchievement } from '../models/achievement.interface';
export declare function validateAchievement(achievement: Partial<IAchievement>, isNew: boolean): Promise<{
    errors: string[];
    value: any;
    message?: undefined;
} | {
    message: any;
    errors?: undefined;
    value?: undefined;
} | null>;
