/* eslint-disable no-useless-catch */
/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createAlertsNotificationsData, 
    deleteAlertsNotificationsData, 
    getAllAlertsNotificationssData, 
    getAlertsNotificationsByIdData, 
    updateAlertsNotificationsData
} from "../database/alertsNotifications";


export async function getAllAlertsNotificationssService(page: number) {
try {
  const data = await getAllAlertsNotificationssData(page);
  return data;
} catch (error) {
  throw error;
}
}
export async function getAlertsNotificationsByIdService(alertsnotificationsId: string) {
try {
  const data = await getAlertsNotificationsByIdData(alertsnotificationsId);
  return data;
} catch (error) {
  throw error;
}
}

export async function createAlertsNotificationsService(objectData: any) {
try {
  const data = await createAlertsNotificationsData(objectData);

  return data;
} catch (error) {
  throw error;
}
}

export async function updateAlertsNotificationsService(alertsnotificationsId: string, objectData: any) {
try {
  const data = await updateAlertsNotificationsData(alertsnotificationsId, objectData);
  return data;
} catch (error) {
  throw error;
}
}

export async function deleteAlertsNotificationsService(alertsnotificationsId: string) {
try {
  await deleteAlertsNotificationsData(alertsnotificationsId);
} catch (error) {
  throw error;
}
}