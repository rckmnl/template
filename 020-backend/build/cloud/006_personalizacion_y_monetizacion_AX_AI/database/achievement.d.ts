/// <reference types="parse" />
import Parse from 'parse/node';
export declare function getAllAchievementsData(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getAchievementByIdData(achievementId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createAchievementData(objectData: any): Promise<any>;
export declare function updateAchievementData(achievementId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteAchievementData(achievementId: string): Promise<void>;
