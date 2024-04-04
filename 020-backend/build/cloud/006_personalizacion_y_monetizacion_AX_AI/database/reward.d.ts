/// <reference types="parse" />
import Parse from 'parse/node';
export declare function getAllRewardsData(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getRewardByIdData(rewardId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createRewardData(objectData: any): Promise<any>;
export declare function updateRewardData(rewardId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteRewardData(rewardId: string): Promise<void>;
