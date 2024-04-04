/// <reference types="parse" />
export declare function getAllInterestssService(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getInterestsByIdService(interestsId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createInterestsService(objectData: any): Promise<any>;
export declare function updateInterestsService(interestsId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteInterestsService(interestsId: string): Promise<void>;
