/// <reference types="parse" />
import Parse from 'parse/node';
export declare function getAllLocationsData(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getLocationByIdData(locationId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createLocationData(objectData: any): Promise<any>;
export declare function updateLocationData(locationId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteLocationData(locationId: string): Promise<void>;
