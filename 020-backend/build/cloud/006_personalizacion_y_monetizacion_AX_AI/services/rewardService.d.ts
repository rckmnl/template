/// <reference types="parse" />
export declare function getAllRewardsService(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getRewardByIdService(rewardId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createRewardService(objectData: any): Promise<any>;
export declare function updateRewardService(rewardId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteRewardService(objectIdReward: string): Promise<void>;
