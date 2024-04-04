/// <reference types="parse" />
import Parse from 'parse/node';
export declare function getAllActivityLogssData(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getActivityLogsByIdData(activitylogsId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createActivityLogsData(objectData: any): Promise<any>;
export declare function updateActivityLogsData(activitylogsId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteActivityLogsData(activitylogsId: string): Promise<void>;
