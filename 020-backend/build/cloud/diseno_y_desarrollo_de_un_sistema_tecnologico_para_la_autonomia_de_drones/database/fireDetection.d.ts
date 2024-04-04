/// <reference types="parse" />
import Parse from 'parse/node';
export declare function getAllFireDetectionsData(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getFireDetectionByIdData(firedetectionId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createFireDetectionData(objectData: any): Promise<any>;
export declare function updateFireDetectionData(firedetectionId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteFireDetectionData(firedetectionId: string): Promise<void>;
