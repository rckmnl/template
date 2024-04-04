/// <reference types="parse" />
export declare function getAllActivityLogssService(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getActivityLogsByIdService(activitylogsId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createActivityLogsService(objectData: any): Promise<any>;
export declare function updateActivityLogsService(activitylogsId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteActivityLogsService(activitylogsId: string): Promise<void>;
