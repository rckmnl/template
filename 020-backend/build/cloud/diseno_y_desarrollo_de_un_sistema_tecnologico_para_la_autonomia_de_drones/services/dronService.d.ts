/// <reference types="parse" />
export declare function getAllDronesService(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getDronByIdService(dronId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createDronService(objectData: any): Promise<any>;
export declare function updateDronService(dronId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteDronService(dronId: string): Promise<void>;
