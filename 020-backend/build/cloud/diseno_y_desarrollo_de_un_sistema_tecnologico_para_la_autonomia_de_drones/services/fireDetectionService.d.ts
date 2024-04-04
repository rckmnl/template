/// <reference types="parse" />
export declare function getAllFireDetectionsService(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getFireDetectionByIdService(firedetectionId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createFireDetectionService(objectData: any): Promise<any>;
export declare function updateFireDetectionService(firedetectionId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteFireDetectionService(firedetectionId: string): Promise<void>;
