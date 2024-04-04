/// <reference types="parse" />
import Parse from 'parse/node';
export declare function getAllInterestssData(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getInterestsByIdData(interestsId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createInterestsData(objectData: any): Promise<any>;
export declare function updateInterestsData(interestsId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteInterestsData(interestsId: string): Promise<void>;
