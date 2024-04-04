/// <reference types="parse" />
export declare function getAllFlightDatasService(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getFlightDataByIdService(flightdataId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createFlightDataService(objectData: any): Promise<any>;
export declare function updateFlightDataService(flightdataId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteFlightDataService(flightdataId: string): Promise<void>;
