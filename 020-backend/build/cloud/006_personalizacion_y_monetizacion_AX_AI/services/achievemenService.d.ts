/// <reference types="parse" />
export declare function getAllAchievementsService(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getAchievementByIdService(achievementId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createAchievementService(objectData: any): Promise<any>;
export declare function updateAchievementService(achievementId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteAchievementService(objectIdAchievement: string): Promise<void>;
