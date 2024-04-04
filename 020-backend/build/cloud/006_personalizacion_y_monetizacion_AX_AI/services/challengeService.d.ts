/// <reference types="parse" />
export declare function getAllChallengesService(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getChallengeByIdService(challengeId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createChallengeService(objectData: any): Promise<any>;
export declare function updateChallengeService(challengeId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteChallengeService(objectIdChallenge: string): Promise<void>;
