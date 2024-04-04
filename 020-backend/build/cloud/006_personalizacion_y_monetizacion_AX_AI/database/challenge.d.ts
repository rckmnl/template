/// <reference types="parse" />
import Parse from 'parse/node';
export declare function getAllChallengesData(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getChallengeByIdData(challengeId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createChallengeData(objectData: any): Promise<any>;
export declare function updateChallengeData(challengeId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteChallengeData(challengeId: string): Promise<void>;
