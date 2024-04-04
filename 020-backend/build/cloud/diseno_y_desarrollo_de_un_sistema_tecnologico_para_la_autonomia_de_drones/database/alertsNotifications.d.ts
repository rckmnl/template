/// <reference types="parse" />
import Parse from 'parse/node';
export declare function getAllAlertsNotificationssData(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getAlertsNotificationsByIdData(alertsnotificationsId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createAlertsNotificationsData(objectData: any): Promise<any>;
export declare function updateAlertsNotificationsData(alertsnotificationsId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteAlertsNotificationsData(alertsnotificationsId: string): Promise<void>;
