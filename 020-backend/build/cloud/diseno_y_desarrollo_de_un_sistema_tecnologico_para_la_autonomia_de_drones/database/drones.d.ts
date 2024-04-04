/// <reference types="parse" />
import Parse from 'parse/node';
export declare function getAllDronesData(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getDronByIdData(dronId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createDronData(objectData: any): Promise<any>;
export declare function updateDronData(dronId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteDronData(dronId: string): Promise<void>;
