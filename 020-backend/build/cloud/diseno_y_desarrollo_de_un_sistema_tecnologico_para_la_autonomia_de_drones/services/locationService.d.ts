/// <reference types="parse" />
export declare function getAllLocationsService(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getLocationByIdService(locationId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createLocationService(objectData: any): Promise<any>;
export declare function updateLocationService(locationId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteLocationService(locationId: string): Promise<void>;
