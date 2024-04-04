/// <reference types="parse" />
import Parse from 'parse/node';
export declare function getAllFlightDatasData(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getFlightDataByIdData(flightdataId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createFlightDataData(objectData: any): Promise<any>;
export declare function updateFlightDataData(flightdataId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteFlightDataData(flightdataId: string): Promise<void>;
