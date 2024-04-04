/// <reference types="parse" />
export declare function getAllAlertsNotificationssService(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getAlertsNotificationsByIdService(alertsnotificationsId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createAlertsNotificationsService(objectData: any): Promise<any>;
export declare function updateAlertsNotificationsService(alertsnotificationsId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteAlertsNotificationsService(alertsnotificationsId: string): Promise<void>;
